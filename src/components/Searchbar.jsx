import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

export const Searchbar = () => {
  return (
    <form
      className='p-2 text-gray-400 focus-within:text-gray-600'
      autoComplete='off'
    >
      <label htmlFor='search-field' className='sr-only'>
        Search all songs
      </label>
      <div className='flex flex-row justify-start items-center'>
        <FiSearch className='w-5 h-5 ml-4' />
        <input
          type='text'
          name='search-field'
          className='flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4'
          autoComplete='off'
          id='search-field'
          placeholder='Search'
          value=''
          onChange={() => {}}
        />
      </div>
    </form>
  );
};
