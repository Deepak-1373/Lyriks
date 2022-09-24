import React from 'react';

export const Track = ({ isPlaying, isActive, activeSong }) => {
  return (
    <div className='flex-1 flex items-center justify-start'>
      <div
        className={`${
          isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''
        } hidden sm:block h-16 w-16 mr-4`}
      >
        <img
          className='rounded-full'
          src={activeSong?.images?.coverart}
          alt='cover art'
        />
      </div>
      <div className='w-[50%]'>
        <p className='truncate text-white font-bold text-lg'>
          {activeSong?.title ? activeSong?.title : 'No active song'}
        </p>
        <p className='truncate text-gray-300'>
          {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
        </p>
      </div>
    </div>
  );
};
