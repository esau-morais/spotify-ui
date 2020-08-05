import React from "react";

import { UpperNav, Container, Content} from "./main";
import Cards from "./Cards";

function Main() {
  return (
    <Container>
      <UpperNav>Spotify</UpperNav>
      <Content>
        <Cards />
      </Content>
    </Container>
  );
}

export default Main;
