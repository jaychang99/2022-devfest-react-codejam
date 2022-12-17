import { ActivityComponentType } from '@stackflow/react';
import React from 'react';
import OtherItems from 'src/components/pages/DetailPage/components/OtherItems';
import ProductDetail from 'src/components/pages/DetailPage/components/ProductDetail';
import UserProfile from 'src/components/pages/DetailPage/components/UserProfile';
import { PRODUCT_LIST_MOCK_DATA } from 'src/constants/productList';

const MainPage: ActivityComponentType = () => {
  return (
    <div>
      <OtherItems userName="테스트" other={[]} />
      {PRODUCT_LIST_MOCK_DATA.map((product) => (
        <ProductDetail
          key={product.id}
          name={product.title}
          category={'테스트'}
          dates={String(product.madeAt)}
          info="테스트"
          chats={0}
          favorites={0}
          views={0}
        />
      ))}
      <ProductDetail
        name="테스트 상품"
        category="음식"
        dates="2022-10-23"
        info="싱품 정보"
        chats={0}
        favorites={0}
        views={0}
      />
      <UserProfile profileImg={''} userName="테스트" rating={3} location="위치" />
    </div>
  );
};

export default MainPage;
