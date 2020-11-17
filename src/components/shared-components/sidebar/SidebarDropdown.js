import React, { useEffect } from 'react';
import _ from 'lodash';
import { Dropdown, Menu, Button } from 'antd';
import {
  ShopOutlined,
  LoadingOutlined,
  SelectOutlined,
} from '@ant-design/icons';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { businessesSelector } from './store/Selectors';
import { businessAtom } from '../../store/Atoms';

function SidebarDropdown() {
  const businesses = useRecoilValueLoadable(businessesSelector);
  const [business, setBusiness] = useRecoilState(businessAtom);
  const { state } = businesses;

  useEffect(() => {
    if (state === 'hasValue') {
      setBusiness(businesses.contents.data.data.results[0]);
    }
  }, [state]);

  return (
    <div className="p-4 w-full bg-gray-900 h-16">
      <Dropdown
        overlay={
          state === 'hasValue' && (
            <Menu selectedKeys={business ? [business.id] : ['']}>
              {_.map(businesses.contents.data.data.results, (b) => (
                <Menu.Item
                  key={b.id}
                  icon={<ShopOutlined />}
                  className="flex items-center"
                  onClick={() => setBusiness(b)}
                >
                  {b.name}
                </Menu.Item>
              ))}
            </Menu>
          )
        }
        arrow="true"
      >
        <Button
          icon={state === 'loading' ? <LoadingOutlined /> : <SelectOutlined />}
          type="primary"
          block
          disabled={state === 'loading'}
          className="flex items-center justify-center"
        >
          {state === 'hasValue' && business ? business.name : 'Loading...'}
        </Button>
      </Dropdown>
    </div>
  );
}

export default SidebarDropdown;
