import { useEffect, useState } from "react";
import styled from "styled-components";

const Showcase = () => {
  const [size] = useState(20);
  const [angle, setAngle] = useState(0);

  const handleRight = () => {
    console.log(angle);
    if (angle == 360) {
      setAngle(0);
    }
    console.log(angle);
    setAngle(angle + 90);
  };

  const handleLeft = () => {
    if (angle === 0) {
      setAngle(360);
    }
    setAngle(angle - 90);
  };

  return (
    <>
      <FullPageWrapper className="section">
        <button
          onClick={() => {
            handleLeft();
          }}
        >
          left
        </button>
        <button
          onClick={() => {
            handleRight();
          }}
        >
          right
        </button>
        <Wrapper>
          <Cube
            theme={{ direction, size, angle }}
            style={{
              transform: `rotateY(${angle}deg)`,
            }}
          >
            <Front theme={{ direction, size, angle }} />
            <Right theme={{ direction, size, angle }} />
            <Back theme={{ direction, size, angle }} />
            <Left theme={{ direction, size, angle }} />
          </Cube>
        </Wrapper>
      </FullPageWrapper>
    </>
  );
};

const direction = ({
  tx = "0px",
  ty = "0px",
  tz = "0px",
  rx = "0deg",
  ry = "0deg",
}: dircetion) => `
    transform: translateX(${tx}) translateY(${ty}) translateZ(${tz}) rotateX(${rx}) rotateY(${ry});
`;

const FullPageWrapper = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  position: relative;
  perspective: 1000px;
`;

const Cube = styled.div`
  transform-style: preserve-3d;
  position: absolute;
  width: ${(props) => props.theme.size}vmax;
  height: ${(props) => props.theme.size}vmax;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transition: transform 0.5s;
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #2d2d2d;
`;

interface dircetion {
  tx?: string;
  ty?: string;
  tz?: string;
  rx?: string;
  ry?: string;
}

const Front = styled(Item)`
  ${(props) =>
    props.theme.direction({
      tz: `${props.theme.size / 2}vmax`,
    })}

  background: #964c4c;
`;

const Right = styled(Item)`
  ${(props) =>
    props.theme.direction({
      tx: `${props.theme.size / 2}vmax`,
      ry: "90deg",
    })}
`;

const Back = styled(Item)`
  ${(props) =>
    props.theme.direction({
      tz: `-${props.theme.size / 2}vmax`,
    })}
`;

const Left = styled(Item)`
  ${(props) =>
    props.theme.direction({
      tx: `-${props.theme.size / 2}vmax`,
      ry: "90deg",
    })}
`;

export default Showcase;
