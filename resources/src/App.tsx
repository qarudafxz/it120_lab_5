/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect, useCallback, useMemo } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Skeleton from '@chakra-ui/react';
import './index.css';
import Nav from './components/ui/Nav';
import FeaturedCity from './components/ui/FeaturedCity';

interface WeatherInfo {
  weather: any;
  // Your WeatherInfo interface definition
}

const App: FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherInfo | null>(null);
  const [featured, setFeatured] = useState<WeatherInfo | null>(null);

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
            getBackgroundColor(data?.weather?.description);
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

  const getWeather = useCallback(async () => {
    if (!city) {
      toast.error('City is required');
      return;
    }

    await fetchData(city);
  }, [city]);

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

  const getBackgroundColor = (weather: string): string => {
    if (!weather) {
      return '';
    }

    switch (weather) {
      case 'broken clouds':
        return '#bdc3c7';

      case 'clear sky':
        return '#3498db';

      case 'few clouds':
        return '#2980b9';

      case 'light rain':
        return '#34495e';

      case 'overcast clouds':
        return '#2c3e50';
      default:
        return '';
    }
  };

  return (
    <div className="font-main flex flex-col gap-2 pt-5 xxxxs:mx-6 xxxs:mx-7 xxs:mx-20 xs:mx-24 md:mx-32 lg:mx-36">
      <Toaster />
      <Nav />
      <FeaturedCity weather={featured} />
    </div>
  );
};

export default App;
