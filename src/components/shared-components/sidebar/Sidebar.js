import React from 'react';
import { Layout, Menu } from 'antd';
import { CreditCardOutlined } from '@ant-design/icons';
import { useRecoilValue } from 'recoil';
import { collapseAtom } from './store/Atoms';
import SidebarDropdown from './SidebarDropdown';

function Sidebar() {
  const collapsed = useRecoilValue(collapseAtom);

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
      <Menu
        mode="vertical"
        defaultSelectedKeys="stripe"
        className="h-full border-0"
      >
        <SidebarDropdown />
        <Menu.ItemGroup title="Payments">
          <Menu.Item key="stripe" icon={<CreditCardOutlined />}>
            Stripe
          </Menu.Item>
          <Menu.Item key="paypal" icon={<CreditCardOutlined />} disabled>
            Paypal
          </Menu.Item>
          <Menu.Item key="ath-movil" icon={<CreditCardOutlined />} disabled>
            ATH Móvil (soon)
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Setup">
          <Menu.Item key="settings-store" icon={<CreditCardOutlined />} disabled>
            Store
          </Menu.Item>
          <Menu.Item key="settings-options" icon={<CreditCardOutlined />} disabled>Options</Menu.Item>
          <Menu.Item key="settings-hours" icon={<CreditCardOutlined />} disabled>Hours</Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </Layout.Sider>
  );
}

export default Sidebar;
