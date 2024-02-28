import { useRouter } from "next/router";
import ItemSideBar from "@/components/sidebar/item-sidebar";
import ButtonPrimary from "@/components/button/button-primary";
import ButtonIcon from "@/components/button/button-icon";
import {
    SpotifyIcon,
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    AddIcon,
    GlobalIcon
} from "../../assets/icons/icons";

export default function SideBar() {
    const router = useRouter();

    return (
        // <div className=" hidden md:flex flex-col  min-h-screen min-w-[250px]  justify-start py-[25px] px-[20px] border-r-[1px] gap-[25px]">
        <div className="bg-color-1 flex flex-col min-h-screen min-w-[350px] justify-start py-[25px] px-[20px] border-r-[1px] gap-[25px]">
            <div className="grid gap-2">
                <div className="bg-color-2 rounded-md">
                    <ItemSideBar
                        Icon={SpotifyIcon}
                        colorIcon={"#FFFFFF"}
                        active={true}
                        navigate={"/"}
                    />
                    <ItemSideBar
                        Icon={HomeIcon}
                        colorIcon={"#FFFFFF"}
                        title={"Home"}
                        active={true}
                        navigate={"/"}
                    />
                    <ItemSideBar
                        Icon={SearchIcon}
                        colorIcon={"#FFFFFF"}
                        title={"Search"}
                        active={false}
                        navigate={"/search"}
                    />
                </div>
                <div className="bg-color-2 rounded-md  flex flex-col gap-2">
                    <div className="flex flex-row justify-between pt-2">
                        <ItemSideBar
                            Icon={LibraryIcon}
                            colorIcon={"#FFFFFF"}
                            title={"Your Library"}
                            active={false}
                            navigate={"/library"}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2 overflow-y-hidden">
                        <div className="flex flex-col gap-3 py-[18px] px-[18px] bg-color-3 rounded-md text-white">
                            <p className="font-bold text-[15px]">Create your first playlist</p>
                            <p className="font-normal text-[12px]">It&apos;s easy, we&apos;ll help you</p>
                            <ButtonPrimary
                                title={"Create Playlist"}
                                classExtra="cursor-pointer"
                            />
                        </div>
                        <div className="flex flex-col gap-3 py-[18px] px-[18px] bg-color-3 rounded-md text-white">
                            <p className="font-bold text-[15px]">Let&apos;s find some podcasts to follow</p>
                            <p className="font-normal text-[12px]">We&apos;ll keep you updated on new episodes</p>
                            <ButtonPrimary
                                title={"Browse podcasts"}
                                classExtra="cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 py-[18px] px-[18px] rounded-md text-white">
                        <p className="font-thin text-[10px]">Legal</p>
                        <ButtonIcon
                            Icon={GlobalIcon}
                            title={"English"}
                            classExtra="cursor-pointer"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
