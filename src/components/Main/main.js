import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const UpperNav = styled.div`
  background-color: var(--grey-nav);

  width: 100%;
  height: 60px;

  position: sticky;
  top: 0;
  display: flex;
  align-items: center;

  color: #fff;
`;

export const Content = styled.div`
  padding: 1rem 2rem;

  color: #fff;
`;

export const Title = styled.h2`
  margin-bottom: 0.8rem;

  font-size: 1.5rem;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;
  text-transform: none;
`;
