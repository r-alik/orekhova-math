import { videoData } from '../data/video-data';
import { VideoItem } from '../interface';
import Layout from '../shared/Layout';

const Videos = () => {
  return (
    <Layout idName='videos'>
      <h2 className='ml-6 mb-8 text-4xl font-pacifico'> Деякі відео</h2>
      <ul className='grid grid-cols-2 gap-2'>
        {videoData.map((v: VideoItem) => {
          return (
            <li
              className='border rounded-xl overflow-hidden'
              key={v.id || v.title}
            >
              <img src={v.img} alt={v.imgDesc} />
              <h3 className='pl-2 py-3 font-pacifico text-xl mb-2 text-gray-800'>
                {v.title}
              </h3>
              <p className='px-2 pb-3 text-gray-800 first-line:text-lg'>
                {v.text}{' '}
              </p>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Videos;
