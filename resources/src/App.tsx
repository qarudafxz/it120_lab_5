/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect, useCallback, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './index.css';
import { Nav, FeaturedCity, SearchInput, CoordWeather } from './components/ui';

interface WeatherInfo {
  weather: any;
  // Your WeatherInfo interface definition
}

const App: FC = () => {
  const [city, setCity] = useState('');
  const [_, setWeather] = useState<WeatherInfo | null>(null);
  const [searchedWeather, setSearchedWeather] = useState<WeatherInfo | null>(
    null
  );
  const [featured, setFeatured] = useState<WeatherInfo | null>(null);
  const [bgColor, setBgColor] = useState<string>('#FFFFFF');
  const resultRef = useRef<HTMLDivElement>(null);

  const fetchData = async (cityName: string): Promise<WeatherInfo | null> => {
    const city = cityName.toLowerCase().replace(' city', '');

    try {
      return await toast.promise(
        fetch(`http://127.0.0.1:8000/api/weather/${city}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        }).then(async (response) => {
          if (!response.ok) {
            throw new Error('Something went wrong');
          }

          const data = await response.json();
          return data;
        }),
        {
          loading: `Getting weather data of ${cityName}`,
          success: (data: WeatherInfo) => {
            setWeather(data);
            getBackgroundColor(data?.weather?.weather![0]?.description);
            return 'Success getting weather data of ' + cityName;
          },
          error: (err: Error) => {
            console.error(err);
            return (
              'Error getting weather data of ' +
              cityName +
              '. Please try again.'
            );
          }
        }
      );
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const getWeather = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      if (!city) {
        toast.error('City is required');
        return;
      }

      const data = await fetchData(city);

      if (!data) {
        return;
      }

      setSearchedWeather(data);
      if (resultRef?.current)
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    },
    [city]
  );

  const featuredWeather = async (cityName: string) => {
    const data = await fetchData(cityName);

    if (!data) {
      return;
    }

    setFeatured(data);
  };

  useEffect(() => {
    featuredWeather('Butuan City');
  }, []);

  const getBackgroundColor = (weather: string) => {
    if (!weather) {
      return '';
    }

    switch (weather) {
      case 'broken clouds':
        setBgColor('#bdc3c7');
        break;

      case 'clear sky':
        setBgColor('#3498db');
        break;

      case 'few clouds':
        setBgColor('#2980b9');
        break;

      case 'light rain':
        setBgColor('#95a5a6');
        break;

      case 'overcast clouds':
        setBgColor('#7f8c8d');
        break;
      default:
        return '';
    }
  };

  return (
    <div
      className={`bg-[${bgColor}] font-main flex flex-col gap-2 pt-5 xxxxs:mx-6 xxxs:mx-7 xxs:mx-20 xs:mx-24 md:mx-32 lg:mx-36`}
    >
      <Toaster />
      <Nav />
      <FeaturedCity weather={featured} />
      <SearchInput setCityName={setCity} getWeather={getWeather} />
      <div
        ref={resultRef}
        id="result"
        className="pb-10 xxxxs:flex flex-col md:grid grid-cols-5"
      >
        {searchedWeather && <CoordWeather weather={searchedWeather} />}
      </div>
    </div>
  );
};

export default App;
