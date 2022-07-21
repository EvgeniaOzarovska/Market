import { shoppingCartMock } from './mocks.cy';

export const URLS = 'http://localhost:3001/category/smartphone';

export const calculate =
  shoppingCartMock[0].price * shoppingCartMock[0].count +
  shoppingCartMock[1].price * shoppingCartMock[1].count;
