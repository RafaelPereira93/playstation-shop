import styled from "styled-components";

export const WrapperTitleHome = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 50px 20px;
`;

export const WrapperTitleAndCart = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const TitleHome = styled.h1`
  font-family: var(--roboto-font);
  color: var(--text-color-primary);
  text-align: center;
`;

export const ImageLogoGaming = styled.img`
  width: 100%;
  display: block;
  margin: 0;
  max-width: 45px;
`;

export const WrapperCartImage = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    display: ${({ cart }) => (cart.length ? "block" : "none")};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--purple-color);
    position: absolute;
    top: -4px;
    right: -5px;
  }
`;

export const WrapperCart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & p {
    color: var(--text-color-primary);
    font-weight: 500;
    font-size: 1.1em;
    user-select: none;
  }
`;

export const ImageCart = styled.img`
  display: block;
  max-width: 28px;
  position: relative;
`;
