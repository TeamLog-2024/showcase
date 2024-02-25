import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import styled from "styled-components";
import { Code } from "react-notion-x/build/third-party/code";
import { Pdf } from "react-notion-x/build/third-party/pdf";

const Popup = (props: { handle: () => void; id: string }) => {
  const [record, setRecord] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/notion/${props.id}`);
      const data = await response.json();
      setRecord(data);
    })();
  }, [props.id]);

  return (
    <>
      <Background onClick={() => props.handle()}></Background>
      <Wrapper className="popup">
        <Inner>
          {record ? <NotionRenderer recordMap={record} components={{Code}}/> : null}
          <Close onClick={() => props.handle()} src="/images/close.svg" />
        </Inner>
      </Wrapper>
    </>
  );
};

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 80%;
  height: 80vh;
  z-index: 101;
`;

const Close = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  cursor: pointer;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  position: relative;
  z-index: 1000;
`;

export default Popup;
