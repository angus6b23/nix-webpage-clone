import { type ReactElement } from "react";

export interface FeatureArticleProps {
  caption: string;
  logo: string;
  children?: ReactElement | string;
}

export default function FeatureArticle(
  props: FeatureArticleProps,
): ReactElement {
  return (
    <article className="text-center flex flex-col">
      <img
        src={props.logo}
        alt={`Nix logo for ${props.caption}`}
        className="h-32 w-auto mx-auto mb-6"
      />
      <h2 className="text-3xl text-nixdarkblue font-bold leading-none mb-2 font-heading">
        {props.caption}
      </h2>
      <div className="leading-loose font-extralight">{props.children}</div>
    </article>
  );
}
