import styled from "styled-components";

export const WrapperPromoCodeModal = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  z-index: 999999;

  display: ${({ promoModal }) => (promoModal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const ContentPromoCode = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 800px;

  margin: 0 10px;

  background: #121212;
  border: 3px solid var(--purple-color);

  padding: 30px;

  box-shadow: 0 0 10px 1px var(--purple-color);

  & h1 {
    color: var(--purple-color);
    font-size: max(22px, 2.5vw);
  }

  & p {
    color: var(--text-color-primary);
    margin-top: 10px;
    font-size: max(16px, 1vw);
  }

  & span {
    color: var(--text-color-primary);
    margin-top: 15px;
    text-transform: uppercase;
    font-size: max(16px, 1.3vw);
  }

  & span:after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background: var(--purple-color);
    margin-top: 3px;
  }

  @media (max-width: 890px) {
    padding: 50px 10px 50px 10px;
  }
`;

export const CloseModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -25px;
  right: -25px;

  width: 45px;
  height: 45px;

  background: #121212;

  text-transform: uppercase;
  color: var(--text-color-primary);

  font-size: max(16px, 1.3vw);
  font-weight: bold;

  border-radius: 50%;
  border: 3px solid var(--text-color-primary);
  box-shadow: 0 0 8px 1px var(--text-color-primary);

  user-select: none;
  cursor: pointer;

  @media (max-width: 890px) {
    top: -5px;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`;
