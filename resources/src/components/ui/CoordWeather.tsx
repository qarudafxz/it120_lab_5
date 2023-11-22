//eslint-disable-next-line
//@ts-nocheck
import { FC } from 'react';
import { FaCloud } from 'react-icons/fa';

const CoordWeather: FC<WeatherInfo> = ({ weather }) => {
  return (
    <div className="md:col-span-2">
      <div className="flex flex-col gap-6">
        <div className="px-4 rounded-[33px] border border-sky-200 p-4 bg-sky-200 bg-opacity-30 shadow-zinc-300 shadow-lg">
          <h1 className="font-bold text-lg text-sky-900 text-center">
            {weather?.weather?.name} Coordinates
          </h1>
          <div className="flex flex-col gap-2 mt-4 text-[13px]">
            <div className="flex gap-2 items-center pb-4 lg:flex-col xl:flex-row">
              <h1 className="font-bold">Longitude:</h1>

              <h1>{weather?.weather?.coord?.lon}</h1>
            </div>
            <div className="border-t-[0.5px] border-sky-200" />
            <div className="flex gap-2 items-center pt-4 lg:flex-col xl:flex-row">
              <h1 className="font-bold">Latitude:</h1>
              {/* eslint-disable-next-line */}
              {/* @ts-ignore */}
              <h1>{weather?.weather?.coord?.lat}</h1>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-[33px] border bg-zinc-900 shadow-zinc-300 shadow-lg text-white text-[13px]">
          <h1 className="text-center font-bold">
            {weather?.weather?.name} Cloud Status
          </h1>
          <h1 className="flex items-center gap-4 mt-4 lg:flex-col xl:flex-row">
            <FaCloud />

            {weather?.weather?.weather![0]?.main}
          </h1>
          <h1 className="flex items-center gap-4">
            <h1> {weather?.weather?.weather![0]?.description}</h1>

            <img
              alt={weather?.weather?.weather![0]?.description}
              src={`https://openweathermap.org/img/wn/${
                weather?.weather?.weather![0]?.icon
              }.png`}
              className="xxxxs:w-8 md:w-16"
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CoordWeather;
