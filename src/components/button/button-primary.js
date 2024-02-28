function ButtonPrimary({ title, classExtra }) {
    return (
        <div className={`w-fit rounded-full text-color-1 text-[12px] py-2 px-4 font-bold bg-btn-1 ${classExtra}`}>
            <p>{title}</p>
        </div>
    );
}

export default ButtonPrimary;
