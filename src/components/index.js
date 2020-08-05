import styled from "styled-components";

export const OuterWrap = styled.div`
  height: 100vh;
  min-height: 100%;
`;

export const Container = styled.div`
  background-color: var(--grey-light);

  display: flex;
  height: calc(100vh - 90px);
`;

export const MusicControls = styled.div`
  background-color: var(--grey-lighter);

  height: 90px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 2;

  color: #fefefe;
`;
