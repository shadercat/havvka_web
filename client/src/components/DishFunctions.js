import axios from 'axios'

export const getAllDishes = () => {
  return axios
  .get('./api/dishes/all-dishes')
  .then(res =>{
  return res});
}

export const deleteSet = (set_id) => {
  axios
  .get('./api/sets/set_delete?set_id=' + set_id)
  .then(res => {
    return res
  });
}

export const setItemDelete = (set_items_id) => {
  return axios
  .get('./api/sets/set_item_delete?set_items_id=' + set_items_id)
  .then(res => {
    return res
  });
}

export const getAllDishesByPopularity = () => {
  return axios
  .get('./api/dishes/pall-dishes-by-popularity')
  .then(res =>{
    return res
  });
}

export const getPreOrderInfo = () => {
  return axios
  .get('./create-order')
}

export const getSetItems = (set_id) => {
  return axios
  .get('./api/sets/setel/'+set_id)
  .then(res => {
    return res
  });
}

export const delSetById = (set_id) => {
  return axios
  .get('./api/')
}

export const getSets = (user_email) => {
  return axios
  .get('./api/sets/sets-get?user_email='+user_email)
  .then(res => {
    return res
  });
}

export const addSet = (user_id, set_name) => {
  return axios
  .post('./api/sets/create?name='+set_name+'&user_id='+user_id)
}

export const dislikeDish = (id, user_id) => {
  return axios
  .delete('./api/dishes/dislike' + id + '&' + user_id)
  .then(res => {
    return res
  });
}

export const getAvailabilityByDishId = (dish_id) => {
  return axios
  .get('./api/organizations/dish-av-org' + dish_id)
  .then(res => {
    return res
  });
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
