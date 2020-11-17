import React from 'react';
import { Layout } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <Layout.Footer className="flex justify-center items-center text-xs border-t bg-gray-900 text-gray-500">
      Made with <HeartOutlined className="mx-2" />
      by gopanza ©{new Date().getFullYear()}
    </Layout.Footer>
  );
}

export default Footer;
