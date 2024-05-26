import { useCallback, useEffect, useState } from "react";

export default function TitleBox() {
  const [title, setTitle] = useState("Untitled Document");
  //   useCallback(
  //     ((TitleDoc = () => {
  //       setTitle("");
  //     }),
  //     [title])
  //   );
  function setDocTitle(event) {
    setTitle(event.target.value);
  }
  return (
    <input
      type="text"
      onChange={() => {
        setDocTitle;
      }}
      value={title}
      id="DocTitle"
      className=" p-2"
    />
  );
}
