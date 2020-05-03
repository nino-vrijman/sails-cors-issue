function doRequest() {
  fetch('https://tranquil-tundra-49110.herokuapp.com/test')
    .then((response) => {
      console.log({ response });
    })
    .catch((error) => {
      console.log(error);
    });
}

document.getElementById('button').addEventListener('click', doRequest);
