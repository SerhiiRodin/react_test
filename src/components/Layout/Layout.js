import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { nanoid } from "nanoid";

import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";

const Layout = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const createUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log(newUser);
  };

  return (
    <div className="container">
      <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
          <Header showModal={showModal} />
      <Outlet />
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <LoginForm createUser={createUser} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Layout;
