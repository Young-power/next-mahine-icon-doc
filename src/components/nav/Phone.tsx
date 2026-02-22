"use client";
import { Menu, X } from 'next-mahine-icon'
import { useState } from 'react'
import MenuPhone from './MenuPhone';
import { AnimatePresence } from "framer-motion"
const Phone = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = (): void => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className='flex lg:hidden'>
        {
          showMenu ? <X onClick={handleShowMenu} /> : <Menu onClick={handleShowMenu} width={30} height={30} />
        }

        <AnimatePresence>
          {showMenu && <MenuPhone close={handleShowMenu} />}

        </AnimatePresence>

      </div>

    </>
  )
}

export default Phone
