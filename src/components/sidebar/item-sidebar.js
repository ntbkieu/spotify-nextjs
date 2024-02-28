import Link from "next/link";

const ItemSideBar = ({
  Icon,
  title,
  active,
  navigate = "",
  colorIcon = "#FFFFFF",
}) => {
  return (
    <Link
      href={navigate}
      className="cursor-pointer flex px-[20px] py-[10px] rounded-[8px]"
    >
      <div className="flex flex-row gap-[15px] items-center">
        <div className={`text-[${colorIcon}] w-[25px]`}>
          <Icon />
        </div>

        <p
          className={`${
            active ? "text-[#FFFFFF] over:text-[#FFFFFF]" : "text-[#a7a7a7]"
          } font-Jakarta text-[14px] whitespace-nowrap font-bold`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};

export default ItemSideBar;
