import Image from 'next/image';
import React from 'react';
import Ecoplants from '@/app/assets/logo/ecoplants.webp';
import { Shopping } from '@/app/assets/svg/Shopping';
import { SearchIc } from '@/app/assets/svg/SearchIc';

export default function Navbar() {
  return (
    <nav className="base-padding flex justify-between items-center h-20 w-full bg-transparent absolute top-0 left-0 z-10">
      <div className="flex items-center gap-2">
        <Image
          src={Ecoplants}
          alt="Ecoplants"
          className="pb-2"
          width={40}
          height={40}
        />
        <h6 className="font-extrabold">Ecoplants</h6>
      </div>

      <div className="flex gap-4">
        <SearchIc className="size-5" />
        <Shopping className="size-5" />
      </div>
    </nav>
  );
}
