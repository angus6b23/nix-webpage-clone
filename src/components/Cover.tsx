import { useRef, type ReactElement, useEffect } from "react";
import SquareButton from "./SquareButton";
import * as Asciinema from "asciinema-player";
import "asciinema-player/dist/bundle/asciinema-player.css";
import "../styles/apStyles.css";

export interface CoverProps {}

export default function Cover(): ReactElement {
  const asciinemaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Asciinema.create("/casts/cover.cast", asciinemaRef.current, {
      preload: true,
      loop: true,
      poster: "npt:0:38",
    });
  }, []);

  return (
    // Cover wrapper
    <div className="bg-nixdarkblue bg-coverBackdrop bg-cover bg-no-repeat bg-left">
      {/* Content wrapper */}
      <div className="md:mx-auto px-4 sm:max-w-[736px] md:max-w-[960px] lg:max-w-[1168px] text-white grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 lg:py-24">
        {/* Left / Upper side content wrapper */}
        <div className="flex flex-col gap-4 my-auto mx-0">
          {/* Slogans and descriptions */}
          <h1 className="text-5xl font-heading font-bold leading-none">
            Declarative builds and deployments.
          </h1>
          <p className="text-lg font-extralight leading-7">
            Nix is a tool that takes a unique approach to package management and
            system configuration. Learn how to make reproducible, declarative
            and reliable systems.
          </p>
          {/* Button Wrapper */}
          <div className="flex flex-col md:flex-row justify-center lg:justify-stretch gap-4 text-center">
            <SquareButton
              href="https://nixos.org/download"
              color="rgb(106 213 65 / var(--tw-bg-opacity))"
            >
              Download
            </SquareButton>
            <SquareButton
              href="https://nixos.org/learn"
              color="rgb(126 186 228 / var(--tw-bg-opacity))"
            >
              Get Started
            </SquareButton>
          </div>
        </div>
        {/* Asciinema player */}
        <div
          className="bg-[#121314] border-white border-[1rem] rounded-3xl drop-shadow-[0_8px_2px_rgba(0,0,0,0.2)] min-h-[300px] max-h-[360px] overflow-hidden relative"
          ref={asciinemaRef}
        />
      </div>
    </div>
  );
}
