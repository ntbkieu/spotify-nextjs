import React from 'react';

const Section = ({ title, links, direction }) => {
    const containerStyle = direction === 'horizontal' ? 'flex space-x-4' : 'list-none p-0 m-0';

    return (
        <div>
            <h2 className="font-bold mb-2">{title}</h2>
            <div className={containerStyle}>
                {links.map((link, index) => (
                    <React.Fragment key={index}>
                        {direction === 'horizontal' ? (
                            <a href="#" className="text-[#a7a7a7] hover:text-white text-[14px]">{link}</a>
                        ) : (
                            <li>
                                <a href="#" className="text-[#a7a7a7] hover:text-white text-[14px]">{link}</a>
                            </li>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Section;
