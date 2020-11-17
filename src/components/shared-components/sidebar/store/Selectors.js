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
          'Ocp-Apim-Subscription-Key': 'f0e4cc3513d94a85a1f1416bf0ee6852',
        },
      };

      const response = await axios(config);
      return await response;
    } catch (error) {
      throw error;
    }
  },
});
