import styled from "styled-components";
import AllImage from "../../components/projectCardTypes/allImage";
import ProjectHead from "../../components/projectHead";
import { Main, Project } from "../../components/globalStyles";
import { useEffect } from "react";
import gsap from "gsap";

export default function Allonnia() {
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
      <ProjectHead
        title="Allonnia"
        logo="/images/logos/ginkgo.svg"
        date="2020"
        category="logo design"
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
