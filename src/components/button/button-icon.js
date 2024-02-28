function ButtonIcon({ Icon, title, classExtra }) {
  return (
    <div className={`flex flex-row gap-[8px] bg-color-1 w-fit rounded-full text-white text-[12px] py-2 px-4 border ${classExtra}`}>
      <div className={`text-white w-[15px]`}>
        <Icon />
      </div>
      <p>{title}</p>
    </div>
  );
}

export default ButtonIcon;
