import { type ReactElement } from "react";
import ExampleVideo from "./ExampleVideo";

export interface ExamplesProps {}

export default function Examples(): ReactElement {
  return (
    <section className="mt-48 md:mx-auto px-4 sm:max-w-[736px] md:max-w-[960px] lg:max-w-[1168px] bg-transparent">
      {/* Header */}
      <h2 className="text-4xl text-center w-full text-nixdarkblue font-heading font-bold pb-2">
        Examples
      </h2>
      {/* All Asciinema examples */}
      <div className="grid md:grid-cols-2 items-center gap-4 pb-8">
        <ExampleVideo
          path="/casts/example_1.cast"
          startTime="0:28"
          caption="Try new tools without fear"
        ></ExampleVideo>
        <ExampleVideo
          path="/casts/example_2.cast"
          startTime="0:34"
          caption="Multiple languages, one tool"
        ></ExampleVideo>
        <ExampleVideo
          path="/casts/example_3.cast"
          startTime="0:20"
          caption="Declarative dev-environments"
        ></ExampleVideo>
        <ExampleVideo
          path="/casts/example_4.cast"
          startTime="0:43"
          caption="Minimal docker images"
        ></ExampleVideo>
        <ExampleVideo
          path="/casts/example_5.cast"
          startTime="0:31"
          caption="Declarative cloud images"
        ></ExampleVideo>
        <ExampleVideo
          path="/casts/example_6.cast"
          startTime="0:24"
          caption="Test your configurations"
        ></ExampleVideo>
      </div>
    </section>
  );
}
