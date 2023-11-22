import { FC } from 'react';

const Authors: FC = () => {
  return (
    <div className="col-span-1 bg-blue-600 rounded-[35px] p-4 border border-blue-800 shadow-blue-900 shadow-2xl">
      <h1 className="text-center font-bold text-white">Authors</h1>
      <div className="flex flex-col text-center mt-10">
        <p className="text-md font-bold text-sky-200">Francis Tin-ao</p>
        <p className="italic text-blue-200 opacity-70">Developer</p>
        <div className="border-t border-sky-200 opacity-50 my-4" />
        <p className="text-md font-bold text-sky-200">Reina Inghug</p>
        <p className="italic text-blue-200 opacity-70">Infomercial</p>
      </div>
    </div>
  );
};

export default Authors;
