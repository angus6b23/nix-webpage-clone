import { type ReactElement } from "react";

export default function FindPackages(): ReactElement {
  return (
    <div className="relative after:block after:bg-divider after:absolute after:-bottom-full after:left-0 after:w-full after:h-96 after:bg-no-repeat after:bg-[100%_auto]">
      <section className="bg-nixlighterblue pt-4">
        {/* Content Wrapper */}
        <div className="md:mx-auto px-4 sm:max-w-[736px] md:max-w-[960px] lg:max-w-[1168px] flex justify-center pb-8 flex-col w-full items-center gap-4 pt-8">
          {/* Caption */}
          <h2 className="text-4xl text-center md:w-2/3 text-nixdarkblue leading-tight font-heading font-bold pb-0">
            Choose from Thousands of Packages
          </h2>
          {/* Description */}
          <p className="font-extralight leading-relaxed text-2xl md:w-5/6 text-center pb-2">
            The Nix Packages collection (
            <a className="font-bold text-nixdarkblue underline" href="#">
              Nixpkgs
            </a>
            ) is a set of {" "}
            <span className="font-bold text-nixgreen">
              over 80 000 packages
            </span>{" "}
            for the Nix package manager.
          </p>
          {/* Search Form */}
          <form
            className="flex flex-col items-stretch md:items-center justify-center gap-6 w-full md:w-auto"
            method="get"
            action="https://search.nixos.org/packages"
          >
            <div className="relative">
              <img
                src="/assets/search.svg"
                className="h-8 w-8 absolute text-nixdarkblue top-3.5 left-3 md:block"
              ></img>
              <input
                className="outline-nixlightblue outline-2 focus:outline focus:border-nixlightblue rounded-full placeholder-gray-400 text-normal text-nixdarkblue placeholder-grey-200 w-full py-3 text-xl pl-11 pr-4 md:w-[30rem] border-2"
                type="text"
                name="query"
                placeholder="Search for Nix packages"
              />
            </div>
            {/* Submit button */}
            <button
              className="bg-nixgreen font-bold px-8 py-2.5 rounded-3xl md:w-auto w-full text-center text-white drop-shadow-[0_4px_1px_rgba(0,0,0,0.2)]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
