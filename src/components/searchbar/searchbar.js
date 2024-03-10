import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ searchValue, setSearchValue, onSearch, placeholder }) {

    return (
        <div className="flex items-center">
            <div className="relative">
                <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
                    <FaSearch className="text-gray-500" size={16} />
                </div>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && onSearch()}
                    className="bg-[#2d2d2d] h-10 w-full mt-2 pl-10 pr-5 rounded-md border-none text-white"
                />
            </div>
        </div>
    );
}