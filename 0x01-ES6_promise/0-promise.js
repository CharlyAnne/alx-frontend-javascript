function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "true";
      resolve(data);
    }, 2000);
  });
}

export default getResponseFromAPI;
