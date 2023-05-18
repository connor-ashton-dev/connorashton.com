// import Image from 'next/image';
import ShadowText from './components/ShadowText';
import { Socials } from './components/Socials';
import ProfilePic from './components/Me';
import AnimatedText from './components/AnimatedText';
import { getResume } from './utils/UseSanity';

const getResumeLink = async () => {
  const resume = await getResume();
  return resume;
};

export default async function Home() {
  const resume: string = await getResumeLink();
  return (
    <main className='h-full w-screen flex flex-col items-center'>
      {/* <div className='w-full px-4 pb-4 flex flex-row justify-end'> */}
      {/*   <Image src='/shout.png' alt='shout' width={200} height={100} /> */}
      {/* </div> */}

      <ProfilePic />
      <AnimatedText text="Hi, I'm Connor" />
      <Socials />
      {/* </div> */}
      <ShadowText text='About' href='/about' />
      <ShadowText text='Projects' href='https://github.com/connor-ashton-dev' />
      <ShadowText
        text='Resume'
        href='https://cdn.sanity.io/files/g5qx3m4j/production/1041aabc113766c0bf5ea3a7b8bebc442f44cb85.pdf'
      />
    </main>
  );
}
