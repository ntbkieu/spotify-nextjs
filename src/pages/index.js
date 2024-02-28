import Layout from "@/components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-full flex flex-row bg-color-1">
        <div className="px-[50px] py-[40px] gap-[20px] flex flex-col w-full">
          <div className="flex flex-row justify-between items-center w-full relative overflow-hidden bg-color-2 py-[30px] rounded-[8px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <div className="flex flex-col px-[20px]">
              <span className="text-[21px] font-bold text-text-1 font-Jakarta">
                Spotify Playlists
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}