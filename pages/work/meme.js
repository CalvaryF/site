import styled from "styled-components";
import { useEffect } from "react";
import gsap from "gsap";
import { Main, Video } from "../../components/globalStyles";
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
      <ProjectHead
        title="Sublime Meme"
        logo="/images/logos/meme.png"
        date="2018"
        category="Experimental Animation"
        copy="lorem ipsum etc this is a test of the copy, going to put something cool in here maybe we'll have to see, we surely will, theres almost nothing more blah blah blah click below to view"
      ></ProjectHead>
      <Video>
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
      </Video>
    </Main>
  );
}
