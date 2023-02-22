import Introduce from "@/components/Introduce";
import Main from "@/components/Main";
import Showcase from "@/components/Showcase";
import ReactFullpage from "@fullpage/react-fullpage";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.querySelector(".fp-watermark")?.remove();
  });

  return (
    <>
      <ReactFullpage
        scrollingSpeed={800}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <Main />
              <Introduce />
              <Showcase />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Index;
