import React from 'react';
import Image from 'next/image';
import { getAboutSection, getFrontendSkillPictures } from '../utils/UseSanity';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandPrisma, TbBrandGolang } from 'react-icons/tb';
import {
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiSwift,
} from 'react-icons/si';

export default async function About() {
  const posts = await getAboutSection();
  const pics = await getFrontendSkillPictures();
  return (
    <div className='h-full w-screen flex flex-col items-center'>
      <h1 className='bg-white mt-8 md:mt-52 px-4 py-3 text-3xl font-bold border-4 border-black'>
        About Me:
      </h1>

      {/* About Section */}
      <div className='mt-12 '>
        <p className='text-2xl font-semibold bg-white px-4 md:px-0 text-center'>
          {posts[0].content}
        </p>
      </div>

      {/* Skills Section */}
      <div className='mt-12 flex flex-col items-center text-center'>
        <h2 className='bg-white mt-8 md:mt-52 px-4 py-3 text-3xl font-bold border-4 border-black'>
          Skills:
        </h2>
        <div className='flex flex-col space-y-8 mt-8'>
          <div className='flex flex-col items-center'>
            <p className='text-2xl font-bold'>Front-End</p>
            <div className='flex flex-row space-x-4 pt-2'>
              <h1>{pics.length}</h1>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <p className='text-2xl font-bold'>Back-End</p>
            <div className='flex flex-row space-x-4 pt-2'>
              <FaNodeJs size={40} />
              <SiPostgresql size={40} />
              <TbBrandGolang size={40} />
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <p className='text-2xl font-bold'>Mobile</p>
            <div className='flex flex-row space-x-4 pt-2'>
              <SiSwift size={40} />
              <FaReact size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
