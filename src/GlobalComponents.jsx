import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  gap: ${(props) => props.gap || "inherit"};
  width: ${(props) => props.width};
  height: ${(props) => props.height || "inherit"};
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  flex-wrap: ${(props) => props.wrap || "wrap"};
`;
