import Layout from '../shared/Layout';

const Footer = () => {
  return (
    <Layout>
      <footer id='footer'>
        <address className='mb-4'>
          <h2>ПП "Готуємось до ЗНО" </h2>
          м. Київ <br />
          вул. Косінуса, б. 2а <br />
          Email: <a href='mailto:a2+b2@c2.com.ua'>a2+b2@c2.com.ua</a>
          <br />
          Тел.: <a href='tel:+380001112233'>(000) 1112233</a>
        </address>
        <div className='flex flex-col text-center text-sm'>
          <p>
            Copyright &copy;
            <span id='year'>2022</span>
          </p>
          <p>All Rights Reserved</p>
        </div>
      </footer>
    </Layout>
  );
};

export default Footer;
