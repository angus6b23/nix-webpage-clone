import { type ReactElement, useState } from "react";
import clsx from "clsx";

export interface NavbarProps {}

export default function Navbar(): ReactElement {
  const [showNav, setShowNav] = useState(false);
  const toggleShowNav = () => {
    setShowNav((prevState) => !prevState);
  };

  return (
    // Header nav
    <header
      className="bg-white text-black font-extralight drop-shadow-[0_8px_2px_rgba(0,0,0,0.2)]"
      role="banner"
    >
      {/* use flex layout for handling navigations */}
      <div className="md:mx-auto px-4 sm:max-w-[736px] md:max-w-[960px] lg:max-w-[1168px] flex flex-col md:flex-row justify-between md:items-center">
        <div className="font-normal gap-2 flex justify-between md:justify-start items-center my-2 w-full">
          {/* Link and logo at the left */}
          <a
            className="select-none gap-2 flex justify-between md:justify-start items-center"
            href="/"
          >
            <img className="h-16" src="/assets/logo-nix.svg"></img>
            <img
              className="h-16 block md:hidden xl:block"
              src="/assets/logo-nix-text.svg"
            ></img>
          </a>
          {/* Toggle button at the right only visible less than md breakpoint*/}
          <button
            className="bg-nixlightblue block md:hidden p-4 rounded-lg"
            aria-label="Main Navigation Toggle"
            onClick={toggleShowNav}
          >
            <span className="bg-white block w-8 h-1 mb-1.5"></span>
            <span className="bg-white block w-8 h-1 mb-1.5"></span>
            <span className="bg-white block w-8 h-1"></span>
          </button>
        </div>
        {/* Navbars */}
        <nav
          aria-label="Main Navigation"
          role="menubar"
          className={clsx(
            "pb-4 md:pb-0 flex-col md:flex-row gap-0.5 md:gap-5 md:flex",
            {
              flex: showNav,
              hidden: !showNav,
            },
          )}
        >
          <a
            className="pt-8 pb-6 text-center text-nixsemidarkblue md:text-black md:hover:border-b-nixlightblue border-b-4 border-b-nixlighterblue md:border-b-transparent bg-nixlighterblue md:bg-transparent"
            href="https://nixos.org/explore"
            target="_blank"
          >
            Explore
          </a>
          <a
            className="pt-8 pb-6 text-center text-nixsemidarkblue md:text-black md:hover:border-b-nixlightblue border-b-4 border-b-nixlighterblue md:border-b-transparent bg-nixlighterblue md:bg-transparent"
            href="https://nixos.org/download"
            target="_blank"
          >
            Download
          </a>
          <a
            className="pt-8 pb-6 text-center text-nixsemidarkblue md:text-black md:hover:border-b-nixlightblue border-b-4 border-b-nixlighterblue md:border-b-transparent bg-nixlighterblue md:bg-transparent"
            href="https://nixos.org/learn"
            target="_blank"
          >
            Learn
          </a>
          <a
            className="pt-8 pb-6 text-center text-nixsemidarkblue md:text-black md:hover:border-b-nixlightblue border-b-4 border-b-nixlighterblue md:border-b-transparent bg-nixlighterblue md:bg-transparent"
            href="https://nixos.org/community"
            target="_blank"
          >
            Community
          </a>
          <a
            className="pt-8 pb-6 text-center text-nixsemidarkblue md:text-black md:hover:border-b-nixlightblue border-b-4 border-b-nixlighterblue md:border-b-transparent bg-nixlighterblue md:bg-transparent"
            href="https://nixos.org/blog"
            target="_blank"
          >
            Blog
          </a>
          <a
            className="pt-8 pb-6 text-center text-nixsemidarkblue md:text-black md:hover:border-b-nixlightblue border-b-4 border-b-nixlighterblue md:border-b-transparent bg-nixlighterblue md:bg-transparent"
            href="https://nixos.org/donate"
            target="_blank"
          >
            Donate
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="pt-8 pb-6 text-center text-nixsemidarkblue md:text-black md:hover:border-b-nixlightblue border-b-4 border-b-nixlighterblue md:border-b-transparent bg-nixlighterblue md:bg-transparent"
            href="https://search.nixos.org"
            arial-label="Nixos package and options search"
          >
            Search
          </a>
        </nav>
      </div>
    </header>
  );
}
