/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect, useCallback } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Skeleton from '@chakra-ui/react';
import './index.css';

interface WeatherInfo {
  weather: any;
  // Your WeatherInfo interface definition
}

const App: FC = () => {
  const [city, setCity] = useState('');

  const [weather, setWeather] = useState<WeatherInfo | null>(null);

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

    setWeather(data);
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
    <div>
      <Toaster />
    </div>
  );
};

export default App;
