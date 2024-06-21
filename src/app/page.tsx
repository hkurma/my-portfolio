import { Github, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="container m-auto p-4 h-screen flex flex-col gap-8 justify-center">
      <div className="text-6xl italic">Hello,</div>
      <div className="text-8xl">
        I&apos;m{' '}
        <span className="bg-slate-900 text-slate-100 px-2">Harish Kurma</span>
      </div>
      <div className="text-4xl font-extralight">
        Software Engineer by profession and passion.
      </div>
      <div className="flex items-center gap-8 my-8">
        <a
          href="mailto:hkurma0504@gmail.com"
          className="border border-slate-900 p-4 flex gap-4"
        >
          <Mail /> Contact
        </a>
        <a
          href="https://github.com/hkurma"
          target="_blank"
          className="border border-slate-900 p-4 flex gap-4"
        >
          <Github /> GitHub
        </a>
      </div>
    </div>
  );
};

export default Home;
