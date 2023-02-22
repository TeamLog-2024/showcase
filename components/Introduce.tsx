import styled from "styled-components";

const Introduce = () => {
  return (
    <>
      <FullPageWrapper className="section">
        <Wrapper>
          <TitleWrapper>
            <Title>
              What is <TitleStrong>TEAMLOG</TitleStrong>?
            </Title>
            <SubTitle>팀로그란 2013년에 창설되어,</SubTitle>
          </TitleWrapper>
          <ItemWrapper>
            <Item>
              <ItemImg src="/images/network.svg" />
              네트워크
            </Item>
            <Item>
              <ItemImg src="/images/server.svg" />
              서버
            </Item>
            <Item>
              <ItemImg src="/images/web.svg" />웹
            </Item>
          </ItemWrapper>
          <SubTitle>2023년 3월, 다음 주인공을 맞이합니다.</SubTitle>
        </Wrapper>
      </FullPageWrapper>
    </>
  );
};

const FullPageWrapper = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  position: relative;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.h1`
  font-size: 2vmax;
  font-weight: 400;
  color: #c0c0c0;

  @media screen and (max-width: 1440px) {
    font-size: 2.5vmax;
  }

  @media screen and (max-width: 1024px) {
    font-size: 3vmax;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.5vmax;
  }
`;

const TitleStrong = styled.span`
  font-weight: 700;
  color: #f0f0f0;
`;

const SubTitle = styled.h2`
  font-size: 0.9vmax;
  font-weight: 400;
  color: #c0c0c0;

  @media screen and (max-width: 1440px) {
    font-size: 1vmax;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.1vmax;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2vmax;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Item = styled.div`
  background-color: #2d2d2d;
  width: 200px;
  height: 200px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  font-size: 1vmax;
  font-weight: 700;
  color: #bcbcbc;

  @media screen and (max-width: 1440px) {
    width: 180px;
    height: 180px;
  }

  @media screen and (max-width: 1024px) {
    width: 160px;
    height: 160px;
  }

  @media screen and (max-width: 768px) {
    width: 140px;
    height: 140px;
  }

  @media screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const ItemImg = styled.img`
  width: 35%;
  height: 35%;
`;

export default Introduce;
