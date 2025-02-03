import { LabelHTMLAttributes } from "react";
import clsx from "clsx";
import "./InputLabel.scss";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  isRequired?: boolean;
  classForRequired?: string;
}

export function InputLabel({
  isRequired,
  classForRequired,
  className,
  label,
  ...props
}: Props) {
  return (
    <label {...props} className={clsx("field__label", className)}>
      {label}
      {isRequired && (
        <span
          className={clsx("field__required-star", classForRequired)}
          aria-hidden="true"
        >
          *
        </span>
      )}
    </label>
  );
}
