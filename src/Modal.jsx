import React, { useContext } from "react";
import { Modal } from "react-responsive-modal";
import { context } from "./ContextProvider";
const MyModal = ({ itemId }) => {
  const { open, onCloseModal } = useContext(context);
  return (
    <Modal animationDuration="400" open={open} onClose={onCloseModal} center>
      <h2>Component Item Id </h2>
      <p className="itemId">ID : {itemId}</p>
    </Modal>
  );
};

export default MyModal;
