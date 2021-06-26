import styled from "styled-components";
import ProjectHead from "../../components/projectHead";
import { useEffect } from "react";
import AllImage from "../../components/projectCardTypes/allImage";
import gsap from "gsap";
import { Main, Project } from "../../components/globalStyles";

export default function Story() {
  useEffect(() => {
    gsap.from(".card", {
      duration: 0.5,
      y: 20,
      autoAlpha: 0,
      delay: 1.2,
      stagger: 0.1,
      ease: "back.out(2)",
      force3D: true,
    });
    gsap.from(".main", {
      backgroundColor: "rgb(20, 20, 20)",
      duration: 0.5,
      delay: 0.4,
    });
  }, []);
  return (
    <Main className="main">
      {" "}
      <ProjectHead
        title="Story on a Page"
        logo="/images/logos/fndr.svg"
        date="2020"
        category="logo design"
        demo="/work/storyDemo"
        copy="lorem ipsum etc this is a test of the copy, going to put something cool in here maybe we'll have to see, we surely will, theres almost nothing more..."
      ></ProjectHead>
      <Project>
        <AllImage
          title="Process Process"
          image="/images/placeholder"
        ></AllImage>
        <AllImage
          title="Process Process"
          image="/images/placeholder"
        ></AllImage>
      </Project>
    </Main>
  );
}
