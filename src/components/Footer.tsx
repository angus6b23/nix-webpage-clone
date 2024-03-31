import { type ReactElement } from "react";

export interface FooterProps {}

export default function Footer(props: FooterProps): ReactElement {
  return (
    <section className="bg-nixdarkerblue text-white font-light clear-both">
      <div className="md:mx-auto px-4 sm:max-w-[736px] md:max-w-[960px] lg:max-w-[1168px]">
        {/* Links wrapper */}
        <div className="flex flex-col sm:flex-row flex-wrap py-8 gap-y-8">
          {/* Link group 1 */}
          <div className="basis-1/2 lg:basis-1/4">
            {" "}
            <h4 className="text-xl font-bold font-heading text-nixdarkblue mb-4">
              The Project
            </h4>{" "}
            <ul className="space-y-2 font-extralight">
              {" "}
              <li>
                <a href="https://status.nixos.org/">Channel Status</a>
              </li>
              <li>
                <a href="https://search.nixos.org/packages">Packages search</a>
              </li>
              <li>
                <a href="https://search.nixos.org/options">Options search</a>
              </li>
              <li>
                <a href="https://reproducible.nixos.org/">
                  Reproducible Builds Status
                </a>
              </li>
              <li>
                <a href="/community/teams/security">Security</a>
              </li>{" "}
            </ul>{" "}
          </div>
          {/* Link group 2 */}
          <div className="basis-1/2 lg:basis-1/4">
            {" "}
            <h4 className="text-xl font-bold font-heading text-nixdarkblue mb-4">
              Get in Touch
            </h4>{" "}
            <ul className="space-y-2 font-extralight">
              {" "}
              <li>
                <a href="https://discourse.nixos.org/">Forum</a>
              </li>
              <li>
                <a href="https://matrix.to/#/#community:nixos.org">
                  Matrix Chat
                </a>
              </li>
              <li>
                <a href="/community/commercial-support">Commercial support</a>
              </li>{" "}
            </ul>{" "}
          </div>
          {/* Link group 3 */}
          <div className="basis-1/2 lg:basis-1/4">
            {" "}
            <h4 className="text-xl font-bold font-heading text-nixdarkblue mb-4">
              Contribute
            </h4>{" "}
            <ul className="space-y-2 font-extralight">
              {" "}
              <li>
                <a href="https://nix.dev/contributing/how-to-contribute">
                  Contributing Guide
                </a>
              </li>
              <li>
                <a href="/donate">Donate</a>
              </li>{" "}
            </ul>{" "}
          </div>
          {/* Link group 4 */}
          <div className="basis-1/2 lg:basis-1/4">
            {" "}
            <h4 className="text-xl font-bold font-heading text-nixdarkblue mb-4">
              Stay up to Date
            </h4>{" "}
            <ul className="space-y-2 font-extralight">
              {" "}
              <li>
                <a href="/blog/">Blog</a>
              </li>
              <li>
                <a href="https://weekly.nixos.org/">Newsletter</a>
              </li>{" "}
            </ul>{" "}
          </div>
        </div>
        {/* Divider */}
        <hr className="border-nixlightblue"></hr>
        {/* Copyright and contact section*/}
        <div className="flex flex-col lg:flex-row flex-wrap py-8 gap-8 lg:gap-0 font-extralight">
          {/* Logo and license information */}
          <div className="basis-1/2 flex flex-row gap-2">
            <img
              src="assets/footer-logo.svg"
              className="inline-block w-16 h-16"
            />
            <div className="flex flex-col justify-center">
              <p>Copyright © 2023 NixOS contributors</p>
              <a href="https://github.com/NixOS/nixos-homepage/blob/master/LICENSES/CC-BY-SA-4.0.txt">
                <abbr title="Creative Commons Attribution Share Alike 4.0 International">
                  CC-BY-SA-4.0
                </abbr>
              </a>
            </div>
          </div>
          {/* Optionally displayed hr */}
          <hr className="lg:hidden border-nixlightblue" />
          {/* Contacts */}
          <div className="basis-1/2 flex flex-row justify-between lg:justify-end gap-4 font-extralight">
            <h4 className="my-auto">Connect with us:</h4>
            {/* Links */}
            <div className="my-auto flex flex-row gap-3">
              <a
                href="https://chaos.social/@nixos_org"
                aria-label="Connect with us on Mastodon"
              >
                <img className="h-7 w-7" src="/assets/contact-mastadon.svg" />
              </a>
              <a
                href="https://twitter.com/nixos_org"
                aria-label="Connect with us on Twitter"
              >
                <img className="h-7 w-7" src="/assets/contact-twitter.svg" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC3vIimi9q4AT8EgxYp_dWIw"
                aria-label="Connect with us on Youtube"
              >
                <img className="h-7 w-7" src="/assets/contact-youtube.svg" />
              </a>
              <a
                href="https://github.com/NixOS"
                aria-label="Connect with us on Github"
              >
                <img className="h-7 w-7" src="/assets/contact-github.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
