import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCoreApi';
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
  return <div>AroundYou</div>;
};
