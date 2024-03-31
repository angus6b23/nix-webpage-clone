import { useState, type ReactElement } from "react";

export default function Notice(): ReactElement {
  const [dismiss, setDismiss] = useState(false);
  if (!dismiss) {
    return (
      <article className="fixed flex flex-wrap bottom-24 right-12 bg-red-200 p-4 w-96 gap-2 z-[10000]">
        <h1>
          This site is intended for learning and practising only and do NOT have
          any association with the Nix project
        </h1>
        <h2>
          Please visit{" "}
          <a className="underline" href="https://nixos.org/" target="_blank">
            https://nixos.org/
          </a>{" "}
          for the original site
        </h2>
        <a
          className="bg-red-900 py-4 px-4 text-white hover:bg-red-700"
          href="#"
          onClick={() => setDismiss(true)}
        >
          Understand and Dismiss
        </a>
      </article>
    );
  } else {
    return <></>;
  }
}
