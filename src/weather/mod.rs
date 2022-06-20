
use std::error::Error;

use serde::Deserialize;


#[derive(Deserialize, Debug)]
struct wloc{
    name:String,
    region:String,
}

#[derive(Deserialize, Debug)]
struct wcond{
    text:String,
    icon:String,
}

#[derive(Deserialize, Debug)]
struct wcur{
    temp_c : f32,
    temp_f : f32,
    condition: wcond,
    wind_mph: f32,
    wind_kph: f32,
    wind_dir: String,
    wind_degree:f32,
    humidity:f32,
}



#[derive(Deserialize, Debug)]
pub struct Weather{
    location : wloc,
    current: wcur,
}


//apikey 
pub fn get_weatherinfo(apikey : &str, zipcode: &str) -> Result<Weather, Box<dyn Error>> {
    let url: String = format!("https://api.weatherapi.com/v1/current.json?key={apikey}&q={zipcode}&aqi=no");
    let response = ureq::get(&url).call()?.into_string()?;
    let weather: Weather = serde_json::from_str(&response)?;
    Ok(weather)
}


