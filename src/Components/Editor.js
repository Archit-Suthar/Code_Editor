import React from "react";
import { useState } from "react";

//material ui imports
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

//codemirror imports
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

// Container -> Wraps whole single editor
// Header    -> Wraps the whole heading area (that is heading + CloseFullScreen button)
// Heading   -> Wraps the box of heading (that is Small box of icon + text (e.g. => [/]HTML or [*]CSS))
// Box       -> Wraps the icon (that is Heading component without Text (e.g. => [/] or [*]))
const Heading = styled(Box)({
  backgroundColor: "#1d1e22",
  display: "flex",
  padding: "9px 12px",
  fontWeight: "600",
});
const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#060606",
  color: "#AAAEBC",
  borderBottom: "1px solid #1D1E22",
});
const Container = styled(Box)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  padding: "0 8px 8px",
});

function Editor({ heading, icon, color, mode, code, setCode }) {
  const [open, setOpen] = useState(true);

  // handles the input change in Codemirror Controlled editor
  const handleChange = (editor, data, value) => {
    setCode(value);
  };
  return (
    <Container>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              backgroundColor: color,
              height: 15,
              width: 19,
              color: "#000",
              display: "flex",
              placeContent: "center",
              alignItems: "center",
              paddingBottom: 5,
              borderRadius: 4,
              marginRight: 5,
              fontSize: "18px",
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>

        <CloseFullscreenIcon
          fontSize="small"
          style={{
            alignSelf: "center",
            cursor: "pointer",
            marginRight: "10px",
          }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </Header>

      {open ? (
        <ControlledEditor
          value={code}
          onBeforeChange={handleChange}
          className="controlled-editor"
          options={{
            lineWrapping: true,
            lint: true,
            mode: mode,
            lineNumbers: true,
            theme: "material",
          }}
        />
      ) : (
        ""
      )}
    </Container>
  );
}

export default Editor;
