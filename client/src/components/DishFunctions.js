import axios from 'axios'

export const getAllDishes = () => {
  return axios
  .get('./api/dishes/all-dishes')
  .then(res =>{
  return res});
}
