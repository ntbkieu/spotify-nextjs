import Navbar from "@/components/navbar/navbar";
import SideBar from "./sidebar/sidebar";
import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <>
      <main className="flex min-w-screen min-h-screen bg-color-1">
        <Head>
          <title>{title}</title>
        </Head>
        <div className="w-full h-full min-h-screen flex flex-row">
          <SideBar />
          <div className="flex flex-col flex-grow">
            <Navbar />
            <div className="px-5">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
