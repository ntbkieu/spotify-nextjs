import classNames from "classnames";
import Image from "next/image";
import { MenuIcon, SearchIcon } from "../../assets/icons/icons";

export default function Navbar({ }) {
  return (
    <div
      className={classNames(
        "w-full flex flex-col items-center justify-center",
        "transition-width duration-300 ease-in-out",
        "justify-between bg-color-1"
      )}
    >
      <div className="w-full h-full flex justify-between items-center px-[20px] py-[10px]">
        <div className="w-full flex flex-row items-center gap-[10px]">
          <div className="text-black cursor-pointer hover:bg-palettes-1 rounded-[8px] p-[5px]">
            <MenuIcon />
          </div>
          <div className="text-black cursor-pointer hover:bg-palettes-1 rounded-[8px] p-[5px]">
            <SearchIcon />
          </div>
        </div>
        <div
          className="flex flex-row gap-[10px] justify-start items-center"
        >
          <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full border-[2px]">
            <Image
              src="/images/avatar.jpg"
              width={45}
              height={45}
              className="object-cover rounded-full"
              alt="Spotify"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
