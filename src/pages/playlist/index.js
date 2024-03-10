import Layout from "@/components/layout";
import getSongs from "@/actions/getSongs";
import { useState, useEffect } from "react";
import Image from "next/image";
import SearchBar from "@/components/searchbar/searchbar";
import { CloseIcon, ListIcon, NoSongIcon, ThreeDotIcon } from "../../assets/icons/icons";
import Footer from "@/components/footer/footer";



export const revalidate = 0;

export default function Playlist() {

  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const songsData = await getSongs();
        setSongs(songsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    console.log("Search value:", searchValue);
  };

  return (
    <Layout>
      <div className="rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <div className="mb-2 px-5">
          <div className="flex gap-4 mt-4 items-end">
            <label htmlFor="imageInput" className="cursor-pointer h-[150px] w-[150px]">
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Image Preview"
                  layout="fill"
                  objectFit="cover"
                  className="shadow-lg"
                />
              ) : (
                <div className="bg-[#282828] h-full w-full flex items-center justify-center">
                  <div className="h-10 w-10">
                    <NoSongIcon />
                  </div>
                </div>
              )}
            </label>

            <div className="flex flex-col justify-start">
              <h5 className="text-white text-[14px] font-semibold">Playlist</h5>
              <h1 className="text-white text-3xl font-bold">My Playlist!</h1>
              <h5 className="text-white text-[14px] font-semibold">username</h5>
            </div>
          </div>
        </div>
        <div className="bg-[#1e1e1e] grid grid-rows-2 min-h-[80px] w-full">
          <div className="mt-[20px] py-5 px-4 border-b-2 border-[#323232]">
            <div className="flex justify-between items-center px-2">
              <div className="w-5 h-5">
                <ThreeDotIcon />
              </div>
              <div className="flex flex-row items-center">
                <p className="text-white mr-2 text-[14px] font-semibold">List</p>
                <div className="w-4 h-4">
                  <ListIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[200px] mt-2 py-5 px-4 flex flex-row justify-between">
            <div className="">
              <h1 className="text-white text-xl font-bold">Let&apos;s find something for your playlist</h1>
              <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onSearch={handleSearch}
                placeholder="Search for songs or episodes"
              />
            </div>
            <div className="w-8 h-8">
              <CloseIcon />
            </div>
          </div>

          <Footer />

        </div>
      </div>
    </Layout>
  );
}