import { FC } from 'react';
import bg from '@/assets/bg.jpeg';
import { MdFlag } from 'react-icons/md';
import { TbWorldLongitude, TbWorldLatitude } from 'react-icons/tb';
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from 'react-icons/fa6';

const FeaturedCity: FC<{ weather: WeatherInfo | null }> = ({ weather }) => {
  return (
    <div
      className="rounded-[40px] opacity-90 xxxxs:h-[450px] mt-20"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top-right',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="p-8 flex flex-col items-start">
        <div className="flex flex-end justify-end w-full">
          <h1 className="bg-white text-blue-950 p-4 font-extrabold rounded-md">
            Featured City
          </h1>
        </div>
        {weather?.weather?.weather![0]?.icon && (
          <img
            alt={weather?.weather?.weather![0]?.description}
            src={`https://openweathermap.org/img/wn/${
              weather?.weather?.weather![0]?.icon
            }.png`}
            className="xxxxs:w-8 md:w-16"
          />
        )}
        <h1 className="font-bold text-white text-2xl xs:text-4xl md:text-5xl lg:text-6xl">
          {weather?.weather?.name} {weather && 'City'}
        </h1>
        <p className="text-zinc-400">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        <div className="flex items-left gap-4 text-white xxxxs:flex-col md:flex-row mt-4">
          <h1 className="flex gap-2 items-center">
            <MdFlag /> {weather?.weather?.sys?.country}
          </h1>
          <h1 className="flex gap-2 items-center">
            <TbWorldLongitude /> {weather?.weather?.coord?.lon}
          </h1>
          <h1 className="flex gap-2 items-center">
            <TbWorldLatitude /> {weather?.weather?.coord?.lat}
          </h1>
        </div>
        <div className="bg-white bg-opacity-40 p-2 flex gap-2 items-center mt-8 rounded-md">
          <h1 className="font-bold text-black flex items-center gap-2">
            {weather?.weather?.main?.temp &&
            weather?.weather?.main?.temp > 30 ? (
              <FaTemperatureArrowUp size={30} className="text-red-200" />
            ) : (
              <FaTemperatureArrowDown size={30} className="text-blue-200" />
            )}
            {weather?.weather?.main?.temp}°C
          </h1>
          <h1 className="font-bold text-black">
            {weather?.weather?.weather![0]?.description}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCity;
