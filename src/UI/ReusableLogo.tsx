import styled from "styled-components";
import logo from "/assets/logo.svg";

interface ReusableLogo {
  width: number;
  height: number;
}

export default function ReusableLogo({ width, height }: ReusableLogo) {
  return <StyledImg src={logo} alt="logo" width={width} height={height} />;
}

const StyledImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
