import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCoreApi';
import { Loader, Songcard } from '../components';
import axios from 'axios';

export const AroundYou = () => {
  const geoIpifyKey = import.meta.env.VITE_GEOIPIY_API_KEY;
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.musicPlayer);
  const { data, isFetching } = useGetSongsByCountryQuery(country);

  useEffect(() => {
    axios
      .get(`https://geo.ipify.org/api/v2/country?apiKey=${geoIpifyKey}`)
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.warn(err))
      .finally(() => setLoading(false));
  }, [country]);

  if (isFetching && loading) return <Loader title='Loading songs around you' />;
  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-2xl text-white text-left mt-4 mb-10'>
        Around You <span className='font-black'>{country}</span>
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
