import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DetailsHeader, RelatedSongs, Loader } from '../components';
import { useGetArtistDetailsQuery } from '../redux/services/shazamCoreApi';

export const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.musicPlayer);
  const { data: artistData, isFetching: isFetchingArtistDetails } =
    useGetArtistDetailsQuery(artistId);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  if (isFetchingArtistDetails) return <Loader title='Loading artist details' />;

  return (
    <div className='flex flex-col'>
      <DetailsHeader artistId={artistId} artistData={artistData} />

      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};
