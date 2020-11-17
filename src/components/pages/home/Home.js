import React from 'react';
import { Divider } from 'antd';
import Activities from './shared-components/Activities';
import Header from './shared-components/Header';
import Balances from './shared-components/Balances';

function Home() {
  return (
    <>
      <Header />
      <Balances />
      <Divider />
      <Activities />
    </>
  );
}

export default Home;
