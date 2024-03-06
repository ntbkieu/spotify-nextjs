function ButtonAuth({ title, classExtra, disabled, onClick }) {
    return (
        <div 
            className={`w-full rounded-full bg-green-500 border border-transparent px-6 py-2 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition ${classExtra} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
            onClick={onClick}
        >
            <p>{title}</p>
        </div>
    );
}

export default ButtonAuth;
