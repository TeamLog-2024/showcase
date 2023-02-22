import { RefObject, useRef, useState } from "react";
import styled from "styled-components";

const Showcase = () => {
  const [size] = useState(20);
  const [angle, setAngle] = useState(0);
  const [index, setIndex] = useState(0);
  const cube = useRef<HTMLDivElement>(null);

  const contents = ["SupSup", "LOGCON", "Kktudic", "Art Work"]

  const handleRight = () => {
    cube.current?.style.setProperty('transition', '0.5s');
    setAngle(prevAngle => {
      const newAngle = prevAngle + 90;
      return newAngle === 360 ? 0 : newAngle;
    });
    setTimeout(() => {
      cube.current?.style.removeProperty('transition');
      setIndex(prevIndex => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 500);
  };


  const handleLeft = () => {
    setAngle(prevAngle => {
      const newAngle = prevAngle - 90;
      return newAngle < 0 ? 270 : newAngle;
    });
    setIndex(prevIndex => (prevIndex === 0 ? 3 : prevIndex - 1));
  };


  return (
    <>
      <FullPageWrapper className="section">
        <Wrapper>
          <LeftButtonWrapper onClick={() => {
            handleLeft();
          }}>
            <Button src="/images/left.svg" />
          </LeftButtonWrapper>
          <RightButtonWrapper onClick={() => {
            handleRight();
          }}>
            <Button src="/images/right.svg" />
          </RightButtonWrapper>
          <CubeWrapper>
            <Cube
              ref={cube as RefObject<HTMLDivElement>}
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
          </CubeWrapper>
          <Description>{contents[index]}</Description>
        </Wrapper>
      </FullPageWrapper>
    </>
  );
};

const ButtonWrapper = styled.div`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;

  z-index: 1;
  width: 3vmax;
  height: 3vmax;

  @media screen and (max-width: 1024px) {
    width: 4vmax;
    height: 4vmax;
  }

  @media screen and (max-width: 768px) {
    width: 5vmax;
    height: 5vmax;
  }
`;

const LeftButtonWrapper = styled(ButtonWrapper)`
  left: 5%;
`;

const RightButtonWrapper = styled(ButtonWrapper)`
  right: 5%;
`;

const Button = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const direction = ({
  tx = "0px",
  ty = "0px",
  tz = "0px",
  rx = "0deg",
  ry = "0deg",
}: dircetion) => `
    transform: translateX(${tx}) translateY(${ty}) translateZ(${tz}) rotateX(${rx}) rotateY(${ry});
`;

const FullPageWrapper = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  position: relative;
  gap: 3vmax;

  @media screen and (max-width: 1024px) {
    gap: 2.5vmax;
  }
`;

const Description = styled.p`
  font-size: 2vmax;
  font-weight: 700;
  color: #fff;

  @media screen and (max-width: 1024px) {
    font-size: 2.5vmax;
  }

  @media screen and (max-width: 768px) {
    font-size: 3vmax;
  }
`;

const CubeWrapper = styled.div`
  position: relative;
  perspective: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Cube = styled.div`
  transform-style: preserve-3d;
  width: ${(props) => props.theme.size}vmax;
  height: ${(props) => props.theme.size}vmax;
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
