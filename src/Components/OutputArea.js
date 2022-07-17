import React from "react";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataProvider";

import styled from "@emotion/styled";
import { Box } from "@mui/system";

const Container = styled(Box)({
  height: "90vh",
  width: "50vw",
  //   minWidth: "600px",
});

function OutputArea() {
  const { html, css, js } = useContext(DataContext);
  const [srcCode, setSrcCode] = useState("");

  const src = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSrcCode(src);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [html, css, js]);

  return (
    <Container className="outputArea">
      <iframe
        srcDoc={srcCode}
        title="Output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      >
        Output
      </iframe>
    </Container>
  );
}

export default OutputArea;
