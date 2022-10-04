import React from 'react';
import { Link } from 'react-router-dom';
import { usePlayer } from '../context/playerContext';
import { PlayPause } from './PlayPause';

export const Songcard = ({ song, isPlaying, activeSong, i, data }) => {
  const { playerDispatch } = usePlayer();

  const handlePauseClick = () => {
    playerDispatch({
      type: 'playPause',
      payload: false,
    });
  };

  const handlePlayClick = () => {
    playerDispatch({
      type: 'setActiveSong',
      payload: {
        song,
        data,
        i,
      },
    });
    playerDispatch({
      type: 'playPause',
      payload: true,
    });
  };
  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-50 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
      <div className='relative w-full h-56 group'>
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? 'flex bg-black bg-opacity-60'
              : 'hidden'
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={song.images?.coverart} alt='song_img' />
      </div>
      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-lg text-white truncate'>
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className='text-sm truncate text-gray-300 mt-1'>
          <Link
            to={
              song.artist
                ? `/artists/${song?.artist[0]?.adamid}`
                : '/top-artists'
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};
