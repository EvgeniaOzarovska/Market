import { shoppingCartMock } from './mocks.cy';

export const calculate =
  shoppingCartMock[0].price * shoppingCartMock[0].count +
  shoppingCartMock[1].price * shoppingCartMock[1].count;
