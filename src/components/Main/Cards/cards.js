import styled from "styled-components";

export const CardsWrap = styled.div`
  padding-bottom: 1.5rem;
`;

export const InlineCards = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
`;

export const Card = styled.div`
  position: relative;
  width: 165px;
  margin: 1.25rem 0;
  padding: 1.25rem 1.25rem 1rem;
  overflow: hidden;

  background-color: var(--grey-lighter);
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  border-radius: 8px;

  &:hover > span {
    opacity: 1;
  }
`;

export const CardImg = styled.div`
  height: 125px;
  margin-bottom: 1rem;

  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  min-height: 62px;

  h3 {
    font-size: 1rem;
    line-height: 24px;
    text-transform: none;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    display: inline-block;
  }

  span {
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 4px;
    white-space: normal;

    color: var(--grey-text);
  }
`;

export const Button = styled.span`
  position: absolute;
  right: 1.2rem;
  bottom: 1.2rem;

  display: flex;

  width: 40px;
  height: 40px;

  background-color: var(--green-button);
  border-radius: 50%;

  svg {
    margin: auto;
  }

  opacity: 0;

  :hover {
    transform: scale(1.06);
  }
`;
