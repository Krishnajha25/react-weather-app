import React, {Component} from "react";
import './App.css';
import axios from "axios";
import Header from './components/Header/Header'
import Hours from './components/Hours/Hours'
import Card from './components/Card/Card'

class App extends Component{

  state = {
    positionCoord : null,
    weatherData : null,
    selectedDay : null,
    search: "",
    showSuggestion: false,
    appid : "e29e8581dafca8c0d5dfaceebb8fe05a"
  }

  componentDidMount = () => {
     
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        positionCoord : {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
      });
    });

    let latitude = 19.0760;
    let longitude = 72.8777;

    if(this.state.positionCoord){
      latitude = this.state.positionCoord.lat;
      longitude = this.state.positionCoord.lon;
    }

    axios.get("https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + this.state.appid + "&units=metric")
    .then(res=> {
      const selectedDay = res.data["list"][0].dt_txt.substring(0, 10);
      // console.log(res)
      this.setState({
        weatherData : res.data,
        selectedDay: selectedDay
      });
    })
    .catch(error => console.log(error));
 
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.positionCoord === null && this.state.positionCoord !==null){
      axios.get("https://api.openweathermap.org/data/2.5/forecast?lat=" + this.state.positionCoord.lat + "&lon=" + this.state.positionCoord.lon + "&appid=" + this.state.appid + "&units=metric")
      .then(res=> {
        const selectedDay = res.data["list"][0].dt_txt.substring(0, 10);
        // console.log(res)
        this.setState({
          weatherData : res.data,
          selectedDay: selectedDay
        });
      })
      .catch(error => console.log(error));
    }
  }

  dateSelectHandler = (selectedDate) => {
    this.setState({
      selectedDay : selectedDate
    });
  }

  searchHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name] : value,
      showSuggestion : true
    },);
  }

  submitSearchHanlder = (cityName, stateName) => {

    this.setState({search: cityName + ", " + stateName});

    axios.get("https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + this.state.appid + "&units=metric")
      .then(res=> {
        const selectedDay = res.data["list"][0].dt_txt.substring(0, 10);
        console.log(res)
        this.setState({
          weatherData : res.data,
          selectedDay: selectedDay,
          showSuggestion : false
        });
      })
      .catch(error => console.log(error));
  }

  render(){

    let hours = null;
    let card = null;

    let hoursArray = [];
    if(this.state.weatherData && this.state.selectedDay){
      const list = this.state.weatherData["list"];
      const days = [0, 8, 16, 24, 32];
      for(let day of days){
        hoursArray.push({
          date: list[day].dt_txt,
          maxTemp : list[day].main.temp_max,
          minTemp : list[day].main.temp_min,
          weatherTypeIcon : list[day].weather[0].icon,
          weatherType : list[day].weather[0].description
        });
      }
      hours = <Hours hoursArray={hoursArray} selectDay={this.dateSelectHandler} />

      

      const dayInfo = list.filter(hourInfo => (
        hourInfo.dt_txt.substring(0, 10) === this.state.selectedDay
      ));
      card = <Card dayInfo={dayInfo} sunrise={this.state.weatherData.city.sunrise} sunset={this.state.weatherData.city.sunset} />
    }

    return (    
      <div className="container">
        <Header show={this.state.showSuggestion} submit={this.submitSearchHanlder} search={this.state.search} searchHandler={this.searchHandler} />
        {hours}
        {card}
      </div>
    );
  }
}

export default App;
