import { useEffect, useState } from 'react';
import Navbar from "@/components/navbar/navbar";
import SideBar from "./sidebar/sidebar";
import Head from "next/head";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";

export const revalidate = 0

const Layout = ({ children, title }) => {

  const [userSongs, setUserSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const songs = await getSongsByUserId();
        setUserSongs(songs);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="flex min-w-screen min-h-screen bg-color-1">
        <Head>
          <title>{title}</title>
        </Head>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <div className="w-full h-full min-h-screen flex flex-row">
              <ModalProvider>
              </ModalProvider>
              <SideBar />
              <div className="flex flex-col flex-grow">
                <Navbar />
                <div className="">{children}</div>
              </div>
            </div>
          </UserProvider>
        </SupabaseProvider>
      </main>
    </>
  );
};

export default Layout;
