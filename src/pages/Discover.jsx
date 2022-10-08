import { useSelector } from 'react-redux';
import { genres } from '../assets/constant';
import { Loader, Songcard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCoreApi';

export const Discover = () => {
  const { data, isFetching } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.musicPlayer);

  return (
    <>
      {isFetching ? (
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
            {data?.map((song, i) => (
              <Songcard
                key={song.key}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                index={i}
                data={data}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
