import { useSelector } from 'react-redux';
import { Loader, Songcard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCoreApi';

export const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.musicPlayer);
  const { data, isFetching } = useGetTopChartsQuery();

  if (isFetching) return <Loader title='Loading top charts' />;
  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-2xl text-white text-left mt-4 mb-10'>
        Discover Top Charts
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.map((song, i) => (
          <Songcard
            key={song.key}
            song={song}
            i={i}
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </div>
    </div>
  );
};
