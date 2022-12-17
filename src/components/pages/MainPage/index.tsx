import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import React, { useEffect, useState } from 'react';
import Footer from 'src/components/common/Footer';
import {
  MainPageAppBarLeft,
  MainPageAppBarRight,
} from 'src/components/common/Stackflow';
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
      테스트
      <Footer />
    </AppScreen>
  );
};

export default MainPage;
