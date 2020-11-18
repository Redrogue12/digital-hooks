import React from 'react';
import Activities from './shared-components/Activities';
import Header from './shared-components/Header';
import Balances from './shared-components/Balances';

function Home() {
  return (
    <>
      <Header />
      <Balances />
      <Activities />
    </>
  );
}

export default Home;
