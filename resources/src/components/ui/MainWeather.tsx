//eslint-disable-next-line
//@ts-nocheck
import { MdFlag } from 'react-icons/md';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from 'react-icons/fa6';
import { WiHumidity, WiDayCloudyGusts } from 'react-icons/wi';
import { FaWater } from 'react-icons/fa';
import { Tooltip } from '@chakra-ui/react';
import { GiWeight } from 'react-icons/gi';
import { SlSpeedometer } from 'react-icons/sl';
import { MdRotate90DegreesCcw } from 'react-icons/md';

const MainWeather: FC<WeatherInfo> = ({ weather }) => {
  return (
    <div className="col-span-4 border bg-zinc-100 border-zinc-300 rounded-[40px] p-5 shadow-zinc-300 shadow-xl">
      <div className="flex xxxxs:flex-col gap-2 md:flex-row md:justify-between">
        <h1 className="font-bold xxxxs:text-3xl md:text-4xl">
          {weather?.weather?.name}{' '}
          {!weather?.weather?.name.includes('City') && 'City'}
        </h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </h1>
          <div className="flex gap-2 items-center">
            <h1 className="flex gap-2 items-center text-md">
              <FiSunrise className="text-orange-500" />
              {/* eslint-disable-next-line */}
              {/* @ts-ignore */}
              {new Date(weather?.weather?.sys?.sunrise * 1000)
                .toLocaleTimeString()
                .slice(0, 7)}{' '}
              A.M.
            </h1>
            <h1 className="flex gap-2 items-center text-md">
              <FiSunset className="text-purple-500" />
              {/* eslint-disable-next-line */}
              {/* @ts-ignore */}
              {new Date(weather?.weather?.sys?.sunset * 1000)
                .toLocaleTimeString()
                .slice(0, 7)}{' '}
              P.M.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="flex gap-2 items-center">
          <MdFlag /> {weather?.weather?.sys?.country}
        </h1>
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-col gap2">
            <h1 className="font-bold text-black flex items-center gap-2 xxxxs:text-5xl mt-6 md:text-[70px] md:mt-10">
              {/* eslint-disable-next-line */}
              {/* @ts-ignore */}
              {weather?.weather?.main?.temp &&
              weather?.weather?.main?.temp > 30 ? (
                <FaTemperatureArrowUp size={30} className="text-red-600" />
              ) : (
                <FaTemperatureArrowDown size={30} className="text-blue-600" />
              )}
              {/* eslint-disable-next-line */}
              {/* @ts-ignore */}
              {weather?.weather?.main?.temp}°C
            </h1>
            <p>In Celcius</p>
          </div>
          <div className="flex flex-col gap-1">
            <Tooltip label="Sea Level" placement="auto-start">
              <h1 className="flex gap-2 items-center xxxxs:text-xl md:text-2xl">
                <FaWater size={35} className="text-blue-400" />
                {/* eslint-disable-next-line */}
                {/* @ts-ignore */}
                {weather?.weather?.main?.sea_level}
              </h1>
            </Tooltip>
            <Tooltip label="Humidity" placement="auto-start">
              <h1 className="flex gap-2 items-center xxxxs:text-xl md:text-2xl">
                <WiHumidity size={50} className="text-blue-400" />
                {/* eslint-disable-next-line */}
                {/* @ts-ignore */}
                {weather?.weather?.main?.humidity}%
              </h1>
            </Tooltip>
            <Tooltip label="Pressure" placement="auto-start">
              <h1 className="flex gap-2 items-center xxxxs:text-xl md:text-2xl">
                <GiWeight size={45} className="text-blue-400" />
                {/* eslint-disable-next-line */}
                {/* @ts-ignore */}
                {weather?.weather?.main?.pressure}
              </h1>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <h1>Wind Data</h1>
        <div className="border-t-[0.5px] border-zinc-600 w-[280px] mx-4" />
        <div className="flex gap-2 items-center">
          <Tooltip label="Wind Speed" placement="bottom">
            <h1 className="flex gap-2 items-center xxxxs:text-sm md:text-md">
              <SlSpeedometer size={18} className="text-blue-400" />
              {/* eslint-disable-next-line */}
              {/* @ts-ignore */}
              {weather?.weather?.wind?.speed} m/s
            </h1>
          </Tooltip>
          <Tooltip label="Degree" placement="bottom">
            <h1 className="flex gap-2 items-center xxxxs:text-sm md:text-md">
              <MdRotate90DegreesCcw size={18} className="text-blue-400" />
              {/* eslint-disable-next-line */}
              {/* @ts-ignore */}
              {weather?.weather?.wind?.deg} deg
            </h1>
          </Tooltip>
          <Tooltip label="Gust" placement="bottom">
            <h1 className="flex gap-2 items-center xxxxs:text-sm md:text-md">
              <WiDayCloudyGusts size={18} className="text-blue-400" />
              {/* eslint-disable-next-line */}
              {/* @ts-ignore */}
              {weather?.weather?.wind?.gust}
            </h1>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default MainWeather;
