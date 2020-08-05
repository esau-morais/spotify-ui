import React from "react";

import { OuterWrap, Container, MusicControls } from "./components";
import Aside from "./components/Aside";
import Main from "./components/Main";

function App() {
  return (
    <OuterWrap>
      <Container>
        <Aside />
        <Main />
      </Container>
      <MusicControls>Spotify</MusicControls>
    </OuterWrap>
  );
}

export default App;
