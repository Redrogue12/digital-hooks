import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import Header from './shared-components/Header';
import PushNotifications from './shared-components/PushNotifications';
import { configSelector } from './store/Selectors';

function Home() {
  const config = useRecoilValueLoadable(configSelector);
  console.log('config:', config);
  return (
    <>
      <Header />
      <PushNotifications />
    </>
  );
}

export default Home;
