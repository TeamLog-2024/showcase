import { useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";

const Showcase = () => {
  const [index, setIndex] = useState(0);
  const [popup, setPopup] = useState(false);

  const contents = ["LOGCON", "SolarSystem", "GetTheTeamLog", "WireTypo", "WLC-GUI", 
                    "BeamDBG", "Kkutu_Dictionary", "2048", "TodoList"];
  const notions = [
    "38a3729245ca4834a3c5ce2303d8f690?pvs=4", //로그콘
    "329ed17c837546dc81dd0d5696a98607?pvs=4", //태양계
    "b32ac7fe58454e7cb49f8369f87f3715?pvs=4", //클릭게임
    "typo-e21c192e2861434898cf99917d4f219f?pvs=4", //typo
    "WLC-GUI-fcb859aa64334096b825cb6c32516343?pvs=4", //wlc
    "beamdbg-4646da54de2146529569d199a5f4a9c3?pvs=4", //beamdbg
    "Kkutu_Dictionary-fa4e3889b4fe4cf69012c0ad334bb7c0?pvs=4", //kkutu
    "2048-50ddba3ef6244ddfafa0550f00e6f8b3?pvs=4", //2048
    "f130b4427f2644bc9dad9dabb3e71405?pvs=4" //todo
  ];

  const handlePopup = () => {
    setPopup(!popup);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === contents.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? contents.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <FullPageWrapper className="section">
        <Wrapper>
          <LeftButtonWrapper onClick={handlePrevious}>
            <Button src="/images/left.svg" />
          </LeftButtonWrapper>
          <RightButtonWrapper onClick={handleNext}>
            <Button src="/images/right.svg" />
          </RightButtonWrapper>
          <ContentWrapper>
            <Content onClick={handlePopup} title={contents[index]}>
              <Thumbnail src={`/images/${contents[index].toLowerCase()}.png`} />
              <Description>{contents[index]}</Description>
            </Content>
          </ContentWrapper>
          {popup ? <Popup handle={handlePopup} id={notions[index]} /> : null}
        </Wrapper>
        <BottomWrapper>
          <CopyRight>&copy; Teamlog 2024</CopyRight>
          <LinkWrapper>
            <Link href="https://teamlog.kr" target="_blank">
              Website
            </Link>
            <Link href="https://facebook.com/sunrintog" target="_blank">
              Facebook
            </Link>
            <Link href="https://instagram.com/sunrin_teamlog" target="_blank">
              Instagram
            </Link>
          </LinkWrapper>
        </BottomWrapper>
      </FullPageWrapper>
    </>
  );
};

const FullPageWrapper = styled.div`
  position: relative;
  background-color: #f9f9f9;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const LeftButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 1;
`;

const RightButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  z-index: 1;
`;

const Button = styled.img`
  width: 3vmax;
  height: 3vmax;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  &:hover {
    opacity: 0.8;
    transform: scale(0.95);
    transition: all 0.3s ease-in-out;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  ${props => props.title === "WireTypo" && `
    & > img {
      width: 500px;
    }
  `}
`;

const Thumbnail = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const Description = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  margin-top: 10%;
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

const LinkWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Link = styled.a`
  color: #6e7b9e;
  text-decoration: none;
`;

export default Showcase;
