import React from "react";
import CodeArea from "./CodeArea";
import Header from "./Header";
import OutputArea from "./OutputArea";

function Home() {
  return (
    <>
      <Header />

      <div className="global" style={{ display: "flex" }}>
        <CodeArea />
        <OutputArea />
      </div>
    </>
  );
}

export default Home;
