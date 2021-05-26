const url = 'https://zhekah-promo-backend.herokuapp.com/reviews';

const reviewService = {
  getAll: function getAll() {
    fetch(url)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((e) => console.log(e));
  },
};

export default reviewService;
