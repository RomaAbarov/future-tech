import clsx from "clsx";
import "./BurgerButton.scss";

type Props = {
  isActive: boolean;
  onClick: () => void;
};

export function BurgerButton({ isActive, onClick }: Props) {
  return (
    <button
      className={clsx("burger-button visible-mobile", isActive && "is-active")}
      type="button"
      aria-label="open menu"
      title="open menu"
      onClick={onClick}
    >
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
    </button>
  );
}
