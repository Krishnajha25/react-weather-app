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
    appid : "1b2c55e03f592c967fa1eda2eae07ef4"
  }

  // headers = {
  //   "Retry-After": 3600
  // }

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
      const date = new Date().toLocaleDateString().split("/");
      const newDate = [date[2], date[1], date[0]].join("-");
      
      this.setState({
        weatherData : res.data,
        selectedDay: newDate
      });
    })
    .catch(error => console.log(error));
 
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.positionCoord === null && this.state.positionCoord !==null){
      axios.get("https://api.openweathermap.org/data/2.5/forecast?lat=" + this.state.positionCoord.lat + "&lon=" + this.state.positionCoord.lon + "&appid=" + this.state.appid + "&units=metric")
      .then(res=> {
        const date = new Date().toLocaleDateString().split("/");
        const newDate = [date[2], date[1], date[0]].join("-");

        this.setState({
          weatherData : res.data,
          selectedDay: newDate
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
      showSuggestion : value.length > 0
    },);
  }


  submitSearchHanlder = (cityName, stateName) => {

    this.setState({search: cityName + ", " + stateName});

    axios.get("https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + this.state.appid + "&units=metric")
      .then(res=> {
        const date = new Date().toLocaleDateString().split("/");
        const newDate = [date[2], date[1], date[0]].join("-");
        
        this.setState({
          weatherData : res.data,
          selectedDay: newDate,
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
      console.log(this.state.weatherData);
      console.log(this.state.selectedDay);
      
      const list = this.state.weatherData["list"];
      const days = [3, 11, 19, 27, 35];
      for(let day of days){
        hoursArray.push({
          date: list[day].dt_txt,
          maxTemp : list[day].main.temp_max,
          currTemp : list[day].main.temp,
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
        <Header appid={this.state.appid} show={this.state.showSuggestion} submit={this.submitSearchHanlder} search={this.state.search} searchHandler={this.searchHandler} />
        {this.state.showSuggestion && <div className='overlay' onClick={()=> this.setState({showSuggestion : false})} ></div>}
        {hours}
        {card}
      </div>
    );
  }
}

export default App;
