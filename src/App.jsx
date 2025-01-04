import { motion } from "motion/react";

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


  return (
    <>
      <div className="flex flex-col gap-10 overflow-x-hidden ">
        <motion.section
          variants={GridVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-3 gap-10 p-10">
          <motion.div variants={gridItemsVariants} className="bg-slate-800 aspect-square rounded-lg  justify-center flex items-center gap-10 "></motion.div>
          <motion.div variants={gridItemsVariants} className="bg-slate-800 aspect-square rounded-lg  justify-center flex items-center gap-10 "></motion.div>
          <motion.div variants={gridItemsVariants} className="bg-slate-800 aspect-square rounded-lg  justify-center flex items-center gap-10 "></motion.div>
          <motion.div variants={gridItemsVariants} className="bg-slate-800 aspect-square rounded-lg  justify-center flex items-center gap-10 "></motion.div>
          <motion.div variants={gridItemsVariants} className="bg-slate-800 aspect-square rounded-lg  justify-center flex items-center gap-10 "></motion.div>
          <motion.div variants={gridItemsVariants} className="bg-slate-800 aspect-square rounded-lg  justify-center flex items-center gap-10 "></motion.div>
          
        </motion.section>
      </div>
    </>
  );
}

export default App;
