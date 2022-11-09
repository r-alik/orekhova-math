import Layout from '../shared/Layout';
import { testimonials } from '../data/testimonial-data';

const Testimonial = ({
  text,
  name,
  age,
}: {
  text: string;
  name: string;
  age: number;
}) => {
  return (
    <figure className='mb-4'>
      <blockquote className='rounded-3xl bg-teal-500 py-12 pl-14 pr-8'>
        <p className='mt-2 text-left text-2xl text-white italic'>{text}</p>
        <figcaption className='mt-2 text-right text-xl italic text-white'>
          &#8212; {name} ({age} рочків)
        </figcaption>
      </blockquote>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <Layout idName='testimonials'>
      <h2 className='ml-6 mb-8 text-4xl font-pacifico'>Відгуки</h2>

      {testimonials.map(t => {
        return <Testimonial text={t.text} name={t.name} age={t.age} />;
      })}
    </Layout>
  );
};

export default Testimonials;
