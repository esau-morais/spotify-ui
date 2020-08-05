import styled from "styled-components";

export const Nav = styled.nav`
  width: 212px;
  height: calc(100% - 24px);

  display: flex;
  flex-direction: column;
  padding: 24px 10px 0 10px;

  background-color: var(--grey-dark);
`;

export const Items = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  list-style-type: none;

  font-size: 0.9rem;
  font-weight: 600;

  border-radius: 4px;
  padding: 0.7rem 0.8rem;
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
  font-weight: 700;

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
