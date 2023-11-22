import { FC, useEffect } from 'react';
import { Input, Button } from '@chakra-ui/react';
import { CgSearch } from 'react-icons/cg';

interface Props {
  setCityName: (cityName: string) => void;
  getWeather: (e: React.MouseEvent) => void;
}

const SearchInput: FC<Props> = ({ setCityName, getWeather }) => {
  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        document.getElementById('search-button')?.click();
      }
    };

    document.addEventListener('keydown', handleEnter);
  }, []);

  return (
    <div className="w-3/4 flex justify-center place-self-center relative xxxxs:bottom-6 md:bottom-10">
      <Input
        placeholder="Search City"
        autoFocus
        className="w-3/4 rounded-l-xl border border-zinc-400 focus:outline-none xxxxs:p-2 md:p-4"
        onChange={(e) => setCityName(e.target.value)}
      />
      <Button
        id="search-button"
        colorScheme="blue"
        className="bg-blue-600 pl-3 pr-4 py-2 text-white rounded-r-xl"
        onClick={getWeather}
      >
        <CgSearch size={20} />
      </Button>
    </div>
  );
};

export default SearchInput;
