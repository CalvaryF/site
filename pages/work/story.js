import styled from "styled-components";
import ProjectHead from "../../components/projectHead";
import AllImage from "../../components/projectCardTypes/allImage";
import { Main, Project } from "../../components/globalStyles";

export default function Story() {
  return (
    <Main>
      {" "}
      <ProjectHead
        title="Story on a Page"
        logo="/images/logos/fndr.svg"
        date="2020"
        category="logo design"
        demo="/work/storydemo"
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
