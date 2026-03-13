import {useEffect, useState, useRef} from 'react';

function Reveal({children, direction, delay, className=""}){
     const [isVisible, setIsVisible] = useState(false);
     const domRef = useRef();

  useEffect(() => {
   const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
      if (entry.isIntersecting){
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    },
      { threshold: 0.10 });
   });

  if (domRef.current) observer.observe(domRef.current);
  return () => observer.disconnect();
  }, []);

  const Revealdirection = () =>{
    switch(direction) {
        case "up":
            return "reveal_up";
        case "down":
            return "reveal_down";
        case "left":
            return "reveal_left";
        case "right":   
            return "reveal_right";
        default:
            return "reveal_up";            
    }
  }


    return(
    <div ref={domRef} className={`h-full ${className} ${Revealdirection()} ${isVisible? "reveal_show" : ""}`} style={{transitionDelay: `${delay}s`}}>
            {children}
    </div>
    );
};

export default Reveal;