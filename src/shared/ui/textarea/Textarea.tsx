import { TextareaHTMLAttributes } from "react";
import clsx from "clsx";
import "./Textarea.scss";

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={clsx("field__control", props.className)}
    ></textarea>
  );
}
