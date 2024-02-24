import styled, { keyframes } from "styled-components";

const Main = () => {
  return (
    <>
      <Wrapper className="section">
        <Title>
          TEAM <StrongTitle>LOG</StrongTitle>
        </Title>
        <SubTitle>
          Feel the <SubTitleStrong>Change</SubTitleStrong>, Make the{" "}
          <SubTitleStrong>Change</SubTitleStrong>
        </SubTitle>
        <ScrollImage src="/images/down.svg" />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  position: relative;

  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/images/background.png");
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 500px){
    background-image: url();
  }
`;

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  font-family: "Expansiva Regular";
  font-weight: 400;
  font-size: 3.5vmax;
  color: #fff;
  text-align: center;
  animation: ${animation} 1s ease-in-out;

  @media screen and (max-width: 1440px) {
    font-size: 5vmax;
  }

  @media screen and (max-width: 768px) {
    font-size: 6vmax;
  }
`;

const StrongTitle = styled.span`
  font-family: "Expansiva Bold";
`;

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.2vmax;
  color: #ffffff96;
  animation: ${animation} 1s ease-in-out;

  @media screen and (max-width: 1440px) {
    font-size: 1.5vmax;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.3vmax;
  }
`;

const SubTitleStrong = styled.span`
  font-weight: 700;
  color: #ffffffcf;
`;

const infinite = keyframes`
  0% {
    transform: translate(-50%, 50%);
  }
  50% {
    transform: translate(-50%, calc(50% + 15px));
  }
  100% {
    transform: translate(-50%, 50%);
  }
`;

const ScrollImage = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  bottom: 7%;
  left: 50%;
  animation: ${infinite} 1.5s ease-in-out infinite;
`;

export default Main;
