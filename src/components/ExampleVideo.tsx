import { useRef, type ReactElement, useEffect } from "react";
import * as Asciinema from "asciinema-player";
import "asciinema-player/dist/bundle/asciinema-player.css";
import "../styles/apStyles.css";

export interface ExampleVideoProps {
  path: string;
  startTime: string;
  caption: string;
}

export default function ExampleVideo(props: ExampleVideoProps): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Asciinema.create(props.path, containerRef.current, {
      preload: true,
      loop: true,
      poster: `npt:${props.startTime}`,
    });
  }, []);

  return (
    <article className="flex flex-col items-start gap-2 overflow-hidden">
      <h3 className="text-nixdarkblue text-xl font-heading font-bold">
        {props.caption}
      </h3>
      <div
        ref={containerRef}
        className="w-full min-h-[300px] max-h-[345px] overflow-hidden relative"
      ></div>
    </article>
  );
}
