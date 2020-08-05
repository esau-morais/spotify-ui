import styled from "styled-components";

export const Nav = styled.nav`
  width: 274px;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 24px 8px 0 8px;

  background-color: var(--grey-dark);
`;

export const Items = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  svg {
    margin-right: 1rem;
  }

  display: flex;
  align-items: center;
  list-style-type: none;

  font-family: singfy-bold;
  font-size: 0.9rem;

  border-radius: 4px;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  background: ${(props) => (props.primary ? "var(--grey-lighter)" : "none")};
  color: ${(props) => (props.primary ? "#fff" : "var(--grey-text)")};

  &:hover {
    color: #fff;
  }
`;

export const Cookies = styled.div`
  font-size: 11px;

  color: var(--grey-text);

  margin-top: auto;
  padding: 1rem;
  text-align: start;

  span {
    display: block;

    &:nth-child(1) {
      padding-bottom: 0.6rem;
    }
  }
`;
