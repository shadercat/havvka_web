import axios from 'axios'

export const getAll = () => {
  return axios
  .get('./api/dishes/all-dishes')
  .then(res =>{
  return res});
}
