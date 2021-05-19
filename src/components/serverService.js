function serverService() {
  this.get = function (url) {
    fetch(url)
      .then((response) => response.json())
      .then((result) => console.log(result));
  };
}

export default serverService;
