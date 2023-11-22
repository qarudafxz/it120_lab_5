import { FC } from 'react';

const CoordWeather: FC<WeatherInfo> = ({ weather }) => {
  return (
    <div className="md:col-span-1">
      <div className="flex flex-col gap-6">
        {/* Coord card */}
        <div className="px-4 rounded-[33px] border border-sky-200 p-4 bg-sky-200 bg-opacity-30 shadow-zinc-300 shadow-lg">
          <h1 className="font-bold text-lg text-sky-900 text-center">
            {/* eslint-disable-next-line */}
            {/* @ts-ignore */}
            {weather?.weather?.name} {weather && 'City'} Coordinates
          </h1>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-2 items-center pb-4">
              <h1 className="font-bold">Longitude:</h1>
              {/* eslint-disable-next-line */}
              {/* @ts-ignore */}
              <h1>{weather?.weather?.coord?.lon}</h1>
            </div>
            <div className="border-t-[0.5px] border-sky-200" />
            <div className="flex gap-2 items-center pt-4">
              <h1 className="font-bold">Latitude:</h1>
              {/* eslint-disable-next-line */}
              {/* @ts-ignore */}
              <h1>{weather?.weather?.coord?.lat}</h1>
            </div>
          </div>
        </div>
        <div className="px-4 rounded-[33px] border border-sky-200 p-4 bg-sky-200 bg-opacity-30 shadow-zinc-300 shadow-lg">
          {/* eslint-disable-next-line */}
          {/* @ts-ignore */}
          {weather?.weather?.name} {weather && 'City'} Weather Data
        </div>
      </div>
    </div>
  );
};

export default CoordWeather;
