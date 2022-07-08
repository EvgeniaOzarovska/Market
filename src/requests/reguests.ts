import { fetchService } from './fetch.service';

export const fetchItemCards = async (category: string) => {
  return await fetchService(`http://localhost:3000/${category}`, 'get');
};

export const fetchCategories = async () => {
  return await fetchService(' http://localhost:3000/categories', 'get');
};
