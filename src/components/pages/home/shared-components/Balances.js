import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { Row, Statistic, Col, Typography } from 'antd';
import { balancesSelector } from '../store/Selectors';
import Chart from './Chart';

function Balances() {
  const balances = useRecoilValueLoadable(balancesSelector);
  return (
    <Row gutter={[8, 8]} type="flex">
      <Col xs={24} lg={18}>
        <Typography.Title level={5}>Timeline</Typography.Title>
        <Typography.Paragraph type="secondary">
          Duis venenatis mauris sed purus convallis maximus. Phasellus ac justo
          suscipit.
        </Typography.Paragraph>
        <Chart />
      </Col>
      <Col xs={24} lg={6} className="bg-gray-200 rounded-lg">
        <div className="p-4">
          <Typography.Title level={5}>Balance</Typography.Title>
          <Typography.Paragraph type="secondary">Available to pay out</Typography.Paragraph>
          <Statistic
            title="Total Balance"
            prefix="$"
            loading={balances.state !== 'hasValue'}
            suffix={balances.state === 'hasValue' && balances.contents.data.data.currency.toUpperCase()}
            value={
              balances.state === 'hasValue' &&
              balances.contents.data.data.amount * -1
            }
          />
          <Statistic
            title="In Transit on next payout"
            prefix="$"
            loading={balances.state !== 'hasValue'}
            suffix={balances.state === 'hasValue' && balances.contents.data.data.currency.toUpperCase()}
            value={
              balances.state === 'hasValue' &&
              balances.contents.data.data.amount * -1
            }
          />
        </div>
      </Col>
    </Row>
  );
}

export default Balances;
