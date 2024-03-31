import { type ReactElement } from "react";
import RoundButton from "./RoundButton";

export default function Announcement(): ReactElement {
  return (
    <>
      <div className="clickable bg-nixlighterblue font-bold text-nixsemidarkblue cursor-pointer">
        <div className="md:mx-auto px-4 sm:max-w-[736px] md:max-w-[960px] lg:max-w-[1168px] p-4 flex flex-col md:flex-row items-center justify-between gap-1 text-lg font-heading">
          <b>NixOs 23.11 released</b>
          <RoundButton
            color="rgb(255 171 13 / var(--tw-bg-opacity))"
            href="https://nixos.org/blog/announcements/2023/nixos-2311/"
          >
            Announcement
          </RoundButton>
        </div>
      </div>
    </>
  );
}
