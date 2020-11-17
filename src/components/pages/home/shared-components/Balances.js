import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { Row, Statistic, Col, Typography } from 'antd';
import { balancesSelector } from '../store/Selectors';
import Chart from './Chart';

function Balances() {
  const balances = useRecoilValueLoadable(balancesSelector);
  return (
    <Row gutter={[8, 8]} align="middle">
      <Col xs={24} lg={18}>
        <Typography.Title level={5}>Timeline</Typography.Title>
        <Typography.Paragraph type="secondary">
          Duis venenatis mauris sed purus convallis maximus. Phasellus ac justo
          suscipit.
        </Typography.Paragraph>
        <Chart />
      </Col>
      <Col xs={24} lg={6}>
        <div className="bg-gray-200 rounded-lg p-4">
          <Typography.Title level={5}>Balances</Typography.Title>
          <Typography.Paragraph type="secondary">
            Duis venenatis mauris sed purus convallis maximus.
          </Typography.Paragraph>
          <Statistic
            title="Total Balance"
            prefix="$"
            value={
              balances.state === 'hasValue' &&
              (balances.contents.data.data.amount * -1).toLocaleString()
            }
          />
          <Statistic
            title="In Transit"
            prefix="$"
            value={
              balances.state === 'hasValue' &&
              (balances.contents.data.data.amount * -1).toLocaleString()
            }
          />
        </div>
      </Col>
    </Row>
  );
}

export default Balances;
