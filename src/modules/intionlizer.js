import { getLikes } from './getLikes.js';
import getData from './getData.js';

const listMealMenus = await getData();
const like = await getLikes();

export { like, listMealMenus };