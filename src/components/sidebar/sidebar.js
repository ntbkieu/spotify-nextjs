import { useRouter } from "next/router";
import ItemSideBar from "@/components/sidebar/item-sidebar";
import Image from "next/image";
import Avatar from "../../../public/images/avatar.jpg";
import {
    HomeIcon,
} from "../../assets/icons/icons";

export default function SideBar() {
    const router = useRouter();

    return (
        <div className="flex flex-col  min-h-screen min-w-[250px]  justify-start py-[25px] px-[20px] border-r-[1px] gap-[25px]">
            <div className=" bg-palettes-1 w-full rounded-[25px] py-[15px] flex justify-center items-center">
                <Image
                    src={Avatar}
                    alt="Avatar"
                    className=" rounded-full"
                    height={50}
                    width={50}
                />
            </div>
            <div>
                <div>
                    <ItemSideBar
                        Icon={HomeIcon}
                        colorIcon={"#000000"}
                        title={"Tổng quan"}
                        active={true}
                        navigate={"/"}
                    />
                </div>
            </div>
        </div>
    );
}
