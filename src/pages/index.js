import Layout from "@/components/layout";
import Image from "next/image";
import ListItem from "@/components/list-item";

export default function Home() {
  return (
    <Layout>
      {/* <div className="w-full h-full flex flex-row bg-color-1">
        <div className="px-[50px] py-[40px] gap-[20px] flex flex-col w-full">
          <div className="flex flex-row justify-between items-center w-full relative overflow-hidden bg-color-2 py-[30px] rounded-[8px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <div className="flex flex-col px-[20px]">
              <span className="text-[21px] font-bold text-text-1 font-Jakarta">
                Spotify Playlists
              </span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">
            Welcome back!
          </h1>
          <div className="grid grid-cols-1 sm:grid-col-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem
              image="/images/favlist.png"
              name="Liked Songs" />
          </div>
        </div>
      </div>

      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest songs</h1>
        </div>
        <div>
          List of songs!
        </div>
      </div>
    </Layout>
  );
}