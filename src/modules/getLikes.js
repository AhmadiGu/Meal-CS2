const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kkWXlwzBJImy6CW31Zzh/likes';

const getLikes = async () => {
  const data = await fetch(url);
  const response = await data.json();
  return response;
};

const addLike = async (id) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: +id,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};
export { getLikes, addLike };