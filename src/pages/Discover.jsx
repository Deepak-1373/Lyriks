import React, { useEffect, useState } from 'react';
import { genres } from '../assets/constant';
import { Loader, Songcard } from '../components';
import { getTopCharts } from '../features/shazamCoreApi';
import { usePlayer } from '../context/playerContext';

export const Discover = () => {
  const { activeSong, isPlaying } = usePlayer();
  const [chartData, setChartData] = useState({
    isLoading: true,
    data: [],
  });

  useEffect(() => {
    try {
      getTopCharts.then((res) =>
        setChartData((prev) => ({ ...prev, isLoading: false, data: res.data }))
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {chartData.isLoading ? (
        <Loader title='Loading Songs...' />
      ) : (
        <div className='flex flex-col'>
          <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
            <h2 className='font-bold text-3xl text-white text-left'>
              Discover
            </h2>
            <select
              onChange={() => {}}
              value=''
              className='bg-black text-gray-300 p-3 t-xm rounded-lg outline-none sm:mt-0 mt-5'
            >
              {genres.map(({ title, value }) => (
                <option key={value} value={value}>
                  {title}
                </option>
              ))}
            </select>
          </div>

          <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {chartData.data.map((song, i) => (
              <Songcard
                key={song.key}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                index={i}
                data={chartData.data}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
