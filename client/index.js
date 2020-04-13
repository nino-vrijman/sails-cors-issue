function doRequest() {
  fetch('http://localhost:1337/test')
    .then((response) => {
      console.log({ response });
    })
    .catch((error) => {
      console.log(error);
    });
}

document.getElementById('button').addEventListener('click', doRequest);
