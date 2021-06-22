const URL = 'https://zhekah-promo-backend.herokuapp.com/reviews';

const reviewService = {
  getAll: function getAll() {
    return fetch(URL).then((response) => {
      if (!response.ok) {
        throw Error('OUUPS!!! Cannot fetch data from the resource!');
      }
      return response.json();
    });
  },
};

export default reviewService;
