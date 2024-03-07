"use strict";

import { useEffect, useState } from "react";
import AuthModal from "@/components/modal/AuthModal";
import SubscribeModal from "@/components/modal/SubscribeModal";
import UploadModal from "@/components/modal/UploadModal";
import CreatePlaylistModal from "@/components/modal/CreatePlaylistModal";

const ModalProvider = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      {/* <SubscribeModal products={products} /> */}
      <UploadModal />
      <CreatePlaylistModal />
    </>
  );
};

export default ModalProvider;
