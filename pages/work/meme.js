import styled from "styled-components";
import { useEffect } from "react";
import gsap from "gsap";
import { Main, Project } from "../../components/globalStyles";
import ProjectHead from "../../components/projectHead";

export default function Meme() {
  useEffect(() => {
    gsap.from(".intro", {
      duration: 0.5,
      y: 20,
      autoAlpha: 0,
      delay: 0.8,
      ease: "back.out(2)",
      force3D: true,
    });
  }, []);
  return (
    <Main>
      <iframe
        className="intro"
        src="https://player.vimeo.com/video/213960048"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "90%",
          height: "90%",
          left: "5%",
        }}
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </Main>
  );
}
