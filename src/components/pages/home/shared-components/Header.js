import React from 'react';
import { PageHeader, Tag, Button } from 'antd';
import { useRecoilValue } from 'recoil';
import { businessAtom } from '../../../store/Atoms';

function Header() {
  const business = useRecoilValue(businessAtom);

  console.log(business);

  return (
    <PageHeader
      className="mb-4 px-0"
      title={business ? business.name : 'Loading...'}
      avatar={business && { src: `${business.backgroundImage}` }}
      tags={
        <Tag color={business && business.isActive ? 'green' : 'red'}>
          {business && business.isActive ? 'Active' : 'Not Active'}
        </Tag>
      }
      subTitle={business ? business.locations[0].address1 : null}
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
      ]}
    />
  );
}

export default Header;
