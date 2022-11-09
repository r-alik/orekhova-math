import Layout from '../shared/Layout';

const Contacts = () => {
  return (
    <Layout idName='contacts'>
      <h2 className='ml-6 mb-8 text-4xl font-pacifico'> Напишить нам</h2>
      <form className='mx-auto flex flex-col gap-4 text-xl'>
        <label className='text-xl' htmlFor='subject'>
          Тема:
        </label>
        <input
          type='text'
          id='subject'
          name='subject'
          required
          minLength={3}
          maxLength={60}
          placeholder='Тема повідомлення'
          className='w-full rounded-xl border border-solid border-gray-400 p-3 text-xl text-black'
        />

        <label htmlFor='message' className='text-xl'>
          Текст:
        </label>
        <textarea
          name='message'
          id='message'
          cols={20}
          rows={8}
          placeholder='Текст повідомлення'
          required
          className='w-full rounded-xl border border-solid border-gray-400 p-3 text-xl text-black '
        ></textarea>
        <button className='w-full rounded-xl bg-teal-500 p-3 text-white text-2xl hover:bg-teal-600 active:bg-teal-400'>
          Надіслати
        </button>
      </form>
    </Layout>
  );
};

export default Contacts;
