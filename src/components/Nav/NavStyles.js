import styled from "styled-components";

export const WrapperNav = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 25px;
`;

export const NavWrapper = styled.nav`
  color: var(--text-color-primary);

  & ul {
    list-style: none;
    display: flex;
    gap: 40px;
    padding: 20px 0;
  }

  @media (min-width: 300px) and (max-width: 768px) {
    & ul {
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
    }
  }
`;

export const LinkNav = styled.li`
  font-size: 0.9em;
  background: ${({ current }) => (current ? "var(--purple-color)" : "#fff")};
  color: ${({ current }) => (current ? "#fff" : "#121212")};
  padding: 8px 20px;
  border-radius: 2px;
  cursor: pointer;
  user-select: none;
  font-weight: bold;
  text-transform: uppercase;
  border: 3px solid
    ${({ current }) => (current ? "#fff" : "var(--purple-color)")};

  @media (min-width: 300px) and (max-width: 768px) {
    padding: 5px 10px;
  }
`;
