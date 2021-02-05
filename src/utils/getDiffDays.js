const useDiffDays = (date) => {
  const date1 = new Date(date);
  const date2 = new Date();
  const diffTime = (date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export default useDiffDays;
