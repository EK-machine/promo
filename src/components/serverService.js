const URL = 'https://zhekah-promo-backend.herokuapp.com/reviews';

const reviewService = {
  getAll: function getAll() {
    return fetch(URL)
      .then((response) => response.json())
      .catch((e) => console.log(e));
  },
};

export default reviewService;
