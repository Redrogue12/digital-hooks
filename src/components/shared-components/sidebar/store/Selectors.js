import { selector } from 'recoil';
import axios from 'axios';

export const businessesSelector = selector({
  key: 'userDetailsSelector',
  get: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      const config = {
        method: 'get',
        url: 'https://lhf.azure-api.net/admin/businesses',
        headers: {
          'Ocp-Apim-Subscription-Key': process.env.REACT_APP_API_TOKEN,
        },
      };

      const response = await axios(config);
      return await response;
    } catch (error) {
      throw error;
    }
  },
});
