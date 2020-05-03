function doRequest() {
  const baseURL = document.getElementById('baseURL').value;
  fetch(`${baseURL}/test`)
    .then((response) => {
      console.log({ response });
    })
    .catch((error) => {
      console.log(error);
    });
}

document.getElementById('button').addEventListener('click', doRequest);
