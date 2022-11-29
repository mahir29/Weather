const HEADERS = {
    Accept: "application/json",
  };
  
  export const fetchWeatherApi = ({country}) => {
      return new Promise(function (resolve, reject) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=b6c4f289089c30aa3e4280d0e15d7fd8`;
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