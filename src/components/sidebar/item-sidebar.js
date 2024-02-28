import Link from "next/link";

const ItemSideBar = ({
  Icon,
  title,
  active,
  navigate = "",
  colorIcon = "#000",
}) => {
  return (
    <Link
      href={navigate}
      className="cursor-pointer hover:bg-palettes-1 flex px-[20px] py-[10px] rounded-[8px]"
    >
      <div className="flex flex-row gap-[15px] items-center">
        <div className={`text-[${colorIcon}] w-[25px]`}>
          <Icon />
        </div>

        <p
          className={`${
            active ? "text-black" : "text-[#000000a6]"
          } font-Jakarta text-[14px] whitespace-nowrap`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};

export default ItemSideBar;
