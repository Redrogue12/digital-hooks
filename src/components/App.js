import React from 'react';
import { Layout } from 'antd';
import { useMount } from 'react-use';
import { useSetRecoilState } from 'recoil';
import Footer from './shared-components/Footer';
import Header from './shared-components/Header';
import Sidebar from './shared-components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Provider from '../auth/Provider';
import { tokenAtom } from './store/Atoms';

function App() {
  const setToken = useSetRecoilState(tokenAtom);
  const getToken = async () => {
    const accessToken = await Provider.getAccessToken();

    if (accessToken) return accessToken;

    return null;
  };

  useMount(() => {
    getToken()
      .then((response) => {
        setToken(response);
      })
      .catch((error) => console.log(error));
  });

  return (
    <Layout style={{ height: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header />
        <Layout.Content className="bg-white overflow-auto mx-4 p-4 scrollbar-thin">
          <Home />
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default App;
