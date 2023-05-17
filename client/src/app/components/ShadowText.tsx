import Link from 'next/link';
import React from 'react';

type ShadowTextProps = {
  text: string;
  href?: string;
};
export default function ShadowText({ text, href }: ShadowTextProps) {
  return (
    <div className='flex flex-col items-center justify-center mt-2 -mb-8'>
      <div className='flex bg-white w-60 h-16 border border-black z-10 items-center justify-center hover:bg-indigo-500 hover:text-white'>
        {href ? (
          <Link href={`${href}`}>
            <h1 className='text-2xl font-semibold select-none'>{text}</h1>
          </Link>
        ) : (
          <h1 className='text-2xl font-semibold select-none'>{text}</h1>
        )}
      </div>
      <div className='bg-black w-60 h-16 -translate-y-[3.5rem] translate-x-[0.5rem]' />
    </div>
  );
}
