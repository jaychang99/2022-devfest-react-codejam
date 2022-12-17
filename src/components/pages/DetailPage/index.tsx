import { AppScreen } from '@stackflow/plugin-basic-ui';
import React, { useEffect, useState } from 'react';
import { DetailPageBackButton } from 'src/components/common/Stackflow';
import { useFlow } from 'src/utils/stackflow';
import styled from 'styled-components';
import { UserInterface } from 'src/schemas/Product';
import { ProductInterface } from '../../../schemas/Product';
import { getUserData } from 'src/services/user';
import { getProductData } from 'src/services/product';
import UserProfile from 'src/components/pages/DetailPage/components/UserProfile';
import ProductDetail from 'src/components/pages/DetailPage/components/ProductDetail';

type DetailParams = {
  params: {
    id: string;
  };
};

const DetailPage: React.FC<DetailParams> = ({ params: { id } }) => {
  // stackflow
  const { pop } = useFlow();

  const [product, setProduct] = useState<ProductInterface>();
  const [user, setUser] = useState<UserInterface>();

  const loadData = async () => {
    const { data } = await getProductData(Number(id));

    setProduct(data);
    const { data: userData } = await getUserData(data.userID);

    setUser(userData);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <AppScreen
      appBar={{
        backButton: {
          render: () => <DetailPageBackButton onClick={pop} />,
        },
      }}
    >
      {product && user && (
        <section>
          <ProductImageWrapper>
            <img src={product.img} alt="product" />
          </ProductImageWrapper>
          <UserProfile {...user} />
          <ProductDetail {...product} />
        </section>
      )}
    </AppScreen>
  );
};

export default DetailPage;

const ProductImageWrapper = styled.span`
  width: 100%;
  height: 100%;
  display: inline-block;
`;
