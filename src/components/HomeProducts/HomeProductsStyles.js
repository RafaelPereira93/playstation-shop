import styled from "styled-components";

export const WrapperProducts = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 50px;
  padding: 30px;
  gap: 30px;
`;

// PRODUCT
export const WrapperProduct = styled.div`
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.3);
`;

export const WrapperImageProduct = styled.div`
  padding: 40px;
  background: rgba(0, 0, 0, 0.1);
`;

export const WrapperPriceAndAddToCart = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  background: #121212;
`;

export const AddToCart = styled.p`
  color: var(--text-color-primary);
  padding: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 1.1em;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--purple-color);
  }
`;

export const Price = styled.p`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--text-color-primary);
  background: var(--purple-color);
  padding: 8px;
  font-weight: bold;
  font-size: 1.3em;
`;

export const ProductAdded = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--purple-color);
  font-weight: bold;
  user-select: none;
`;
