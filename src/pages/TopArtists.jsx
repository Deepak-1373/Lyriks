import { Loader, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCoreApi';

export const TopArtists = () => {
  const { data, isFetching } = useGetTopChartsQuery();

  if (isFetching) return <Loader title='Loading top charts' />;
  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-2xl text-white text-left mt-4 mb-10'>
        Top Artists
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} ArtistCard />
        ))}
      </div>
    </div>
  );
};
