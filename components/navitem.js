import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

const Main = styled.a`
  display: inline-block;
  position: relative;
  margin-right: 20px;
  &:hover {
    div {
      background-color: white;
    }
    span {
      color: white;
    }
  }
  div {
    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
    //transition: 0.2s ease;
  }
`;

const Txt = styled.span`
  font-size: 18px;
  font-family: "uniwars", sans-serif;
  color: ${(props) => (props.active ? "#85d1ff" : "#aaa")};
  transition: 0.2s ease;
  cursor: pointer;
`;

const Underline = styled.div`
  width: 100%;
  float: left;
  height: 1px;
  background-color: ${(props) => (props.active ? "#85d1ff" : "#aaa")};
  position: absolute;
  bottom: 0;
  //opacity:0;
`;

const NavItem = ({ Text, L, A }) => {
  var hov = useRef();

  const [active, setActive] = useState(A);

  useEffect(() => {
    if (A) {
      gsap.set(hov, {
        duration: 0.2,
        ease: "power1",
        clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)",
      });
    } else if (active) {
      gsap.fromTo(
        hov,
        {
          duration: 0,
          clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%) !important",
        },
        {
          duration: 0.2,
          ease: "power1",
          clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)",
        }
      );
    } else {
      gsap.to(hov, {
        duration: 0.2,
        ease: "power1",
        clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)",
      });
    }
  }, [active]);

  function enter() {
    setActive(true);
  }
  function leave() {
    setActive(false);
  }
  return (
    <Link href={L}>
      <Main onMouseEnter={() => enter()} onMouseLeave={() => leave()}>
        <Txt active={A}>{Text}</Txt>
        <Underline
          active={A}
          ref={(el) => (hov = el)}
          className="underline"
        ></Underline>
      </Main>
    </Link>
  );
};

export default NavItem;
