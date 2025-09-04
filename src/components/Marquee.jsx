import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {
  return (
    <div className='w-full py-20 rounded-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[25vw] leading-none font-["Founders Grotesk X-Cond Lt"] uppercase font-bold tracking-tighter'>We are ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[25vw] leading-none font-["Founders Grotesk X-Cond Lt"] uppercase font-bold tracking-tighter'>We are ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[25vw] leading-none font-["Founders Grotesk X-Cond Lt"] uppercase font-bold tracking-tighter'>We are ochi</motion.h1>
        </div>

    </div>
  )
}

export default Marquee