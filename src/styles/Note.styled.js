import styled from "styled-components";
import Card from "@mui/material/Card";

export const Note = styled(Card)`
  position: relative;
  background-color: ${({ bgColor }) => bgColor};
  transition: all 0.3s ease;
  border-radius: 10%;
  cursor: pointer;
  padding: 30px;
  padding-bottom: 5px;
  box-shadow: ${({ focus }) =>
      focus ? "0 0.5rem 1rem " : "0 0 0.3rem 0.09rem "}
    #00000044;
  transform: scale(${({ focus, del }) => (del ? 0.001 : focus ? 1.05 : 1)});
  animation: zoom 0.3s ease;
  @keyframes zoom {
    0% {
      transform: scale(0.1);
    }
    ,
    100% {
      transform: scale(1);
    }
  }

  & > textarea {
    scroll-margin-top: 30px;
    color: ${({ fg }) => fg};
    height: ${window.innerWidth * 0.2}px;
    width: 97%;
    transition: all 0.3s ease;
    cursor: ${({ focus }) => (focus ? "auto" : "pointer")};
    resize: none;
    margin: 0;
    outline: none;
    padding: 5px;
    border: none;
    font-size: 1.2rem;
    background-color: ${({ bgColor }) => bgColor};
  }
  .created {
    width: 100%;
    color: ${({ fg }) => fg || "#000000"}ee;
    display: flex;
    color: ;
    flex-direction: row;
    transition: all 0.3s ease;
    border-top: 1px solid ${({ fg }) => fg || "#000000"}7f;
    padding: 5px 0px;
  }
`;
