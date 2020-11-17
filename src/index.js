import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import AzureAD from 'react-aad-msal';
import 'antd/dist/antd.css';
import './assets/main.css';
import './assets/override.css';
import App from './components/App';
import Provider from './auth/Provider';

ReactDOM.render(
  <RecoilRoot>
    <AzureAD provider={Provider} forceLogin>
      <App />
    </AzureAD>
  </RecoilRoot>,
  document.getElementById('root')
);
