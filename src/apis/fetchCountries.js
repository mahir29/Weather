const HEADERS = {
  Accept: "application/json",
};

export const fetchCountriesApi = () => {
    return new Promise(function (resolve, reject) {
      const url = "https://countriesnow.space/api/v0.1/countries";
      const options = {
        method: "GET",
        headers: HEADERS,
      };
      fetch(url, options)
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => console.log(error));
    });
  };