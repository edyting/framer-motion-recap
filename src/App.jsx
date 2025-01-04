import { easeInOut, easeOut } from "motion";
import { motion, useAnimate, useAnimation, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

function App() {
  const GridVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      }
    }
  };
  const gridItemsVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  };

  const scrollViewConatiner = useRef(null);
  const isInView = useInView(scrollViewConatiner, { once: true });
  const maincontrols = useAnimation();

  // multiple animations belonging to one container ref
  const { scrollYProgress } = useScroll(
    {
      target: scrollViewConatiner,
      offset:["start end","end end"]
    }
  );
  
  // item (part of multiple things to animate into view)  [],[positioning of start and finish]      
  const paragraphOneValue = useTransform(scrollYProgress,[0,1],["-100%","0%"]) 
  const paragraphTwoValue = useTransform(scrollYProgress,[0,1],["100%","0%"]) 

  useEffect(() => {
    if (isInView) {
      maincontrols.start("visible")
    }
  },[isInView])

  return (
    <>
      <div className="flex flex-col gap-10 overflow-x-hidden ">
        {/* grid-container ---will propagate initial and animate variables */}
        <motion.section
          variants={GridVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-3 gap-10 p-10"
        >
          {/* grid items being staggered  */}
          {/* fade-up -- down **start** */}
          <motion.div
            variants={gridItemsVariants}
            className="bg-slate-800 aspect-square rounded-lg  justify-center flex items-center gap-10 "
          >
            {/* fade-up */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.2 }}
              className="w-20 h-20 bg-stone-100 rounded-lg "
            ></motion.div>
            {/* fade-down */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeInOut, delay: 0.4 }}
              className="w-20 h-20 bg-stone-100 rounded-full "
            ></motion.div>
          </motion.div>
          {/* fade-up -- down **end** */}
          <motion.div
            variants={gridItemsVariants}
            className="bg-slate-800 aspect-square rounded-lg  justify-center flex items-center gap-10 "
          ></motion.div>
          <motion.div
            variants={gridItemsVariants}
            className="bg-slate-800 aspect-square rounded-lg  justify-center flex items-center gap-10 "
          ></motion.div>
          <motion.div
            variants={gridItemsVariants}
            className="bg-slate-800 aspect-square rounded-lg  justify-center flex items-center gap-10 "
          ></motion.div>
          <motion.div
            variants={gridItemsVariants}
            className="bg-slate-800 aspect-square rounded-lg  justify-center flex items-center gap-10 "
          ></motion.div>
          <motion.div
            variants={gridItemsVariants}
            className="bg-slate-800 aspect-square rounded-lg  justify-center flex items-center gap-10 "
          ></motion.div>
        </motion.section>

        {/* scroll-into view */}
        {/* set useRef to container */}
        <div className="flex flex-col gap-10 mb-10" ref={scrollViewConatiner}>
          <motion.h1
            className="text-5xl tracking-wide text-slate-100  text-center"
            animate={maincontrols}
            initial="hidden"
            variants={{
              hidden: {
                opacity: 0,
                y: 75,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{ delay: 0.3 }}
          >
            Just keep scrolling
          </motion.h1>
          <motion.p
            style={{ translateX: paragraphOneValue }}
            className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minima
            sapiente iusto deleniti earum beatae voluptatibus temporibus,
            accusamus laudantium ea ipsa. Rem non libero fuga eligendi illo
            quibusdam quis facilis.
          </motion.p>
          <motion.p
            style={{ translateX: paragraphTwoValue }}
            className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minima
            sapiente iusto deleniti earum beatae voluptatibus temporibus,
            accusamus laudantium ea ipsa. Rem non libero fuga eligendi illo
            quibusdam quis facilis.
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default App;
