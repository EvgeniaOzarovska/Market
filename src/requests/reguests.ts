import { fetchService } from './fetchService';
import { ICard } from '../pages/Home/componentsHome/ItemCard/ItemCard';
import { IItem } from '../pages/Home/componentsHome/Sidebar/Sidebar';

export const fetchItemCards = async (category: string): Promise<ICard[]> => {
  console.log(99999999, fetchService(`http://localhost:3030/${category}`, 'get'));
  return await fetchService(`http://localhost:3030/${category}`, 'get');
};

export const fetchCategories = async (): Promise<IItem[]> => {
  console.log(4444444444);
  return await fetchService('http://localhost:3030/categories', 'get');
};
