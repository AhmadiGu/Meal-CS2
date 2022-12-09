import mealListDisplay from './showMealsData.js';
import itemCounter from './itemsConter.js';
import { like, listMealMenus } from './intionlizer.js';

const displayLikes = (id) => {
  const likeItem = like.find((item) => +item.item_id === +id);

  return likeItem?.likes ?? 0;
};

const getLists = () => {
  listMealMenus.categories.forEach((meal) => {
    const like = displayLikes(meal.idCategory);
    mealListDisplay(meal, like);
  });

  const items = document.querySelector('.items');
  items.innerText = itemCounter(document.querySelector('.container'));
};

export default getLists;