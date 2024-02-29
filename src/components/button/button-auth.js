function ButtonAuth({ title, classExtra, disabled }) {
    return (
        <div className={` ${classExtra} w-full rounded-full bg-white border border-transparent px-6 py-2 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}>
            <p>{title}</p>
        </div>
    );
}

export default ButtonAuth;
