import styled from "styled-components";
import { Main, Project } from "../../components/globalStyles";
import ProjectHead from "../../components/projectHead";
import { useEffect } from "react";
import AllImage from "../../components/projectCardTypes/allImage";
import gsap from "gsap";

export default function EPFast() {
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
        title="EP Fast"
        logo="/images/logos/anl.svg"
        date="2019"
        category="data dashboard"
        demo="http://grid-demo.rs21.io/tool/EPFast/demo/1"
        copy="lorem ipsum etc this is a test of the copy, going to put something cool in here maybe we'll have to see, we surely will, theres almost nothing more..."
      ></ProjectHead>
      <Project>
        <AllImage
          title="Interviewing Stakeholders"
          image="/images/placeholder"
        ></AllImage>
        <AllImage
          title="Solving the dataviz"
          image="/images/placeholder"
        ></AllImage>
      </Project>
    </Main>
  );
}
