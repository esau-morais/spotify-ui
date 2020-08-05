import React from "react";
// Components
import { Nav, Items, Item, Cookies } from "./aside";
// Images and Icons
import { ReactComponent as Spotify } from "../../assets/svg/spotify.svg";
import { ReactComponent as HomeIcon } from "../../assets/svg/icons/home.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/icons/search.svg";
import { ReactComponent as LibraryIcon } from "../../assets/svg/icons/library.svg";

function Aside() {
  return (
    <Nav>
      <div style={{ padding: "0 4.2rem 1.2rem 0.8rem" }}>
        <Spotify />
      </div>

      <Items>
        <Item primary="true">
          <HomeIcon />
          Home
        </Item>
        <Item>
          <SearchIcon />
          Search
        </Item>
        <Item>
          <LibraryIcon />
          Your Library
        </Item>
      </Items>

      <Cookies>
        <span>Cookies</span>
        <span>Privacy</span>
      </Cookies>
    </Nav>
  );
}

export default Aside;
