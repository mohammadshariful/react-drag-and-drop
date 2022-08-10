import React, { useState } from "react";
import initialData from "./initial-data";
const TextAreaData = () => {
  const [data, setData] = useState(initialData.layout);
  return (
    <textarea
      className="text-area"
      defaultValue={JSON.stringify(data)}
      rows="4"
      cols="50"
      maxLength="200"
    ></textarea>
  );
};

export default TextAreaData;
