import React from "react";
import * as styles from "./PromoCodeModalStyles";
import { modalPromoCode } from "../../utils/promoCode";

const PromoCodeModal = ({ promoModal, setPromoModal }) => {
  const handleModal = ({ target }) => {
    const isDataSetModal = target.dataset.close;

    if (isDataSetModal) {
      setPromoModal(false);
    }
  };

  return (
    <>
      <styles.WrapperPromoCodeModal
        data-close="modal"
        onClick={handleModal}
        promoModal={promoModal}
      >
        <styles.ContentPromoCode>
          <h1>Promo code</h1>
          <p>
            Use this promotional code to get 10% off the total purchase price.
          </p>
          <span>{`${modalPromoCode.month}${modalPromoCode.year}`}</span>
          <styles.CloseModal data-close="modal" onClick={handleModal}>
            X
          </styles.CloseModal>
        </styles.ContentPromoCode>
      </styles.WrapperPromoCodeModal>
    </>
  );
};

export default PromoCodeModal;
