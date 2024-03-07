import React from 'react';

function ButtonPrimary({ title, classExtra, onClick }) {
    return (
        <div
            className={`w-fit rounded-full text-color-1 text-[12px] py-2 px-4 font-bold bg-btn-1 ${classExtra}`}
            onClick={onClick}
        >
            <p>{title}</p>
        </div>
    );
}

export default ButtonPrimary;
