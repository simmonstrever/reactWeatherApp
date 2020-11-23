// here we destructure useState and useEffect from React to give us state/lifecycle functionality!
import React, { useState, useEffect } from "react";
import moment from "moment";
import { Row, Col } from "reactstrap";
import { Wrapper } from "./styles";
import API from "./utils/API";
import SearchForm from "./components/SearchForm";
import DayCard from "./components/DayCard";
import DayDetails from "./components/DayDetails";

const App = () => {
    const [data, setData] = useState({
        searchTerm: "",
        selectedDay: null,
        location: "",
        days: []
    });
    const { searchTerm, selectedDay, location, days } = data;

    useEffect(() => {
        getWeather();
    }, []);

    useEffect(() => {
        document.title = `${location ? "Weather Info for " + location : "Find weather by location"}`;
    }, [location]);


    const getWeather = location => {
        if (!location) {
            return alert("Enter a location to get weather data!");
        }

        API.getWeather(location)
            .then(res => {
                if (!res) return;
                setData({
                    searchTerm: "",
                    selectedDay: null,
                    location: `${res.data.city_name}, ${res.data.state_code}`,
                    days: res.data.data
                });
            })
            .catch(err => console.log(err));
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        getWeather(searchTerm);
    }

    return (
        <Wrapper>
            <Row>
                <Col md={7}>
                    <h1>{location
                        ? "Weather Info for " + location + ":"
                        : "Search by Location:"}
                    </h1>
                </Col>
                <Col md={5}>
                    <SearchForm
                        searchTerm={searchTerm}
                        handleInputChange={handleInputChange}
                        handleFormSubmit={handleFormSubmit}
                    />
                </Col>
            </Row>
            <Row>
                {days.length ? (
                    <>
                        {days.map(day => (
                            <DayCard
                                key={day.ts}
                                day={moment(day.valid_date, "YYYY-MM-DD").format("dddd")}
                                temp={day.temp}
                                high={day.high_temp}
                                low={day.low_temp}
                                icon={day.weather.icon}
                                description={day.weather.description}
                                precip={day.pop}
                                isSelected={day === selectedDay}
                                selectDay={() => setData({ ...data, selectedDay: day })}
                            />
                        ))}
                    </>
                ) : (
                    <div className="d-flex loading-spinner">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
            </Row>
            <Row>
                <Col>
                    {selectedDay ? (
                        <DayDetails
                            day={moment(selectedDay.valid_date, "YYYY-MM-DD").format("dddd, MMMM Do, YYYY")}
                            temp={selectedDay.temp}
                            high={selectedDay.high_temp}
                            appHigh={selectedDay.app_max_temp}
                            low={selectedDay.low_temp}
                            appLow={selectedDay.app_min_temp}
                            icon={selectedDay.weather.icon}
                            description={selectedDay.weather.description}
                            precip={selectedDay.pop}
                            humidity={selectedDay.rh}
                            windSpeed={selectedDay.wind_spd}
                            windDir={selectedDay.wind_cdir_full}
                        />
                    ) : (
                    <h3>{days.length ? "Click on a day above to view details!" : null}</h3>
                    )}
                </Col>
            </Row>
        </Wrapper>
    );
}

export default App;