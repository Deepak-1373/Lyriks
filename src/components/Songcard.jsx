import React from 'react';
import { Link } from 'react-router-dom';

export const Songcard = ({ song, i }) => {
  const activeSong = 'Test';
  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-50 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
      <div className='relative w-full h-56 group'>
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? 'flex bg-black bg-opacity-60'
              : 'hidden'
          }`}
        ></div>
      </div>
    </div>
  );
};
