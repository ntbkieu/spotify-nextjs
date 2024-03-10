import Layout from "@/components/layout";
import ListItem from "@/components/list-item";
import PageContent from "@/components/page-content";
import getSongs from "@/actions/getSongs";
import { useState, useEffect } from "react";



export const revalidate = 0;

export default function Home() {

  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const songsData = await getSongs();
        setSongs(songsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <div className="mb-2 px-5">
          <h1 className="text-white text-3xl font-semibold">
            Welcome back!
          </h1>
          <div className="grid grid-cols-1 sm:grid-col-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem
              image="/images/favlist.png"
              name="Liked Songs" />
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <h1 className="text-white text-lg font-semibold">Newest songs</h1>
            </div>
            <PageContent songs={songs} />
          </div>
        </div>
      </div>
    </Layout>
  );
}