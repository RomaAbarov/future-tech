import { InputHTMLAttributes } from "react";
import clsx from "clsx";
import "./Input.scss";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} className={clsx("field__control", props.className)} />
  );
}
