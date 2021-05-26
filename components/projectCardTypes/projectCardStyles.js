import styled from "styled-components";
import React from "react";

const CardMain = styled.div`
  width: 1250px;
  margin-bottom: 100px;
  background-color: white;
  padding-bottom: 80px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    div {
      div {
        background-color: #85d1ff;
      }
    }
  }
`;

const CardHead = styled.div`
  background-color: rgb(14, 14, 14);
  //background-color: rgb(230, 230, 230);
  width: 100%;
  height: 48px;

  border-bottom: 1px solid rgb(228, 228, 228);
  span {
    color: rgb(255, 255, 255);
    // color: black;
    display: inline-block;
    font-family: aktiv-grotesk-extended, sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 20px;
    padding-top: 11px;
    padding-left: 20px;
    text-transform: uppercase;
  }
  div {
    background-color: #888;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    margin: 14px;
    float: right;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;

const CardCaption = styled.div`
  font-family: aktiv-grotesk-extended, sans-serif;
  font-style: italic;
  padding-top: 20px;
  margin-left: 60px;
  color: rgb(123, 123, 123);
`;

export { CardMain, CardHead, CardCaption };
