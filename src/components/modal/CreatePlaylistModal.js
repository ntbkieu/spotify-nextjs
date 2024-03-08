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
import Image from "next/image";

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

            // Upload image
            const {
                data: imageData,
                error: imageError
            } = await supabaseClient
                .storage
                .from('playlists')
                .upload(`playlist-${values.title}-${uniqueID}`, imagePlaylist, {
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
                    title: values.title,
                    description: values.description,
                    image_path: imageData.path,
                });

            if (supabaseError) {
                return toast.error(supabaseError.message);
            }

            router.push('/playlist');
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
            isOpen={createPlaylist.isOpen}
            onChange={onChange}
        >
            <div className="grid grid-cols-2">
                {/* Image Preview */}
                <div className="col-span-1 mr-4 relative w-[200px] h-[200px]">
                    <label htmlFor="imageInput" className="cursor-pointer w-[200px] h-[200px]">
                        {imagePreview ? (
                            <Image
                                src={imagePreview}
                                alt="Image Preview"
                                layout="fill"
                                objectFit="cover"
                                className="shadow-lg"
                            />
                        ) : (
                            <div className="bg-black h-full w-full flex items-center justify-center">
                                <div className="h-10 w-10">
                                    <NoSongIcon />
                                </div>
                            </div>
                        )}
                    </label>
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
                        {...register('description')}
                        placeholder="Description"
                    />

                    <div>
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
                    </div>
                    <Button disabled={isLoading} type="submit">
                        Create
                    </Button>
                </form>
            </div>
            <div className="text-[11px] font-medium text-white mt-2">By proceeding, you agree to give Spotify access to the image you choose to upload. Please make sure you have the right to upload the image.</div>
        </Modal>
    );
}

export default CreatePlaylistModal;
