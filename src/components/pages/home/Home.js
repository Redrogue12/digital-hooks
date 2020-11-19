import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import Activities from './shared-components/Activities';
import Header from './shared-components/Header';
import Balances from './shared-components/Balances';
import { configSelector } from './store/Selectors';

function Home() {
  const config = useRecoilValueLoadable(configSelector);
  console.log('config:', config);
  return (
    <>
      <Header />
      <Balances />
      <Activities />
    </>
  );
}

export default Home;
