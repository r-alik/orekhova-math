import Layout from '../shared/Layout';

const Main = () => {
  return (
    <div
      className='min-h-screen bg-[url("/assets/error-800x532.webp")]
     bg-cover bg-no-repeat bg-center'
    >
      {/* <div className='min-h-screen bg-[url("/assets/error-800x532.webp")] bg-cover bg-no-repeat bg-center'> */}

      <div className='w-full min-h-screen backdrop-blur-[6px]'>
        <Layout idName='main'>
          <h2 className='ml-6 mb-8 text-4xl font-pacifico'>Про нас</h2>
          <p className='text-2xl italic text-stone-900'>
            Надворі весна вповні. Куди не глянь — скрізь розвернулося,
            розпустилося, зацвіло пишним цвітом. Ясне сонце, тепле й приязне, ще
            не вспіло наложити палючих слідів на землю: як на Великдень дівчина,
            красується вона в своїм розкішнім убранні...
          </p>
          <p className='text-2xl italic text-stone-900'>
            Поле — що безкрає море — скільки зглянеш — розіслало зелений килим,
            аж сміється в очах.{' '}
          </p>
        </Layout>
      </div>
    </div>
  );
};

export default Main;
