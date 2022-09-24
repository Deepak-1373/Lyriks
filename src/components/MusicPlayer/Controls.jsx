import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from 'react-icons/bs';

export const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => {
  return (
    <div className='flex items-center justify-around md:w-36 lg:w-52 2xl:w-80'>
      <BsArrowRepeat
        className='hidden sm:block cursor-pointer'
        size={20}
        color={repeat ? 'red' : 'white'}
        onClick={() => setRepeat((prev) => !prev)}
      />
      {currentSongs?.length && (
        <MdSkipPrevious
          className='cursor-pointer'
          size={30}
          color='#fff'
          onClick={handlePrevSong}
        />
      )}
      {isPlaying ? (
        <BsFillPauseFill
          className='cursor-pointer'
          size={45}
          color='#FFF'
          onClick={handlePlayPause}
        />
      ) : (
        <BsFillPlayFill
          className='cursor-pointer'
          size={45}
          color='#FFF'
          onClick={handlePlayPause}
        />
      )}
      {currentSongs?.length && (
        <MdSkipNext
          size={30}
          color='#FFF'
          className='cursor-pointer'
          onClick={handleNextSong}
        />
      )}
      <BsShuffle
        size={20}
        color={shuffle ? 'red' : 'white'}
        onClick={() => setShuffle((prev) => !prev)}
        className='hidden sm:block cursor-pointer'
      />
    </div>
  );
};
