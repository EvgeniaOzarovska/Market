export const getCategories = async () => {
  const response = await fetch(' http://localhost:3000/categories', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return await response.json();
};

export const getItemCards = async (category: string) => {
  const response = await fetch(`http://localhost:3000/${category}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return await response.json();
};
