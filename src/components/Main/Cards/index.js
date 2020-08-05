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

          <Button>
            <PlayIcon />
          </Button>
        </Card>
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
            </CardImg>

            <CardContent>
              <h3>Brazil Top 50</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>

            <Button>
              <PlayIcon />
            </Button>
          </Card>
          {/* Card 2 */}
          <Card>
            <CardImg>
              <img
                src="https://charts-images.scdn.co/REGIONAL_BR_DEFAULT.jpg"
                alt="Regional BR"
              />
            </CardImg>

            <CardContent>
              <h3>Brazil Top 50</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>

            <Button>
              <PlayIcon />
            </Button>
          </Card>
          {/* Card 3 */}
          <Card>
            <CardImg>
              <img
                src="https://charts-images.scdn.co/REGIONAL_BR_DEFAULT.jpg"
                alt="Regional BR"
              />
            </CardImg>

            <CardContent>
              <h3>Brazil Top 50</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>

            <Button>
              <PlayIcon />
            </Button>
          </Card>
          {/* Card 4 */}
          <Card>
            <CardImg>
              <img
                src="https://charts-images.scdn.co/REGIONAL_BR_DEFAULT.jpg"
                alt="Regional BR"
              />
            </CardImg>

            <CardContent>
              <h3>Brazil Top 50</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>

            <Button>
              <PlayIcon />
            </Button>
          </Card>
          {/* Card 5 */}
          <Card>
            <CardImg>
              <img
                src="https://charts-images.scdn.co/REGIONAL_BR_DEFAULT.jpg"
                alt="Regional BR"
              />
            </CardImg>

            <CardContent>
              <h3>Brazil Top 50</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>

            <Button>
              <PlayIcon />
            </Button>
          </Card>
          {/* Card 6 */}
          <Card>
            <CardImg>
              <img
                src="https://charts-images.scdn.co/REGIONAL_BR_DEFAULT.jpg"
                alt="Regional BR"
              />
            </CardImg>

            <CardContent>
              <h3>Brazil Top 50</h3>
              <span>
                Your daily update of the most played tracks in Brazil right now.
              </span>
            </CardContent>

            <Button>
              <PlayIcon />
            </Button>
          </Card>
        </InlineCards>
      </CardsWrap>
      {/* Section 3 */}
      <CardsWrap>
        <Title>Focus</Title>
        <Description>Music to help you concentrate.</Description>
        <Card>
          <CardImg>
            <img
              src="https://i.scdn.co/image/ab67706f000000020c527c5b3a3398fc24082d5b"
              alt="Focus"
            />
          </CardImg>

          <CardContent>
            <h3>Trabalhando de Casa</h3>
            <span>Uma seleção de hits pra te acompanhar no home office.</span>
          </CardContent>

          <Button>
            <PlayIcon />
          </Button>
        </Card>
      </CardsWrap>
    </>
  );
}

export default Cards;
