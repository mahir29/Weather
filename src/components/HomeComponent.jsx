import React, { useEffect, useState } from "react";
import { fetchCountriesApi } from "../apis/fetchCountries";
import { fetchWeatherApi } from "../apis/fetchWeather";
import { Autocomplete, TextField } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Home = () => {
  const [name,setName]=useState([]);
  const [country,setCountry]=useState("");
  const [data,setData]=useState({});

  useEffect(() => {
    // eslint-disable-next-line
    fetchCountriesApi().then(data=>{
        const temp=data.data.map(option=>option.country);
        setName(temp);
    })
  }, []);

  useEffect(()=>{
    fetchWeatherApi({country:country}).then(data=>{
        setData(data);
        console.log(data);
    })
  },[country]);

  return (
    <>
      <Autocomplete
            disableClearable
            size="small"
            isOptionEqualToValue={(option, value) => option === value}
            options={name?name:[]}
            getOptionLabel={(option) => option}
            sx={{ m: 1, minWidth: 200 }}
            onChange={(event, val) => {
              setCountry(val);
            }}
            renderInput={(params) => <TextField {...params} label="Countries" />}
        />
        <CardContent>
          <Typography variant="h5" component="div">
             Temperature : {data.main.temp}
          </Typography>
          <Typography variant="h5" component="div">
           Humidity : {data.main.humidity}
          </Typography>
          <Typography variant="h5" component="div">
             Wind Speed : {data.wind.speed}
          </Typography>
          <Typography variant="h5" component="div">
             Wind Degree : {data.wind.deg}
          </Typography>
          <Typography variant="h5" component="div">
             Wind Gust : {data.wind.gust}
          </Typography>
        </CardContent>
    </>
  );
};

export default Home;