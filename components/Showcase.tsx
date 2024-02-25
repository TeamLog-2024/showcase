import { useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";

const Showcase = () => {
  const [index, setIndex] = useState(0);
  const [popup, setPopup] = useState(false);

  const contents = ["LOGCON", "SolarSystem", "GetTheTeamLog", "WireTypo", "WLC-GUI", 
                    "BeamDBG", "Kkutu_Dictionary", "2048", "TodoList", "Tinyhttppd"];
  const notions = [
    "2024-LOGCON-43a57175b92a42bea4761eb2630937de?pvs=4", //로그콘
    "85743dd0e25c4547bc262aa9d9d1c5c2?pvs=4", //태양계
    "Get-the-TeamLog-00bc24cc2d1b4ea9997ab00b4b3c462f?pvs=4", //클릭게임
    "typo-8217b8dca7db4b9a9fe0e075cf378f1f?pvs=4", //typo
    "WLC-GUI-1217dfea474f4101b3f67c78e77438fd?pvs=4", //wlc
    "beamdbg-41fd4a1aad1a48c4a7b8a0260d47e1ce?pvs=4", //beamdbg
    "Kkutu_Dictionary-c292c4ddca04432abd12dde0084b035b?pvs=4", //kkutu
    "/2048-b362353676134ac5af76b84873c4e6b0?pvs=4", //2048
    "cfb7f12e7cd44812bd05deb8d643292b?pvs=4", //todo
    "Tinyhttppd-176706a191d64bb2b578f0428c7c21b0?pvs=4" //tiny
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

  @media screen and (max-width: 500px) {
    & > img {
      width: 150px;
      height: 150px;
    }
    & > p {
      font-weight: 500;
    }
  }
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
