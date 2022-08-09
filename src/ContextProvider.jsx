import React, { createContext, useState } from "react";
import Example from "./example";
export const context = createContext();
const ContextProvider = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <context.Provider value={{ open, onOpenModal, onCloseModal }}>
      <Example />
    </context.Provider>
  );
};

export default ContextProvider;
