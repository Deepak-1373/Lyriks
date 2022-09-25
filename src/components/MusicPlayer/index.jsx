import React, { useEffect, useState } from 'react';
import { Controls } from './Controls';
import { Player } from './Player';
import { Seekbar } from './Seekbar';
import { Track } from './Track';
import { VolumeBar } from './VolumeBar';
import { usePlayer } from '../../context/playerContext';

export const MusicPlayer = () => {
  const {
    activeSong,
    currentSongs,
    currentIndex,
    isActive,
    isPlaying,
    playerDispatch,
  } = usePlayer();
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  useEffect(() => {
    if (currentSongs.length) {
      playerDispatch({
        type: 'playPause',
        payload: true,
      });
    }
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      playerDispatch({
        type: 'playPause',
        payload: false,
      });
    } else {
      playerDispatch({
        type: 'playPause',
        payload: true,
      });
    }
  };

  const handleNextSong = () => {
    playerDispatch({
      type: 'playPause',
      payload: false,
    });

    if (!shuffle) {
      playerDispatch({
        type: 'nextSong',
        payload: (currentIndex + 1) % currentSongs.length,
      });
    } else {
      playerDispatch({
        type: 'nextSong',
        payload: Math.floor(Math.random() * currentSongs.length),
      });
    }
  };

  const handlePrevSong = () => {
    if (currentIndex == 0) {
      playerDispatch({
        type: 'prevSong',
        payload: currentIndex - 1,
      });
    } else if (shuffle) {
      playerDispatch({
        type: 'prevSong',
        payload: Math.floor(Math.random() * currentSongs.length),
      });
    } else {
      playerDispatch({
        type: 'prevSong',
        payload: currentIndex - 1,
      });
    }
  };

  return (
    <div className='relative sm:px-12 px-8 w-full flex items-center justify-between'>
      <Track
        isPlaying={isPlaying}
        isActive={isActive}
        activeSong={activeSong}
      />
      <div className='flex-1 flex flex-col items-center justify-center'>
        <Controls
          isPlaying={isPlaying}
          isActive={isActive}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Seekbar
          value={appTime}
          min='0'
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          currentIndex={currentIndex}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
      <VolumeBar
        value={volume}
        min='0'
        max='1'
        onChange={(event) => setVolume(event.target.value)}
        setVolume={setVolume}
      />
    </div>
  );
};
