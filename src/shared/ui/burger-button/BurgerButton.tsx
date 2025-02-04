import clsx from "clsx";
import "./BurgerButton.scss";

type Props = {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
};

export function BurgerButton({ isActive, setIsActive }: Props) {
  return (
    <button
      className={clsx("burger-button visible-mobile", isActive && "is-active")}
      type="button"
      aria-label="open menu"
      title="open menu"
      onClick={() => {
        document.documentElement.classList.toggle("is-lock");
        setIsActive(!isActive);
      }}
    >
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
    </button>
  );
}
