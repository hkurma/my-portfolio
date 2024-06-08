const Home = () => {
  return (
    <div className="max-w-screen h-screen p-4 flex flex-col gap-4 justify-center items-center">
      <div className="text-6xl leading-normal">
        Hello, I&apos;m{' '}
        <span className="bg-slate-900 text-slate-100 px-2">Harish Kurma</span>
      </div>
      <div className="text-2xl">
        Software Engineer by Profession and Passion.
      </div>
      <a
        className="border border-slate-900 px-6 py-4 my-16"
        href="mailto:hkurma0504@gmail.com"
      >
        Contact Me
      </a>
    </div>
  );
};

export default Home;
