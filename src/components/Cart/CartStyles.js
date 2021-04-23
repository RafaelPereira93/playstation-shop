import styled from "styled-components";

export const WrapperCart = styled.main`
  display: grid;
  grid-template-columns: 70% 1fr;
  gap: 10px;
  width: 100%;
  max-width: 1200px;
  padding: 0 10px;
  margin: 0 auto;

  @media (min-width: 300px) and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const NoItemsInCart = styled.h3`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color: var(--text-color-primary);
  font-family: var(--roboto-font);
  font-size: 1.5em;
  text-align: center;
`;

export const WrapperAddedItens = styled.div`
  width: 100%;
  max-height: 600px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--purple-color);
    border-radius: 5px;
  }
`;

export const HeaderTitleProducts = styled.div`
  display: grid;
  grid-template-columns: 40% 20% 20% 20%;

  @media (min-width: 300px) and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

// ITEM
export const WrapperItem = styled.div`
  display: grid;
  grid-template-columns: 40% 20% 20% 20%;

  & div {
    padding: 10px;
  }

  @media (min-width: 300px) and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 10px;
    gap: 15px;
    grid-column-gap: 20px;

    & div {
      padding: 0;
      margin-bottom: 10px;
      justify-content: center;

      & p {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export const WrapperProductImage = styled.div``;

export const HeadTitle = styled.h2`
  color: var(--text-color-primary);
  font-size: 1.2em;
  text-align: ${({ align }) => (align === "center" ? "center" : "left")};

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: ${({ mobile }) => (mobile === "true" ? "1em" : "1.2em")};
    text-align: ${({ mobile }) => (mobile === "true" ? "center" : "")};
  }
`;

export const WrapperContentImage = styled.div`
  display: grid;
  justify-content: flex-start;
  align-items: center;
  grid-template-columns: 80px 1fr;
  gap: 15px;
  margin-top: 10px;

  & img {
    width: 100%;
    max-width: 80px;
    max-height: 80px;
    object-fit: cover;
    border: 3px solid var(--purple-color);
    border-radius: 50%;
    background: transparent;
    grid-row: 1 / 3;
  }

  @media (min-width: 300px) and (max-width: 768px) {
    grid-template-columns: 1fr;

    & img {
      width: 60px;
      height: 60px;
      grid-row: 1;
      margin: 0 auto;
    }
  }
`;

export const ProductName = styled.h2`
  font-size: 1em;
  color: var(--text-color-primary);

  @media (min-width: 300px) and (max-width: 768px) {
    text-align: center;
  }
`;

export const RemoveProduct = styled.span`
  display: ${({ mobile }) => (mobile === "true" ? "inline-block" : "none")};
  color: #fb3640;
  font-size: 0.85em;
  cursor: pointer;
  max-width: 50px;
  visibility: ${({ mobile }) => (mobile === "true" ? "hidden" : "visible")};

  @media (min-width: 300px) and (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    visibility: ${({ mobile }) => (mobile === "true" ? "visible" : "hidden")};
    ${({ mobile }) => mobile === "true" && "display: flex"};
    ${({ mobile }) => mobile === "true" && "justify-content: center"};
    ${({ mobile }) => mobile === "true" && "padding: 0 10px 30px 0"};
    ${({ mobile }) => mobile === "true" && "padding: 0 10px 30px 0"};
  }
`;

export const WrapperQuantity = styled.div``;

export const WrapperContentQuantity = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;

  & button {
    display: block;
    width: 100%;
    min-width: 30px;
    max-width: 30px;
    min-height: 30px;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
    background: #fff;
    outline: none;
    border: none;
  }

  & span {
    color: var(--text-color-primary);
  }

  @media (min-width: 300px) and (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    & button {
      min-width: 25px;
      max-width: 15px;
      min-height: 15px;
    }
  }
`;

export const WrapperPrice = styled.div``;

export const WrapperContentPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  & p {
    color: var(--text-color-primary);
    font-weight: bold;
  }
`;

export const WrapperTotal = styled.div``;

export const WrapperContentTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  & p {
    color: var(--text-color-primary);
    font-weight: bold;
  }
`;

// WRAPPER ORDER SUMMARY

export const WrapperTotalCart = styled.div`
  width: 100%;
  max-height: 400px;
  padding: 0 20px;

  @media (min-width: 300px) and (max-width: 768px) {
    padding: 50px 5px;
    margin-bottom: 50px;
  }
`;

export const WrapperTitleSummary = styled.h2`
  color: #fff;
  font-size: 1.2em;
`;

export const HeaderItemsCountAndTotalPrice = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: 70% 1fr;
`;

export const ItemsLength = styled.h3`
  color: var(--text-color-primary);
  font-size: 1em;
`;

export const ItemPrice = styled.h3`
  color: var(--text-color-primary);
  font-size: 1em;
  text-align: right;
`;

export const PromoCode = styled.div`
  margin-top: 25px;
`;

export const InputPromo = styled.input`
  display: block;
  width: 100%;
  padding: 6px;
  margin-top: 8px;
  outline: none;
  border: 2px solid transparent;
  transition: 0.2s;
  font-family: var(--roboto-font);
  font-size: 0.9em;
  font-weight: 500;

  &:focus {
    border: 2px solid var(--purple-color);
  }

  @media (min-width: 300px) and (max-width: 768px) {
    max-width: 300px;
  }
`;

export const PromoCodeButton = styled.button`
  display: block;
  width: 100%;
  max-width: 150px;
  margin-top: 8px;
  padding: 8px 0;
  background: var(--purple-color);
  color: var(--text-color-primary);
  border: none;
  font-size: 0.9em;
  font-family: var(--roboto-font);
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.2s;

  &:hover {
    border: 2px solid var(--text-color-primary);
  }
`;

export const TitlePromoCode = styled.h3`
  color: var(--text-color-primary);
  font-size: 1em;
`;

export const WrapperTotalAndCheckout = styled.div`
  margin-top: 50px;
`;

export const WrapperTotalCost = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextTotalCost = styled.h3`
  color: var(--text-color-primary);
`;

export const TotalCost = styled.h3`
  color: #80ffdb;
`;

export const ButtonTotalCost = styled.button`
  display: block;
  width: 100%;
  margin-top: 20px;
  padding: 10px 0;
  background: var(--purple-color);
  color: var(--text-color-primary);
  border: none;
  font-size: 1em;
  font-family: var(--roboto-font);
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.2s;

  &:hover {
    border: 2px solid var(--text-color-primary);
  }

  @media (min-width: 300px) and (max-width: 768px) {
    max-width: 300px;
  }
`;

export const ContinueShopping = styled.div`
  display: flex;
  padding-left: 30px;
  margin-top: 20px;

  & img {
    display: block;
    width: 100%;
    max-width: 25px;
  }

  & a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-color-primary);
    font-size: 0.85em;
  }

  @media (min-width: 300px) and (max-width: 768px) {
    & a {
      font-size: max(14px, 2.5vw);
    }
  }
`;

export const PromoCodeText = styled.p`
  margin-top: 10px;
  color: ${({ messagePromoCode }) =>
    messagePromoCode === "Valid code" ? "#80ffdb" : "#fb3640"};
`;
