"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa"

const ListItem = ({ image, name, href }) => {
    const router = useRouter();

    const onClick = () => {
        router.push(href)
    }

    return (
        <button onClick={() => { }} className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
            <div className="relative min-h-[64px] min-w-[64px]">
                <Image
                    className="object-cover rounded-sm"
                    fill
                    src={image}
                    alt="image"
                />
            </div>
            <p className="text-white font-medium truncate py-5">{name}</p>
            <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadod-md group-hover:opacity-100 hover:scale-110 right-5">
                <FaPlay className="text-black" />
            </div>
        </button>
    )
}

export default ListItem;