import { useEffect } from "react";

export const Card = (props) => {
  // useEffect(() => {
  //   document.addEventListener("click", () => {
  //     console.log(props.content);
  //   });
  // }, [props.content]);

  return (
    <div onClick={() => props.onClick(props.content)} className="card">
      {props.content}
    </div>
  );
};
