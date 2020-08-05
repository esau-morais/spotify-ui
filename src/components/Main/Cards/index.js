import React from "react";

import { Title } from "../main";
import { CardsWrap, Card, CardImg, CardContent } from "./cards";

function Cards() {
  return (
    <CardsWrap>
      <Title>Uniquely yours</Title>
      <Card>
        <CardImg>
          <img
            src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
            alt="Liked songs"
          />
        </CardImg>

        <CardContent>
          <h3>Liked Songs</h3>
        </CardContent>
      </Card>
    </CardsWrap>
  );
}

export default Cards;
