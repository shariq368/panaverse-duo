"use client";
import { FC } from "react"
import { AnimatePresence, animate, motion } from "framer-motion";


const Wrapper: FC<{children :React.ReactNode}> = ({children}) => {
  return (
    <motion.div initial={{y:20,opacity:0 }}
    animate={{opacity:1, y:-5}}
    exit={{opacity:1, y:0}}
    // transition={{ease:'easeInOut', duration:0.75}}
     className="max-w-screen-2xl mx-auto px-4">
      <AnimatePresence>
        
        {children}
        </AnimatePresence>
    </motion.div>
  )
}

export default Wrapper