import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  *, 
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    font-family: sans-serif;
  }

  :root {
    --grey-dark: #040404; /* Used on Aside */
    --grey-light: #121212; /* Used as Backround Color */
    --grey-lighter: #282828; /* Used on Playlist Items Background Color.
                            */
    --grey-text: #B3B3B3; /* Used on Text Color */
    --grey-nav: #090909; /* Used as Top Bar Background Color */
  }

  a {
    text-decoration: none
  }
`;

export default Global;
