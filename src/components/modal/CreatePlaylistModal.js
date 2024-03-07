import uniqid from "uniqid";
import React, { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useForm } from 'react-hook-form';
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import useCreatePlaylist from '@/hooks/useCreatePlaylist';
import { useUser } from "@/hooks/useUser";

import Modal from '@/components/modal/custom-modal';
import Input from '@/components/input/input';
import Button from '@/components/button/button';
import { NoSongIcon } from "../../assets/icons/icons";

const CreatePlaylistModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const createPlaylist = useCreatePlaylist();
    const supabaseClient = useSupabaseClient();
    const { user } = useUser();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
    } = useForm({
        defaultValues: {
            title: '',
            description: '',
            image: null,
        }
    });

    const onChange = (open) => {
        if (!open) {
            reset();
            createPlaylist.onClose();
            setImagePreview(null);
        }
    }

    const onSubmit = async (values) => {
        try {
            setIsLoading(true);

            const imagePlaylist = values.image?.[0];

            if (!user) {
                toast.error('Missing fields')
                return;
            }

            const uniqueID = uniqid();

            // Create playlists
            const {
                data: playlistData,
                error: playlistError
            } = await supabaseClient
                .storage
                .from('playlists')
                .upload(`playlist-${values.title}-${uniqueID}`, imagePlaylist, {
                    cacheControl: '3600',
                    upsert: false
                });

            if (playlistError) {
                setIsLoading(false);
                return toast.error('Failed playlist create');
            }

            // Upload image
            const {
                data: imageData,
                error: imageError
            } = await supabaseClient
                .storage
                .from('images')
                .upload(`image-${values.title}-${uniqueID}`, imageFile, {
                    cacheControl: '3600',
                    upsert: false
                });

            if (imageError) {
                setIsLoading(false);
                return toast.error('Failed image upload');
            }

            // Create record 
            const { error: supabaseError } = await supabaseClient
                .from('playlists')
                .insert({
                    user_id: user.id,
                    title: values.description,
                    image_path: imageData.path,
                    playlist_path: playlistData.path
                });

            if (supabaseError) {
                return toast.error(supabaseError.message);
            }

            router.refresh();
            setIsLoading(false);
            toast.success('Playlist created!');
            reset();
            createPlaylist.onClose();
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    }


    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImagePreview(reader.result);
            };

            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    }

    return (
        <Modal
            title="Add new playlist"
            description=""
            isOpen={createPlaylist.isOpen}
            onChange={onChange}
        >
            <div className="grid grid-cols-2 gap-2">
                {/* Image Preview */}
                <div className="col-span-1 mr-4 relative">
                    <label htmlFor="imageInput" className="cursor-pointer">
                        {imagePreview ? (
                            <img src={imagePreview} alt="Image Preview" className="max-w-full h-auto w-full aspect-w-1 aspect-h-1 object-cover" />
                        ) : (
                            <div className="bg-black h-full w-full flex items-center justify-center">
                                <div className="h-10 w-10">
                                    <NoSongIcon />
                                </div>
                            </div>
                        )}
                    </label>
                    <input
                        id="imageInput"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        {...register('image', { required: true })}
                        onChange={handleImageChange}
                    />
                </div>


                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="col-span-1 grid grid-cols-1 gap-y-4"
                >
                    <Input
                        id="title"
                        disabled={isLoading}
                        {...register('title', { required: true })}
                        placeholder="Playlist title"
                    />
                    <Input
                        id="description"
                        disabled={isLoading}
                        placeholder="Description"
                    />

                    {/* <div>
                        <div className="pb-1 text-white">
                            Select an image
                        </div>
                        <Input
                            placeholder="test"
                            disabled={isLoading}
                            type="file"
                            accept="image/*"
                            id="image"
                            {...register('image', { required: true })}
                            onChange={handleImageChange}
                        />
                    </div> */}
                    <Button disabled={isLoading} type="submit">
                        Create
                    </Button>
                </form>
            </div>
        </Modal>
    );
}

export default CreatePlaylistModal;
