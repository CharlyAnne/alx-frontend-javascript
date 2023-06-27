export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      console.log(error);
      return new Error();
    })
    .finally(() => {
      return('Got a response from the API');
    });
}
