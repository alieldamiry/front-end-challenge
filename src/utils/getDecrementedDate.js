// decrement days from today to and return the date before 30 days from today

const getDecrementedDate = (days) => {
  let decrementedDate = new Date();
  decrementedDate.setDate(decrementedDate.getDate() - days);

  let dd = decrementedDate.getDate();
  let mm = decrementedDate.getMonth() + 1;
  const yyyy = decrementedDate.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }
  decrementedDate = `${yyyy}-${mm}-${dd}`;
  return decrementedDate;
};

export default getDecrementedDate;
