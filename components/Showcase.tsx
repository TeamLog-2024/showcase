import { RefObject, useRef, useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";

const Showcase = () => {
  const [size] = useState(20);
  const [angle, setAngle] = useState(0);
  const [index, setIndex] = useState(0);
  const [popup, setPopup] = useState(false);
  const cube = useRef<HTMLDivElement>(null);

  const contents = ["SupSup", "LOGCON", "Kktudic", "Art Work"];
  const notions = [
    "aaac89ed1271437b8cd376db31a38b60",
    "cef62efe15d4438da87b55f6b9a6e0c3",
    "8a5ad631597c48cfa9a2963bf692cb68",
    "836ac0c03c3848ffb012990cf40180ba",
  ];

  const handlePopup = () => {
    setPopup(!popup);
  };

  const handleRight = () => {
    setAngle(angle + 90);
    cube.current?.style.setProperty("transition", "0.5s");
    setIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

  const handleLeft = () => {
    setAngle(angle - 90);
    setIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  return (
    <>
      <FullPageWrapper className="section">
        <Wrapper>
          <LeftButtonWrapper
            onClick={() => {
              handleLeft();
            }}
          >
            <Button src="/images/left.svg" />
          </LeftButtonWrapper>
          <RightButtonWrapper
            onClick={() => {
              handleRight();
            }}
          >
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
              <Front
                onClick={() => handlePopup()}
                theme={{ direction, size, angle }}
              />
              <Right
                onClick={() => handlePopup()}
                theme={{ direction, size, angle }}
              />
              <Back
                onClick={() => handlePopup()}
                theme={{ direction, size, angle }}
              />
              <Left
                onClick={() => handlePopup()}
                theme={{ direction, size, angle }}
              />
            </Cube>
          </CubeWrapper>
          <Description>{contents[index]}</Description>
          {popup ? <Popup handle={handlePopup} id={notions[index]} /> : null}
        </Wrapper>
        <BottomWrapper>
          <CopyRight>&copy; Teamlog 2023</CopyRight>
          <LinkWrppaer>
            <Link href="https://teamlog.kr" target={"_blank"}>
              Website
            </Link>
            <Link href="https://facebook.com/sunrintog" target={"_blank"}>
              Facebook
            </Link>
            <Link href="https://instagram.com/sunrin_teamlog" target={"_blank"}>
              Instagram
            </Link>
          </LinkWrppaer>
        </BottomWrapper>
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
  gap: 4.5vmax;

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
  cursor: pointer;
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

const BottomWrapper = styled.div`
  position: absolute;
  bottom: 2%;
  transform: translateX(-50%);
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const CopyRight = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #919191;
`;

const LinkWrppaer = styled.div`
  display: flex;
  gap: 10px;
`;

const Link = styled.a`
  color: #6e7b9e;
  display: flex;
  gap: 10px;
  list-style-type: none;
  text-decoration: none;

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background-color: #a8a8a8;
  }

  :nth-child(3) {
    &::after {
      display: none !important;
    }
  }
`;

export default Showcase;
