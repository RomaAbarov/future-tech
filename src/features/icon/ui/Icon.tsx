import { SVGProps } from "react";
// не знаю как решить
// Image import "/public/icons/sprite.svg?url" is not a valid image file. The image may be corrupted or an unsupported format.
// import sprite from "/public/icons/sprite.svg?url";

interface Props extends SVGProps<SVGSVGElement> {
  name: "like" | "discuss" | "share";
}

export function Icon({ name, ...rest }: Props) {
  return (
    <svg {...rest} viewBox="0 0 24 24">
      <use xlinkHref={`/icons/sprite.svg#${name}`} />
    </svg>
  );
}
