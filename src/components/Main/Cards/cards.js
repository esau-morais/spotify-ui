import styled from "styled-components";

export const CardsWrap = styled.div``;

export const Card = styled.div`
  width: fit-content;

  padding: 1.25rem 1.25rem 1rem;
  overflow: hidden;

  background-color: var(--grey-lighter);
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  border-radius: 8px;
`;

export const CardImg = styled.div`
  width: 125px;
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
    font-weight: 700;
    line-height: 24px;
    letter-spacing: normal;
    text-transform: none;
  }
`;
