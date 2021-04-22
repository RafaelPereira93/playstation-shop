import styled from "styled-components";

export const WrapperCart = styled.main`
  display: grid;
  grid-template-columns: 70% 1fr;
  gap: 10px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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
`;

// ITEM
export const WrapperItem = styled.div`
  display: grid;
  grid-template-columns: 40% 20% 20% 20%;

  & div {
    padding: 10px;
  }
`;

export const WrapperProductImage = styled.div``;

export const HeadTitle = styled.h2`
  color: var(--text-color-primary);
  font-size: 1.2em;
  text-align: ${({ align }) => (align === "center" ? "center" : "left")};
`;

export const WrapperContentImage = styled.div`
  display: grid;
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

  & h2 {
    font-size: 0.9em;
    color: var(--text-color-primary);
  }

  & span {
    color: var(--text-color-primary);
    font-size: 0.8em;
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
    min-width: 15px;
    max-width: 30px;
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
`;
