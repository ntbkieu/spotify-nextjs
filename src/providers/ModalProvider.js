"use strict";

import { useEffect, useState } from "react";
import AuthModal from "@/components/modal/AuthModal";
import SubscribeModal from "@/components/modal/SubscribeModal";
import UploadModal from "@/components/modal/UploadModal";

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
    </>
  );
};

export default ModalProvider;
