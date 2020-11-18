import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { CreditCardOutlined, createFromIconfontCN } from '@ant-design/icons';
import { useRecoilState } from 'recoil';
import { collapseAtom } from './store/Atoms';
import SidebarDropdown from './SidebarDropdown';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2202999_l9anz3ql6n.js'],
});

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
      <Menu mode="vertical" defaultSelectedKeys="stripe" className="border-0">
        <SidebarDropdown />
        <Menu.ItemGroup title="Payments">
          <Menu.Item key="stripe" icon={<IconFont type="icon-ccstripe" />}>
            Stripe
          </Menu.Item>
          <Menu.Item
            key="paypal"
            icon={<IconFont type="icon-paypal" />}
            disabled
          >
            Paypal
          </Menu.Item>
          <Menu.Item key="ath-movil" icon={<CreditCardOutlined />} disabled>
            ATH Móvil (soon)
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Setup">
          <Menu.Item
            key="settings-store"
            icon={<CreditCardOutlined />}
            disabled
          >
            Store
          </Menu.Item>
          <Menu.Item
            key="settings-options"
            icon={<CreditCardOutlined />}
            disabled
          >
            Options
          </Menu.Item>
          <Menu.Item
            key="settings-hours"
            icon={<CreditCardOutlined />}
            disabled
          >
            Hours
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
      <Button type="primary" onClick={() => setCollapsed(true)}>
        Primary Button
      </Button>
    </Layout.Sider>
  );
}

export default Sidebar;
