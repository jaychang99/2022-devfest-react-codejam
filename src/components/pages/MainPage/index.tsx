import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import React, { useEffect, useState } from 'react';
import Footer from 'src/components/common/Footer';
import ProductItem from 'src/components/common/ProductItem';
import {
  MainPageAppBarLeft,
  MainPageAppBarRight,
} from 'src/components/common/Stackflow';
import { ItemsWrapper } from 'src/components/pages/MainPage/styled';
import { ProductInterface } from 'src/schemas/Product';
import { getProductList } from 'src/services/product';

const MainPage: ActivityComponentType = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  const loadProducts = async () => {
    const { data } = await getProductList();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <AppScreen
      appBar={{
        appendLeft: MainPageAppBarLeft,
        appendRight: MainPageAppBarRight,
      }}
    >
      <ItemsWrapper>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            item={product}
            onClickItem={() => {
              console.log(`${product.name} was clicked. `);
            }}
          ></ProductItem>
        ))}
      </ItemsWrapper>
      테스트
      <Footer />
    </AppScreen>
  );
};

export default MainPage;
