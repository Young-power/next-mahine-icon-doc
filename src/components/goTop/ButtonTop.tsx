"use client"

import { CircleArrowUp } from "next-mahine-icon";
import useGoToTop from "./GoToTop";
const ButtonTop = () => {
   const { showTopElement, scrollToTop } = useGoToTop();
   return (
      <>{showTopElement ? (
         <div className="fixed z-20  bottom-16 right-3 animate-bounce cursor-pointer text-black/80 dark:text-white/80" onClick={scrollToTop}>
            <CircleArrowUp width={35} height={35} className="text-blue-400 " />
         </div>) : null
      }</>

   );
};

export default ButtonTop;
