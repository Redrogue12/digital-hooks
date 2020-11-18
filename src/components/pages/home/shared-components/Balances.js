import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { Row, Statistic, Col, Typography } from 'antd';
import { balancesSelector } from '../store/Selectors';
import Chart from './Chart';

function Balances() {
  const balances = useRecoilValueLoadable(balancesSelector);
  return (
    <Row gutter={20} type="flex" className="mb-4">
      <Col xs={24} lg={18}>
        <div className="p-4 shadow bg-gray-100 rounded-lg">
          <Typography.Title level={5}>Payouts Timeline</Typography.Title>
          <Chart />
        </div>
      </Col>
      <Col xs={24} lg={6} className="flex">
        <div className="flex-grow p-4 shadow bg-gray-100 rounded-lg mt-4 md:mt-0">
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
