import React from "react";
// Components
import { Title, Description } from "../main";
import {
  CardsWrap,
  InlineCards,
  Card,
  CardImg,
  CardContent,
  Button,
} from "./cards";
// Icons
import { ReactComponent as PlayIcon } from "../../../assets/svg/icons/play.svg";

function Cards() {
  return (
    <>
      {/* Section 1 */}
      <CardsWrap>
        <Title>Uniquely yours</Title>
        <InlineCards>
          <Card>
            <CardImg>
              <img
                src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
                alt="Liked songs"
              />
              <Button className="card__play_button">
               <PlayIcon />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Liked Songs</h3>
            </CardContent>
          </Card>
          <Card>
            <CardImg>
              <img
                src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
                alt="Liked songs"
              />
              <Button className="card__play_button">
               <PlayIcon />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Liked Songs</h3>
            </CardContent>
          </Card>
          <Card>
            <CardImg>
              <img
                src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
                alt="Liked songs"
              />
              <Button className="card__play_button">
               <PlayIcon />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Liked Songs</h3>
            </CardContent>
          </Card>
          <Card>
            <CardImg>
              <img
                src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
                alt="Liked songs"
              />
              <Button className="card__play_button">
               <PlayIcon />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Liked Songs</h3>
            </CardContent>
          </Card>
          <Card>
            <CardImg>
              <img
                src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
                alt="Focus"
              />
              <Button className="card__play_button">
                <PlayIcon />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Liked songs</h3>
            </CardContent>
          </Card>
        </InlineCards>
      </CardsWrap>
      {/* Section 2 */}
      <CardsWrap>
        <Title>Charts</Title>
        <InlineCards>
          {/* Card 1 */}
          <Card>
            <CardImg>
              <img
                src="https://charts-images.scdn.co/REGIONAL_BR_DEFAULT.jpg"
                alt="Regional BR"
              />
              <Button className="card__play_button">
                <PlayIcon />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Brazil Top 50</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>
          </Card>
          {/* Card 2 */}
          <Card>
            <CardImg>
              <img
                src="https://charts-images.scdn.co/REGIONAL_BR_DEFAULT.jpg"
                alt="Regional BR"
              />
              <Button className="card__play_button">
                <PlayIcon />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Brazil Top 50</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>
          </Card>
          {/* Card 3 */}
          <Card>
            <CardImg>
              <img
                src="https://charts-images.scdn.co/REGIONAL_BR_DEFAULT.jpg"
                alt="Regional BR"
              />
              <Button className="card__play_button">
                <PlayIcon />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Brazil Top 50</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>
          </Card>
          {/* Card 4 */}
          <Card>
            <CardImg>
              <img
                src="https://charts-images.scdn.co/REGIONAL_BR_DEFAULT.jpg"
                alt="Regional BR"
              />
              <Button>
                <PlayIcon />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Brazil Top 50</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>
          </Card>
          {/* Card 5 */}
          <Card>
            <CardImg>
              <img
                src="https://charts-images.scdn.co/REGIONAL_BR_DEFAULT.jpg"
                alt="Regional BR"
              />
              <Button className="card__play_button">
                <PlayIcon />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Brazil Top 50</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>
          </Card>
          {/* Card 6 */}
          <Card>
            <CardImg>
              <img
                src="https://charts-images.scdn.co/REGIONAL_BR_DEFAULT.jpg"
                alt="Regional BR"
              />
              <Button className="card__play_button">
                <PlayIcon />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Brazil Top 50</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>
          </Card>
        </InlineCards>
      </CardsWrap>
      {/* Section 3 */}
      <CardsWrap>
        <Title>Focus</Title>
        <Description>Music to help you concentrate.</Description>
        <InlineCards>
          <Card>
            <CardImg>
              <img
                src="https://i.scdn.co/image/ab67706f000000020c527c5b3a3398fc24082d5b"
                alt="Focus"
              />
              <Button className="card__play_button">
                <PlayIcon />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Trabalhando de Casa</h3>
              <span>Uma seleção de hits pra te acompanhar no home office.</span>
            </CardContent>
          </Card>
          <Card>
            <CardImg>
              <img
                src="https://i.scdn.co/image/ab67706f000000020c527c5b3a3398fc24082d5b"
                alt="Focus"
              />
              <Button className="card__play_button">
                <PlayIcon />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Trabalhando de Casa</h3>
              <span>Uma seleção de hits pra te acompanhar no home office.</span>
            </CardContent>
          </Card>
          <Card>
            <CardImg>
              <img
                src="https://i.scdn.co/image/ab67706f000000020c527c5b3a3398fc24082d5b"
                alt="Focus"
              />
              <Button className="card__play_button">
                <PlayIcon />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Trabalhando de Casa</h3>
              <span>Uma seleção de hits pra te acompanhar no home office.</span>
            </CardContent>
          </Card>
          <Card>
            <CardImg>
              <img
                src="https://i.scdn.co/image/ab67706f000000020c527c5b3a3398fc24082d5b"
                alt="Focus"
              />
              <Button className="card__play_button">
                <PlayIcon />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Trabalhando de Casa</h3>
              <span>Uma seleção de hits pra te acompanhar no home office.</span>
            </CardContent>
          </Card>
          <Card>
            <CardImg>
              <img
                src="https://i.scdn.co/image/ab67706f000000020c527c5b3a3398fc24082d5b"
                alt="Focus"
              />
              <Button className="card__play_button">
                <PlayIcon />
              </Button>
            </CardImg>

            <CardContent>
              <h3>Trabalhando de Casa</h3>
              <span>Uma seleção de hits pra te acompanhar no home office.</span>
            </CardContent>
          </Card>
        </InlineCards>
      </CardsWrap>
    </>
  );
}

export default Cards;
