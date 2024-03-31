import { type ReactElement } from "react";

export interface RoundButtonProps {
  color: string;
  href: string;
  children?: ReactElement | string;
}

export default function RoundButton(props: RoundButtonProps): ReactElement {
  return (
    <a
      href={props.href}
      target="_blank"
      className="!no-underline font-bold px-10 py-2.5 rounded-3xl text-center text-white drop-shadow-[0_4px_1px_rgba(0,0,0,0.2)]"
      style={{ backgroundColor: props.color }}
    >
      {props.children}
    </a>
  );
}
