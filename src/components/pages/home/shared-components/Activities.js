import React from 'react';
import { useRecoilValueLoadable, useRecoilState } from 'recoil';
import _ from 'lodash';
import { Table, Tag, Typography } from 'antd';
import { payoutsSelector } from '../store/Selectors';
import { rowsAtom, pageAtom } from '../store/Atoms';

function Activities() {
  const payouts = useRecoilValueLoadable(payoutsSelector);
  const [rows, setRows] = useRecoilState(rowsAtom);
  const [page, setPage] = useRecoilState(pageAtom);

  function mapPayouts(data) {
    return _.map(data, (p) => ({
      key: p.id,
      amount: p.amount,
      status: [p.status],
      description: p.description,
      initiated: new Date(p.created).toLocaleString(),
      estimated: new Date(p.arrivalDate).toLocaleDateString(),
    }));
  }

  return (
    <>
      <Typography.Title level={5}>Payouts Schedule</Typography.Title>
      <Typography.Paragraph type="secondary">
        Deposits reflected on bank account{' '}
      </Typography.Paragraph>
      <Table
        size="small"
        bordered
        footer={() => 'Footer'}
        pagination={{
          showSizeChanger: true,
          onShowSizeChange: (current, pageSize) => {
            setPage(current);
            setRows(pageSize);
          },
          onChange: (p, s) => {
            console.log(p, s);
          },
          current: page,
          pageSize: rows,
          size: 'small',
          pageSizeOptions: [10, 15, 20, 25],
          showTotal: (total, range) => (
            <div className="text-xs">
              Showing {total} of {range}
            </div>
          ),
          showLessItems: false,
        }}
        columns={[
          {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            align: 'center',
            className: 'text-xs font-medium',
            render: (text) => <span>${text}</span>,
          },
          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            align: 'center',
            className: 'text-xs',
            render: (tags) => (
              <>
                {tags.map((tag) => {
                  let color = '#2db7f5';

                  if (tag === 'in_transit') {
                    color = '#f50';
                  }

                  if (tag === 'paid') {
                    color = '#87d068';
                  }

                  return (
                    <Tag color={color} key={tag}>
                      {_.startCase(_.toLower(_.replace(tag, '_', ' ')))}
                    </Tag>
                  );
                })}
              </>
            ),
          },
          {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            align: 'center',
            className: 'text-xs',
            render: (text) => <span>{_.startCase(_.toLower(text))}</span>,
          },
          {
            title: 'Initiated',
            dataIndex: 'initiated',
            key: 'initiated',
            align: 'center',
            className: 'text-xs',
            render: (text) => <span>{text}</span>,
          },
          {
            title: 'Estimated Arrival',
            dataIndex: 'estimated',
            key: 'estimated',
            align: 'center',
            className: 'text-xs',
            render: (text) => <span>{text}</span>,
          },
        ]}
        dataSource={
          payouts.state === 'hasValue'
            ? mapPayouts(payouts.contents.data.data.results)
            : null
        }
        expandable={{
          expandRowByClick: true,
          expandedRowRender: () => <p className="m-0">Payout Details</p>,
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        onRow={(record) => ({
          onClick: () => {
            console.log(record);
          },
        })}
      />
    </>
  );
}

export default Activities;
