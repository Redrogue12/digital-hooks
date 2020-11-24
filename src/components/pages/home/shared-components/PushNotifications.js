import React from 'react';
import { Spin, Typography, Table, Tag, Space } from 'antd';
import { useRecoilValueLoadable } from 'recoil'; // useRecoilState
import _ from 'lodash';
import { pushNotificationsSelector } from '../store/Selectors';
// import { rowsAtom, pageAtom } from '../store/Atoms';

function PushNotifications() {
  const pns = useRecoilValueLoadable(pushNotificationsSelector);
  // const [rows, setRows] = useRecoilState(rowsAtom);
  // const [page, setPage] = useRecoilState(pageAtom);

  if (pns.state === 'loading') return <div className="flex justify-center"><Spin size="large" /></div>;
  console.log('pns:', pns.contents.data.data.results);

  function mapPNs(data) {
    return _.map(data, (pn) => ({
      key: pn.id,
      media: { eng: pn.mediaUrlEng, spa: pn.mediaUrl },
      messageENG: pn.messageENG,
      messageSPA: pn.messageSPA,
      status: [pn.status],
      publishDate: new Date(pn.deliveryDate).toLocaleString(),
    }));
  }

  return (
    <>
      <Typography.Title level={5}>Push Notifications</Typography.Title>
      <Table
        size="small"
        bordered
        // pagination={{
        //   showSizeChanger: true,
        //   onShowSizeChange: (current, pageSize) => {
        //     setPage(current);
        //     setRows(pageSize);
        //   },
        //   onChange: (p, s) => {
        //     console.log(p, s);
        //   },
        //   current: page,
        //   pageSize: rows,
        //   size: 'small',
        //   pageSizeOptions: [10, 15, 20, 25],
        //   showTotal: (total, range) => (
        //     <div className="text-xs">
        //       Showing {total} of {range}
        //     </div>
        //   ),
        //   showLessItems: false,
        // }}
        columns={[
          {
            title: 'Publish Date',
            dataIndex: 'publishDate',
            key: 'publishDate',
            align: 'center',
            className: 'text-xs font-medium',
            render: (text) => <span>{text}</span>,
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
            title: 'Message English',
            dataIndex: 'messageENG',
            key: 'messageENG',
            align: 'center',
            className: 'text-xs',
            render: (text) => <span>{text}</span>,
          },
          {
            title: 'Message Spanish',
            dataIndex: 'messageSPA',
            key: 'messageSPA',
            align: 'center',
            className: 'text-xs',
            render: (text) => <span>{text}</span>,
          },
          {
            title: 'Media',
            dataIndex: 'media',
            key: 'media',
            align: 'center',
            className: 'text-xs',
            render: (media) => (
              <Space>
                <img alt="eng" src={media.eng} className="w-8" />
                <img alt="spa" src={media.spa} className="w-8" />
              </Space>
            ),
          },
        ]}
        dataSource={
          pns.state === 'hasValue'
            ? mapPNs(pns.contents.data.data.results)
            : null
        }
        // expandable={{
        //   expandRowByClick: true,
        //   expandedRowRender: () => <p className="m-0">Payout Details</p>,
        //   rowExpandable: (record) => record.name !== 'Not Expandable',
        // }}
        onRow={(record) => ({
          onClick: () => {
            console.log(record);
          },
        })}
      />
    </>
  );
}

export default PushNotifications;
