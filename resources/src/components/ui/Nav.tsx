import { FC } from 'react';
import { TiWeatherWindyCloudy } from 'react-icons/ti';
import me from '@/assets/me.png';
import { Tooltip } from '@chakra-ui/react';

const Nav: FC = () => {
  return (
    <div className="py-2 flex justify-between items-center">
      <TiWeatherWindyCloudy size={35} className="text-blue-500" />
      <Tooltip hasArrow label="Francis Tin-ao | Coderist">
        <img
          src={me}
          alt="Creator"
          className="bg-blue-500 font-main p-2 rounded-full xxxxs:w-8"
        />
      </Tooltip>
    </div>
  );
};

export default Nav;
