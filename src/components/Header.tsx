// import mathIcon from '../assets/math-symbols.svg';
import mathColor from '../assets/math-colorful.svg';

const Header = () => {
  return (
    <header className='sm:w-2/3 w-11/12 h-20 basis-20 flex-1 flex gap-5 justify-between items-center font-pacifico px-4'>
      <div>
        <img width='62' src={mathColor} alt='' />
      </div>
      <nav>
        <ul className='flex justify-between gap-4 text-gray-700'>
          <li>
            <a
              className='border py-1 px-2 h-full rounded-md text-sm sm:text-xl tracking-wide cursor-pointer hover:bg-cyan-50'
              href='#main'
            >
              Про нас
            </a>
          </li>
          <li>
            <a
              className='border py-1 px-2 h-full rounded-md text-sm sm:text-xl tracking-wide cursor-pointer hover:bg-cyan-50'
              href='#videos'
            >
              Відео
            </a>
          </li>
          <li>
            <a
              className='border py-1 px-2 h-full rounded-md text-sm sm:text-xl tracking-wide cursor-pointer hover:bg-cyan-50'
              href='#testimonial'
            >
              Відгуки
            </a>
          </li>
          <li>
            <a
              className='border py-1 px-2 h-full rounded-md text-sm sm:text-xl tracking-wide cursor-pointer hover:bg-cyan-50'
              href='#contacts'
            >
              Контакти
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
