import Navbar from "@/components/navbar/navbar";
import SideBar from "./sidebar/sidebar";
import Head from "next/head";
import SupabaseProvider from "../providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";



const Layout = ({ children, title }) => {
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
                <div className="px-5">{children}</div>
              </div>
            </div>
          </UserProvider>
        </SupabaseProvider>
      </main>
    </>
  );
};

export default Layout;
