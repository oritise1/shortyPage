import React, { useState } from 'react'
import BgImg from '../../assets/bg-shorten-desktop.svg';
import Button from '../Button';

const Shorten = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showShortenedUrl, setShowShortenedUrl] = useState(false);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setError('');
    setShowShortenedUrl(false);
  };

  const handleShortenUrl = async () => {
    if (!url) {
      setError('Please add a link...');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await response.json();
      if (data.ok) {
        setShortenedUrl(data.result.full_short_link);
        setShowShortenedUrl(true);
      } else {
        setError('Failed to shorten URL. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl).then(() => {
      <Button paddingX='px-16' paddingY='py-6' borderRaduis='rounded-xl' onClick={handleCopyToClipboard} > Copied! </Button>
    });
  };
  return (
    <div className='w-full bg-gray-200 py-8 px-16 pb-[200px] sm:p-2 md:p-2 lg:p-2 '>
      <div className="w-[80%] absolute top-[92vh] left-[130px] gap-1 flex flex-row flex-wrap justify-between py-8 px-16 bg-purple-900 rounded border bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <input type='text' value={url} onChange={handleUrlChange} placeholder='Shorten a link here...' className='w-[80%] rounded-xl py-3 px-6 ' />
        {error && <p className="text-red-500 italic mb-2 absolute top-[90px] left-20">{error}</p>}
        <Button onClick={handleShortenUrl} paddingX='px-10' paddingY='py-5' textFont='text-medium' borderRaduis='rounded-xl' color='bg-blue-500' hoverColor='hover:bg-blue-400' >Shorten It!</Button>
      </div>
      <div className='pt-[100px] px-16' >
      {showShortenedUrl && shortenedUrl && (
        <div className='flex flex-row flex-wrap justify-between py-4 px-8 bg-white rounded'>
          <input type='text' value={url} className='w-[500px]' />
          <input type='text' value={shortenedUrl} placeholder='hello...' className='text-blue-600 w-1/4' />
          <Button paddingX='px-16' paddingY='py-6' borderRaduis='rounded-xl' onClick={handleCopyToClipboard} > Copy</Button>
        </div>
      )};
      </div>
    </div>
  )
}

export default Shorten