import { AppScreen } from '@stackflow/plugin-basic-ui';
import React from 'react';
import { DetailPageBackButton } from 'src/components/common/Stackflow';
import { useFlow } from 'src/utils/stackflow';
import styled from 'styled-components';

type DetailParams = {
  params: {
    id: string;
  };
};

const DetailPage: React.FC<DetailParams> = ({ params: { id } }) => {
  // stackflow
  const { pop } = useFlow();

  return (
    <AppScreen
      appBar={{
        backButton: {
          render: () => <DetailPageBackButton onClick={pop} />,
        },
      }}
    >
      <ProductImageWrapper></ProductImageWrapper>
    </AppScreen>
  );
};

export default DetailPage;

const ProductImageWrapper = styled.span`
  width: 100%;
  height: 100%;
  display: inline-block;
`;
