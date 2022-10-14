import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loader, Songcard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCoreApi';

export const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.musicPlayer);
  const { data, isFetching } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits?.map((song) => song.track);

  if (isFetching) return <Loader title='Loading results' />;
  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-2xl text-white text-left mt-4 mb-10'>
        Showing results for <span className='font-black'>{searchTerm}</span>
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {songs?.map((song, i) => (
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
