import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Navitem from "./navitem";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { useRef, useMemo } from "react";

const HeaderMain = styled.div`
  position: fixed;
  width: 100%;
  font-family: uniwars, sans-serif;
  font-weight: 200;
  color: #85d1ff;
  font-style: normal;
  letter-spacing: 1px;
  font-size: 20px;
  z-index: 4;
  overflow: atuo;
  height: 65px;
  //background-color: rgba(20, 20, 20);
  background-color: ${(props) =>
    !props.color ? " rgba(20, 20, 20)" : "rgb(80, 81, 85)"};
  // background-color: rgb(80, 81, 85);
  transition: 0.2s ease;
  border-bottom: ${(props) =>
    !props.color ? "1px solid #eee" : "1px solid #eeeeee00"};
  box-shadow: ${(props) =>
    !props.color ? "0 2px 80px #85b1ff90" : "0 2px 80px #00000020"};
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;

const LogoContainer = styled.div`
  height: 100%;
  transition: 0.1s;
  display: flex;
  display: inline-block;
  margin-top: 0;
  vertical-align: middle;
  margin-left: 30px;
  cursor: pointer;
  transition: 0.2s ease;

  div {
    display: flex;
    height: 100%;
    align-items: center;
    span {
      margin-top: 0px;
      padding-left: 15px;
      transition: 0.2s;
      font-size: 20px;
      opacity: 0;
    }
  }

  &:hover {
    filter: invert(50%) brightness(200%);
    transition: 0.2s ease;
  }
`;

const Divider = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 30px;
  margin-top: 0px;
  height: 65px;
  width: 1px;
  //background-color: #eee;
`;

const Stem = styled.div`
  width: 1px;
  height: 20px;
  max-height: 35px;
  position: absolute;
  background-color: #85d1ff;
`;

const LogoDiv = styled.div`
  display: flex;
  width: 30px;
  justify-content: center;
  position: relative;
`;

const HeaderMenu = styled.div`
  color: rgb(199, 199, 199);
  padding-top: 21px;
  font-size: 18px;
  float: right;
  overflow: hidden;
  margin-right: 15px;
`;

const Header = () => {
  let fly = null;
  let stem = null;
  let name = null;

  const [toggle, setToggle] = useState(false);
  const [tl2] = useState(new gsap.timeline({ paused: true }));
  const [color, setColor] = useState(false);

  const toggleTimeline = () => {
    setToggle(!toggle);
    console.log("toggle");
  };
  useEffect(() => {
    const tl = new gsap.timeline();
    gsap.set(fly, { scaleX: 1, y: 0 });
    gsap.set(stem, { autoAlpha: 0, y: 2 });
    gsap.set(name, { autoAlpha: 0, y: 2 });
    tl.to(fly, { scaleX: 0, y: -4, delay: 0.5, duration: 0.1 });
    tl.to(fly, { duration: 0.1 }, "-=0.1");
    tl.to(stem, { y: -4, duration: 0.1 }, "-=0.1");
    tl.to(stem, { autoAlpha: 1, ease: "steps(1)", duration: 0.1 }, "-=0.1");
    tl.to(fly, { scaleX: 1, duration: 0.1 });
    tl.to(stem, { autoAlpha: 0, ease: "steps(1)", duration: 0 }, "-=0.1");
    tl.to(name, { y: 0, duration: 0.1, autoAlpha: 1 }, "-=0.1");
    tl.to(fly, { scaleX: 0, duration: 0.1 });
    tl.to(stem, { autoAlpha: 1, ease: "steps(1)", duration: 0.1 }, "-=0.1");
    tl.to(fly, { scaleX: 1, duration: 0.1 });
    tl.to(stem, { autoAlpha: 0, ease: "steps(1)", duration: 0 }, "-=0.1");
    tl.to(fly, { y: 0, delay: 0.2, duration: 0.2 });
    tl.to(stem, { y: 0, delay: 0.1, duration: 0.2 }, "-=0.1");
  }, []);

  useEffect(() => {
    tl2.reversed(!toggle);
  }, [toggle]);

  const changeColor = () => {
    if (window.scrollY >= 45) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }

  return (
    <HeaderMain color={color}>
      <Link href="/">
        <LogoContainer onMouseEnter={toggleTimeline}>
          <div>
            <LogoDiv>
              <div ref={(el) => (fly = el)}>
                {" "}
                <Image width={30} height={30} src="/images/new_logo.svg" />
              </div>
              <Stem ref={(el) => (stem = el)}></Stem>
            </LogoDiv>
            <span ref={(el) => (name = el)}> CALVARY FISHER</span>
          </div>
        </LogoContainer>
      </Link>
      <Divider></Divider>
      <HeaderMenu>
        <Navitem Text="Work" L="/" A={true}></Navitem>
        <Navitem Text="Feed" L="/" A={false}></Navitem>
        <Navitem Text="Info" L="/" A={false}></Navitem>
      </HeaderMenu>
    </HeaderMain>
  );
};

export default Header;
