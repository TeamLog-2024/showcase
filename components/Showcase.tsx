import { useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";

const Showcase = () => {
  const [index, setIndex] = useState(0);
  const [popup, setPopup] = useState(false);

  const contents = ["LOGCON", "SolarSystem", "GetTheTeamLog", "WireTypo", "WLC-GUI", 
                    "BeamDBG", "Kkutu_Dictionary", "2048", "TodoList", "Tinyhttppd"];
  const notions = [
    "logcon-ecbcbb16541747148f52d1d99e7487db?pvs=4", //로그콘
    "solarsystem-3965cd98dbb5446db65ef41b48ca74ed?pvs=4", //태양계
    "clickgame-573369eff0b94399a488343a0306a70a?pvs=4", //클릭게임
    "typo-ca56c6e8a6f949ddbe930cb685b359e0?pvs=4", //typo
    "wlcgui-7447a8cfe9f24adbba955c1dda6d0dde?pvs=4", //wlc
    "beam-607d204440e9478db13f7314a3d27c91?pvs=4", //beamdbg
    "kkutu-0d1e65a52854494dbd3221fd4c580157?pvs=4", //kkutu
    "2048-40407056315843dfa39d50abc93d023e?pvs=4", //2048
    "todo-feb102df37c84b23b2434233100c664b?pvs=4", //todo
    "httppd-14bae3ebb7fc42808b0c3dc3eb954076?pvs=4" //tiny
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
