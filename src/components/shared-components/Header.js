import React from 'react';
import { Layout, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useRecoilState } from 'recoil';
import { collapseAtom } from './sidebar/store/Atoms';
import Logo from '../../assets/images/logo.png';

function Header() {
  const [collapsed, setCollapsed] = useRecoilState(collapseAtom);
  return (
    <Layout.Header
      theme="dark"
      className="flex items-center justify-between py-0 px-4 text-white bg-green-500 h-16"
    >
      <img alt="Store Logo" className="h-6" src={Logo} />
      <Button
        className="flex items-center justify-center text-white hover:text-gray-500 transition duration-500 ease-in-out "
        type="text"
        shape="circle"
        onClick={() => setCollapsed(!collapsed)}
        icon={<MenuOutlined />}
      />
    </Layout.Header>
  );
}

export default Header;
