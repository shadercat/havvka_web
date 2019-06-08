import axios from 'axios'

export const getAllDishes = () => {
  return axios
  .get('./api/dishes/all-dishes')
  .then(res =>{
  return res});
}

export const getAllDishesByCategory = (type, limit) => {
  return axios
  .get('./api/dishes/category-menu?dish_type=' + type + "&limit=" + limit)
  .then(res => {
    return res
  });
}

export const likeDish = (id, userid) => {
  return axios
  .post('./api/dishes/like'+id+'&'+userid)
  .then(res => {
    return res
  });
}

export const getFavouriteDishes = (id) => {
  return axios
  .get('./api/dishes/favourite-dishes/'+id)
  .then(res =>{
    return res
  });
}

export const getDishByName = (name) => {
  return axios
  .get('./api/dishes/dish?dish_name=' + name)
  .then(res => {
    return res
  });
}
