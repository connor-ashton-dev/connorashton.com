'use client';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMessage } from 'react-icons/ai';

export const Socials = () => {
  return (
    <div className='flex flex-row gap-x-6 mb-4 bg-white'>
      <Link href='https://github.com/connor-ashton-dev'>
        <AiFillGithub
          size={35}
          className='hover:text-indigo-500 hover:scale-125'
        />
      </Link>
      <Link href='https://www.linkedin.com/in/joseph-connor-ashton/'>
        <AiFillLinkedin
          size={35}
          className='hover:text-indigo-500 hover:scale-125'
        />
      </Link>
      <AiOutlineMessage
        size={35}
        className='hover:text-indigo-500 hover:scale-125'
        onClick={() => {
          window.open(
            'mailto:email@example.com?subject=Subject&body=Body%20goes%20here'
          );
        }}
      />
    </div>
  );
};
