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
  const horizontalscaleX = useTransform(scrollYProgress,[0,0.33],["33%"," 36.5%"])
  const horizontalscaleX2 = useTransform(scrollYProgress,[0,0.33],["66%"," 62.5%"])
  const verticalscalling = useTransform(scrollYProgress,[0,0.36],["33%","39%"]) 
  const verticalscalling2 = useTransform(scrollYProgress,[0,0.36],["66%","62%"]) 
  return (
    <div ref={scrollRef} className=" relative w-screen h-[300vh] bg-white">
      <motion.div className="fixed absolute  left-0 w-full h-[0.5px] bg-[#C2D9FF] pointer-events-none"
      style={{top:topbottomscaleY}} />
      <div className="fixed absolute left-[44%] w-[1px] h-[5%] bg-[#C2D9FF] pointer-events-none" />
      <div className="fixed absolute left-[55%] w-[1px] h-[5%] bg-[#C2D9FF] pointer-events-none" />
      <motion.div className="fixed absolute left-[33%] w-[1px] h-full bg-[#C2D9FF] pointer-events-none" 
        style={{left:horizontalscaleX}}      
      />
      <motion.div className="fixed absolute left-[66%] w-[1px] h-full bg-[#C2D9FF] pointer-events-none" 
        style={{left:horizontalscaleX2}}
      />
      <motion.div className="fixed absolute top-[33%] left-0 w-[33%] h-[1px] bg-[#C2D9FF] pointer-events-none" 
        style={{width:horizontalscaleX, top:verticalscalling}}      
      />
      <motion.div className="fixed absolute top-[66%] left-0 w-[33%] h-[1px] bg-[#C2D9FF] pointer-events-none"
        style={{width:horizontalscaleX,top:verticalscalling2}} 
      />
      <motion.div className="fixed absolute  left-0 w-full h-[0.5px] bg-[#C2D9FF] pointer-events-none"
        style={{bottom:topbottomscaleY}}
      />
      <motion.div className="fixed absolute top-[33%] left-[66%] w-[40%] h-[1px] bg-[#C2D9FF] pointer-events-none" 
        style={{left:horizontalscaleX2, top:verticalscalling}}      
      />
      <motion.div className="fixed absolute top-[66%] left-[66%] w-[40%] h-[1px] bg-[#C2D9FF] pointer-events-none" 
        style={{left:horizontalscaleX2,top:verticalscalling2}}
      />
      {/* <div className='fixed absolute top-[5%] w-[33%] h-[90%] bg-rose-200 left-[33%]'>
      </div> */}
    </div>
  )
}  
