export const saveFavoritesToLocStor = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};

export const getFromLocStor = () => {
  const result = localStorage.getItem("items");
  return result ? JSON.parse(result) : [];
};
