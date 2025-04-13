"use client"

import {motion,useScroll,useTransform,useMotionValueEvent} from 'framer-motion';
import { useRef } from 'react';



export default function Home() {
  
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('Scroll progress:', latest); 
  });

  const topbottomscaleY = useTransform(scrollYProgress,[0,0.33],["5%","15%"])
  // const horizontalscaleX = useTransform(scrollYProgress,[0,0.33],["5%","15%"])
  return (
    <div ref={scrollRef} className=" relative w-screen h-[300vh] bg-white overflow-scroll hide-scrollbar">
      <motion.div className="fixed absolute  left-0 w-full h-[0.5px] bg-[#C2D9FF] pointer-events-none"
      style={{top:topbottomscaleY}} />
      <div className="fixed absolute left-[44%] w-[1px] h-[5%] bg-[#C2D9FF] pointer-events-none" />
      <div className="fixed absolute left-[55%] w-[1px] h-[5%] bg-[#C2D9FF] pointer-events-none" />
      <div className="fixed absolute left-[33%] w-[1px] h-full bg-[#C2D9FF] pointer-events-none" />
      <div className="fixed absolute left-[66%] w-[1px] h-full bg-[#C2D9FF] pointer-events-none" />
      <div className="fixed absolute top-[33%] left-0 w-[33%] h-[1px] bg-[#C2D9FF] pointer-events-none" />
      <div className="fixed absolute top-[66%] left-0 w-[33%] h-[1px] bg-[#C2D9FF] pointer-events-none" />
      <motion.div className="fixed absolute  left-0 w-full h-[0.5px] bg-[#C2D9FF] pointer-events-none"
          style={{bottom:topbottomscaleY}}
        />
      <div className="fixed absolute top-[33%] left-[66%] w-[34%] h-[1px] bg-[#C2D9FF] pointer-events-none" />
      <div className="fixed absolute top-[66%] left-[66%] w-[34%] h-[1px] bg-[#C2D9FF] pointer-events-none" />
      <div className='fixed absolute top-[5%] w-[33%] h-[90%] bg-rose-200 left-[33%]'>

      </div>
    </div>
  )
}  



// const scrollRef = useRef(null);
// const { scrollYProgress } = useScroll({
//   target: scrollRef,
//   offset: ["start start", "end start"],
// });
// // `
// //   const scale = useTransform(scrollYProgress, [0, 1], [1.1, 0.5]);`
// const scaleX= useTransform(scrollYProgress,[0,1],[1.5,0.5 ])
// const scaleY= useTransform(scrollYProgress,[0,1],[1.5,0.5])