import styled from "styled-components";

type spacings =
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "baseline";

interface flexInterface {
  gap?: string;
  width?: string;
  height?: string;
  flex?: number;
  direction?: "row" | "column";
  align?: spacings;
  justify?: spacings;
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
}

export const Flex = styled.div<flexInterface>`
  display: flex;
  gap: ${(props) => props.gap || "inherit"};
  width: ${(props) => props.width};
  height: ${(props) => props.height || "inherit"};
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex: ${(props) => props.flex || "auto"};
`;
