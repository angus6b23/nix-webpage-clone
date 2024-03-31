import { type ReactElement } from "react";

export interface SquareButtonProps {
  color: string;
  href: string;
  children?: ReactElement | string;
}

export default function SquareButton(props: SquareButtonProps): ReactElement {
  return (
    <a
      className="!text-white !no-underline font-bold px-10 py-2.5 md:px-14 md:py-4 rounded-full md:rounded-2xl text-center w-full md:w-auto drop-shadow-[0_4px_1px_rgba(0,0,0,0.2)]"
      style={{ backgroundColor: props.color }}
      href={props.href}
      target="_blank"
    >
      {props.children}
    </a>
  );
}
