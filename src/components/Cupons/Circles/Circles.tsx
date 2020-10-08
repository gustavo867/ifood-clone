import React from "react";
import { Circle, Container } from "./styles";

interface Props {
  index: number;
}

const Circles: React.FC<Props> = ({ index }) => {
  return (
    <Container>
      <Circle
        style={{
          backgroundColor: index === 0 ? "#FFFFFF" : "rgba(255, 255, 255, 0.3)",
        }}
      />
      <Circle
        style={{
          backgroundColor: index === 1 ? "#FFFFFF" : "rgba(255, 255, 255, 0.3)",
        }}
      />
      <Circle
        style={{
          backgroundColor: index === 2 ? "#FFFFFF" : "rgba(255, 255, 255, 0.3)",
        }}
      />
      <Circle
        style={{
          backgroundColor: index === 3 ? "#FFFFFF" : "rgba(255, 255, 255, 0.3)",
        }}
      />
    </Container>
  );
};

export default Circles;
