import React, { useContext, useRef } from "react";
import { useDrag } from "react-dnd";
import { COMPONENT } from "./constants";
import { context } from "./ContextProvider";
import MyModal from "./Modal";

const style = {
  border: "1px dashed black",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  cursor: "move",
};
const Component = ({ data, components, path }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: { type: COMPONENT, id: data.id, path },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const { onOpenModal } = useContext(context);

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const component = components[data.id];
  return (
    <>
      <div
        onClick={onOpenModal}
        ref={ref}
        style={{ ...style, opacity }}
        className="component draggable"
      >
        <div>{data.id}</div>
        <div>{component.content}</div>
      </div>
      <MyModal itemId={data.id} />
    </>
  );
};
export default Component;