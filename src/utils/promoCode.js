const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mai",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const yearAndMonth = {
  year: new Date().getFullYear(),
  month: monthNames[new Date().getMonth()].toUpperCase(),
};

const promoCode = (promoCodeUser) => {
  const promoCodeUserToUpperCase = promoCodeUser.trim().toUpperCase();
  const promoCodeValid = `${yearAndMonth.month}${yearAndMonth.year}`;
  const isPromoCodeIsEqualUserCode =
    promoCodeValid === promoCodeUserToUpperCase;

  return isPromoCodeIsEqualUserCode ? "Valid code" : "Invalid code";
};

export default promoCode;

class DateClass {
  get monthAndFullYear() {
    const date = new Date();
    const currentMonth = date.getMonth();
    const month = monthNames[currentMonth];
    const year = date.getFullYear();
    return { month, year };
  }
}

export const modalPromoCode = new DateClass().monthAndFullYear;
