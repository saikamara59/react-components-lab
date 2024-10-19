import WeatherIcon from './WeatherIcon'; 
import WeatherData from './WeatherData';

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
    return (
        <div className="weather">
            <WeatherData day={day} conditions={conditions} time={time} /> {/* Render WeatherData */}
            <WeatherIcon img={img} alt={imgAlt} /> {/* Render WeatherIcon */}
        </div>
    );
};

export default WeatherForecast;

