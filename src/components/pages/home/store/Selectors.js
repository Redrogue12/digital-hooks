import { selector } from 'recoil';
import axios from 'axios';
import { businessAtom, tokenAtom } from '../../../store/Atoms';

export const payoutsSelector = selector({
  key: 'payouts',
  get: async ({ get }) => {
    const token = get(tokenAtom);
    const business = get(businessAtom);
    console.log(business.id);
    // eslint-disable-next-line no-useless-catch
    try {
      const config = {
        method: 'get',
        url: 'https://lhf.azure-api.net/admin/payouts/0/10/6K',
        headers: {
          'Ocp-Apim-Subscription-Key': process.env.REACT_APP_API_TOKEN,
          Authorization: `Bearer ${token.accessToken}`,
        },
      };

      const response = await axios(config);
      return await response;
    } catch (error) {
      throw error;
    }
  },
});

export const balancesSelector = selector({
  key: 'balances',
  get: async ({ get }) => {
    const token = get(tokenAtom);
    // eslint-disable-next-line no-useless-catch
    try {
      const config = {
        method: 'get',
        url: 'https://lhf.azure-api.net/admin/balance/6K',
        headers: {
          'Ocp-Apim-Subscription-Key': process.env.REACT_APP_API_TOKEN,
          Authorization: `Bearer ${token.accessToken}`,
        },
      };

      const response = await axios(config);
      return await response;
    } catch (error) {
      throw error;
    }
  },
});
