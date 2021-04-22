import styled from "styled-components";

export const WrapperCart = styled.main`
  display: grid;
  grid-template-columns: 70% 1fr;
  gap: 10px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const WrapperAddedItens = styled.div`
  width: 100%;
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
  background: green;
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

  & h3 {
    color: var(--text-color-primary);
    font-size: 1em;
  }
`;

export const PromoCode = styled.div`
  margin-top: 25px;

  & input {
    display: block;
    width: 100%;
    padding: 6px;
    margin-top: 8px;
    outline: none;
  }

  & button {
    margin-top: 8px;
  }
`;

export const TitlePromoCode = styled.h3`
  color: var(--text-color-primary);
  font-size: 1em;
`;

export const WrapperTotalAndCheckout = styled.div`
  margin-top: 50px;

  & button {
    display: block;
    width: 100%;
    margin-top: 30px;
  }
`;

export const WrapperTotalCost = styled.div`
  display: flex;
  justify-content: space-between;

  & h3 {
    color: var(--text-color-primary);
    font-size: 1em;
  }
`;
