import { AxiosResponse } from 'axios';
import { ProductInterface } from 'src/schemas/Product';
import client from './_client';

// 메인페이지 리스트
export const getProductList = (): Promise<AxiosResponse<ProductInterface[]>> => {
  return client.get('/product');
};

export const getProductData = (productId: number): Promise<AxiosResponse<ProductInterface>> => {
  return client.get(`/product/${productId}`);
};
