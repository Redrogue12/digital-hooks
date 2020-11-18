import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { Row, Statistic, Col, Typography } from 'antd';
import { balancesSelector } from '../store/Selectors';
import Chart from './Chart';

function Balances() {
  const balances = useRecoilValueLoadable(balancesSelector);
  console.log(balances);
  return (
    <Row gutter={[8, 8]} type="flex">
      <Col xs={24} lg={18}>
        <Typography.Title level={5}>Payouts Timeline</Typography.Title>
        <Chart />
      </Col>
      <Col xs={24} lg={6} className="bg-gray-200 rounded-lg">
        <div className="p-4">
          <Typography.Title level={5}>Balance</Typography.Title>
          <Typography.Paragraph type="secondary">
            Available to pay out
          </Typography.Paragraph>
          <Statistic
            className="mb-4"
            title={<div className="text-green-500">Total Balance</div>}
            prefix="$"
            suffix={
              balances.state === 'hasValue' &&
              balances.contents.data.data.currency.toUpperCase()
            }
            value={
              balances.state === 'hasValue' &&
              balances.contents.data.data.amount * -1
            }
          />
          <Statistic
            title={
              <div className="text-red-500">In Transit on next payout</div>
            }
            prefix="$"
            loading={balances.state !== 'hasValue'}
            suffix={
              balances.state === 'hasValue' &&
              balances.contents.data.data.currency.toUpperCase()
            }
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
