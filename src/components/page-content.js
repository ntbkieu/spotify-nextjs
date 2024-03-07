"use client";
import SongItem from "@/components/song-item";

const PageContent = ({ songs }) => {
    return (
        <div>
            {songs.length === 0 ? (
                <div className="mt-4 text-neutral-400">
                    <p>No songs available</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
                    {songs.map((song) => (
                        <SongItem
                            key={song.id}
                            data={song}
                            onClick={() => { }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PageContent;