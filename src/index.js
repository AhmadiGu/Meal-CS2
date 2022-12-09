import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { addLike } from './modules/getLikes.js';
import getLists from './modules/showAllData.js';

getLists();

const likeEventListener = (e) => {
  const likeCounter = e.target.previousElementSibling;
  const id = +e.target.dataset.id;
  const counter = +likeCounter.innerText;
  likeCounter.innerText = counter + 1;
  addLike(id);
};

const like = document.querySelectorAll('.like-button');

like.forEach((item) => {
  item.addEventListener('click', (e) => likeEventListener(e));
});
