import { type ReactElement } from "react";
import FeatureArticle from "./FeatureArticle";

export default function Features(): ReactElement {
  return (
    <section className="bg-featureBackdrop bg-[39%_100%] md:bg-bottom bg-no-repeat pb-48 pt-16">
      <div className="md:mx-auto px-4 sm:max-w-[736px] md:max-w-[960px] lg:max-w-[1168px] grid md:grid-cols-3 gap-8 md:gap-4">
        <FeatureArticle
          logo="/assets/feature-logo-1.svg"
          caption="Reproducible"
        >
          <p>
            Nix builds packages in isolation from each other. This ensures that
            they are reproducible and don’t have undeclared dependencies, so{" "}
            <b>
              if a package works on one machine, it will also work on another.
            </b>
          </p>
        </FeatureArticle>
        <FeatureArticle logo="/assets/feature-logo-2.svg" caption="Declarative">
          <p>
            Nix makes it{" "}
            <b>trivial to share development and build environments</b> for your
            projects, regardless of what programming languages and tools you’re
            using.
          </p>
        </FeatureArticle>
        <FeatureArticle logo="/assets/feature-logo-3.svg" caption="Reliable">
          <p>
            Nix ensures that installing or upgrading one package{" "}
            <b>cannot break other packages.</b> It allows you to{" "}
            <b>roll back to previous versions</b>, and ensures that no package
            is in an inconsistent state during an upgrade.
          </p>
        </FeatureArticle>
      </div>
    </section>
  );
}
