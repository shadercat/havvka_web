import axios from 'axios'

export const getAllDishes = () => {
  return axios
  .get('./api/dishes/all-dishes')
  .then(res =>{
  return res});
}

export const getFavouriteDishes = (id) => {
  return axios
  .get('./api/dishes/favourite-dishes/'+id)
  .then(res =>{
    return res
  });
}
