const mealListDisplay = (meal, like) => {
  const container = document.querySelector('.container');
  const div = document.createElement('div');
  div.setAttribute('data-id', meal.idCategory);
  div.innerHTML = `
    <div class="meal-card">
    <div class="img-of-meal"><img src="${meal.strCategoryThumb}" alt="meal img"></div>
    <div class="meal-title-name">
    <div class="meal-title"><h3>${meal.strCategory}</h3></div>
    <div class="likes-display">
    <div class="like-counter">${like} </div>
    <button data-id="${meal.idCategory}" type="button" class="bi bi-heart-fill love-icon like-button"></button> <p> Likes</p>  

    </div>
    <div class="comment-display"> 
    <button type="button" class="comment-Button bi bi-chat-fill" id="comment-button"></button><span>Comment</span>
    </div> 
    </div>
   </div>`;

  container.appendChild(div);
};

export default mealListDisplay;