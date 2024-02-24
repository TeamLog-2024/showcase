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
          <SubTitle>2024년 3월, 다음 주인공을 맞이합니다.</SubTitle>
        </Wrapper>
      </FullPageWrapper>
    </>
  );
};

const FullPageWrapper = styled.div`
  background-color: #f9f9f9;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  position: relative;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 3.5vmax;
  font-weight: 500;
  color: #333;
`;

const TitleStrong = styled.span`
  font-weight: 700;
  color: #ff5722;
`;

const SubTitle = styled.h2`
  font-size: 1.2vmax;
  font-weight: 400;
  color: #555;
`;

const ItemWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Item = styled.div`
  background-color: #fff;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  font-size: 1.2vmax;
  font-weight: 600;
  color: #555;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    font-size: 1vmax;
  }
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 100px;
    font-size: 1.1vmax;
  }
`;

const ItemImg = styled.img`
  width: 60px;
  height: 60px;
  @media screen and (max-width:500px) {
    width: 40px;
    height: 40px;
  }
`;

export default Introduce;
