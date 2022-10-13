import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery } from '../redux/services/shazamCoreApi';

export const SongDetails = () => {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.musicPlayer);
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });

  return (
    <div className='flex flex-col'>
      <DetailsHeader artistId={artistId} songData={songData} />
      <div className='mb-10'>
        <h2 className='text-white text-3xl font-bold'>Lyrics:</h2>
        <div className='mt-5'>
          {songData?.sections[1].type === 'LYRICS' ? (
            songData?.sections[1].text.map((line, i) => (
              <p
                key={`lyrics-${line}-${i}`}
                className='text-gray-400 text-base my-1'
              >
                {line}
              </p>
            ))
          ) : (
            <p className='text-gray-400 text-base my-1'>
              Sorry, no lyrics found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
