import styled from "styled-components";

const Main = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgb(120, 122, 125);
  background-image: radial-gradient(rgb(190, 190, 190) 1%, transparent 2%),
    radial-gradient(rgb(200, 200, 200) 1%, transparent 2%);
  background-size: 100px 100px;
  background-attachment: fixed;
  background-position: 0 0, 50px 50px;
  background-repeat: repeat;
`;

const Project = styled.div`
  // margin-top: 200px;
`;

export { Main, Project };
