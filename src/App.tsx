import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Testimonials from './components/Testimonial';
import Videos from './components/Videos';
// import Layout from './shared/Layout';

function App() {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <Header />
      <main>
        <Main />
        <hr />
        <Videos />
        <hr />
        <Testimonials />
        <hr />
        <Contacts />
        <hr />
      </main>
      <Footer />
    </div>
  );
}

export default App;
