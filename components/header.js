import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Navitem from "./navitem";
import { gsap } from "gsap";
import { useEffect } from "react";
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
  background-color: rgba(20, 20, 20);
  //backdrop-filter: blur(1rem);
  box-shadow: 0 2px 80px #52b1ff50, 0 2px 50px #b885f919;
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
  margin-left: 35px;
  margin-top: 0px;
  height: 65px;
  width: 1px;
  background-color: rgb(80, 80, 80);
`;

const Stem = styled.div`
  width: 2px;
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

const MenuItem = styled.div`
  margin-right: 15px;
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  transition: 0.2s ease;
  color: rgb(130, 130, 130);
  &:hover {
    color: #85d1ff;
    transition: 0.2s ease;
    cursor: pointer;
  }
`;

const Header = () => {
  let fly = null;
  let stem = null;
  let name = null;

  useEffect(() => {
    console.log(fly);
    gsap.set(fly, { scaleX: 1 });
    gsap.set(stem, { autoAlpha: 0 });
    const tl = new gsap.timeline();
    tl.to(fly, { scaleX: 0, delay: 1.3, duration: 0.08 });
    tl.to(stem, { autoAlpha: 1, duration: 0 }, "-=0.08");
    tl.to(fly, { scaleX: 1, duration: 0.08 });
    tl.to(stem, { autoAlpha: 0, duration: 0 }, "-=0.08");
    tl.to(fly, { scaleX: 0, duration: 0.08 });
    tl.to(stem, { autoAlpha: 1, duration: 0 }, "-=0.08");
    tl.to(fly, { scaleX: 1, duration: 0.08 });
    tl.to(stem, { autoAlpha: 0, duration: 0 }, "-=0.08");
  }, []);

  return (
    <HeaderMain>
      <Link href="/">
        <LogoContainer>
          <div>
            <LogoDiv>
              <div ref={(el) => (fly = el)}>
                {" "}
                <Image width={30} height={30} src="/images/new_logo.svg" />
              </div>
              <Stem ref={(el) => (stem = el)}></Stem>
            </LogoDiv>
            <span> CALVARY FISHER</span>
          </div>
        </LogoContainer>
      </Link>
      <Divider></Divider>
      <HeaderMenu>
        <Link href="/">
          <Navitem Text="Work" Link="/"></Navitem>
        </Link>
        <Link href="/">
          <Navitem Text="Feed" Link="/"></Navitem>
        </Link>
        <Link href="/">
          <Navitem Text="Info" Link="/"></Navitem>
        </Link>
      </HeaderMenu>
    </HeaderMain>
  );
};

export default Header;
