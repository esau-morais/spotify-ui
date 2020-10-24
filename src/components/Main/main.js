import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-y: auto;
`;

export const UpperNav = styled.div`
  background-color: var(--grey-nav);

  width: 100%;
  height: 60px;
  padding: 1.4rem 2.2rem;

  position: sticky;
  top: 0;
  z-index: 3;

  display: flex;
  align-items: center;

  color: #fff;
`;

export const Content = styled.div`
  padding: 1rem 2rem;

  color: #fff;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;

  font-size: 1.5rem;
  text-transform: none;
`;

export const Description = styled.p`
  margin-top: 0.4rem;

  font-size: 14px;
  color: var(--grey-text);
`;
