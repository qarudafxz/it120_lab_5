import { FC } from 'react';
import bg from '@/assets/bg.jpeg';
import { MdFlag } from 'react-icons/md';
import { TbWorldLongitude, TbWorldLatitude } from 'react-icons/tb';

const FeaturedCity: FC<{ weather: WeatherInfo | null }> = ({ weather }) => {
  return (
    <div
      className="rounded-xl opacity-90 xxxxs:h-[450px] mt-8"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top-right',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="p-8 flex flex-col items-start">
        <img
          alt={weather?.weather?.weather![0]?.description}
          src={`https://openweathermap.org/img/wn/${
            weather?.weather?.weather![0]?.icon
          }.png`}
          className="xxxxs:w-8 md:w-16"
        />
        <h1 className="font-bold text-white text-2xl xs:text-4xl md:text-5xl lg:text-6xl">
          {weather?.weather?.name} {weather && 'City'}
        </h1>
        <div className="flex items-center gap-4 text-white xxxxs:flex-col md:flex-row mt-4">
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
      </div>
    </div>
  );
};

export default FeaturedCity;
