 import { useEffect, useState } from "react";
  
 function ScrollToTop(){
  const [isVisible , setIsVisible] = useState(false);

   const goToTopBtn = () =>{
    window.scrollTo({top:0, behavior:"smooth"});
   };

   const listenToScroll = () => {
    if (window.scrollY > 230){
        setIsVisible(true);
    }else{
        setIsVisible(false);
    }
   }
    
   useEffect(() => {
   window.addEventListener("scroll",listenToScroll);
   return() => window.removeEventListener("scroll",listenToScroll);
    }, []);
   
    return(
        <div className="fixed bottom-8 right-8 z-40">
         {isVisible && (
         <button onClick={goToTopBtn} className="bg-linear-to-b viayellowone from-blueone to-yellowone h-14 w-14 rounded-full flex items-center justify-center" >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white animate-bounce [animation-duration:2s]"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
         </button>
         )} 
        </div>  
    );
}

export default ScrollToTop;