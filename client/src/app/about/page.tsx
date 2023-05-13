export const revalidate = 0;
import React from 'react';
import Image from 'next/image';
import {
  getAboutSection,
  getBackendSkillPictures,
  getFrontendSkillPictures,
  getMobileSkillPictures,
} from '../utils/UseSanity';
import Link from 'next/link';

type PostType = {
  content: string;
};
export default async function About() {
  const posts = await getAboutSection();
  const frontendPics = await getFrontendSkillPictures();
  const backendPics = await getBackendSkillPictures();
  const mobilePics = await getMobileSkillPictures();
  return (
    <div className='h-full w-screen flex flex-col items-center px-6'>
      <h1 className='bg-white mt-8 md:mt-52 px-4 py-3 text-3xl font-bold border-4 border-black'>
        About Me:
      </h1>

      {/* Image */}
      <div>
        <Image
          src='/about.jpeg'
          alt='aboutPicture'
          height={300}
          width={300}
          className='my-8 border-4 border-black'
        />
      </div>
      {/* About Section */}
      <div className=' md:w-[40%] mb-2'>
        {posts.map((post: PostType, idx: number) => (
          <p key={idx} className='text-2xl font-semibold mb-4 bg-white'>
            {post.content}
          </p>
        ))}
      </div>

      {/* Skills Section */}
      <div className='mt-6 flex flex-col items-center text-center'>
        <h2 className='bg-white mt-4 md:mt-12 px-4 py-3 text-3xl font-bold border-4 border-black'>
          Skills:
        </h2>
        <div className='flex flex-col space-y-8 mt-8'>
          {/* Front end section */}
          <div className='flex flex-col items-center overflow-auto pb-8 '>
            <p className='text-2xl font-bold bg-white'>Front-End</p>
            <div className='flex flex-row space-x-8 pt-2 justify-center w-full items-center'>
              {frontendPics.map((pic, idx) => (
                <div key={idx}>
                  <Image
                    src={pic}
                    alt='skills picture'
                    width={50}
                    height={50}
                    className='bg-white'
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Back end section */}
          <div className='flex flex-col items-center pb-8'>
            <p className='text-2xl font-bold bg-white'>Back-End</p>
            <div className='flex flex-row space-x-8 pt-2 justify-center items-center'>
              {backendPics.map((pic, idx) => (
                <div key={idx}>
                  <Image
                    src={pic}
                    alt='skills picture'
                    width={50}
                    height={50}
                    className='bg-white'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile section */}
          <div className='flex flex-col items-center pb-8'>
            <p className='text-2xl font-bold bg-white'>Mobile</p>
            <div className='flex flex-row space-x-8 py-2 justify-center items-center'>
              {mobilePics.map((pic, idx) => (
                <div key={idx}>
                  <Image
                    src={pic}
                    alt='skills picture'
                    width={50}
                    height={50}
                    className='bg-white'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className='rounded' />
      <Link
        href='/'
        className='mt-24 mb-12 bg-indigo-500 px-3 py-2 border-black border-4'
      >
        <p className='text-white text-xl font-bold'>Go back</p>
      </Link>
    </div>
  );
}
