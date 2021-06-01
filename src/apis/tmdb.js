import axios from 'axios';

const KEY = '522990059f82ee0e37fa6c8b763f5a11';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY,
  },
});
