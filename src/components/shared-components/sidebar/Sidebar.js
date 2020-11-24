import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { CreditCardOutlined, NotificationOutlined } from '@ant-design/icons';
import { useRecoilState } from 'recoil';
import { collapseAtom } from './store/Atoms';
import SidebarDropdown from './SidebarDropdown';

function Sidebar() {
  const [collapsed, setCollapsed] = useRecoilState(collapseAtom);

  return (
    <Layout.Sider
      theme="light"
      breakpoint="sm"
      collapsedWidth="0"
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={200}
    >
      <div className="flex flex-col h-screen overflow-hidden">
        <SidebarDropdown />
        <Menu
          mode="vertical"
          defaultSelectedKeys="stripe"
          className="border-0 flex-grow overflow-auto scrollbar-thin"
        >
          <Menu.ItemGroup title="Services">
            <Menu.Item
              key="PN"
              icon={<NotificationOutlined />}
              onClick={() => console.log('push')}
            >
              Push Notifications
            </Menu.Item>
            <Menu.Item
              key="IC"
              icon={<CreditCardOutlined />}
              disabled
            >
              Info Cards
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
        <div className="border-0 p-4 bg-gray-200 flex justify-center">
          <Button
            type="danger"
            onClick={() => setCollapsed(true)}
          >
            Close
          </Button>
        </div>
      </div>
    </Layout.Sider>
  );
}

export default Sidebar;
