import { motion, AnimatePresence } from "motion/react";
import { IoCheckmarkCircle } from "react-icons/io5";

interface Props {
    isSubmitted: boolean
}

const FormModal = ({isSubmitted}: Props) => {


  const variants = {
    initial: {opacity: 0, scale: 0},
    animate: {opacity: 1, scale: 1, transition: {duration: 0.8, type: "spring"}},
    exit: {opacity: 0, scale: 0, y: "-100vh", transition: {duration: 0.8}}
  }
 

  return (
    <AnimatePresence>

    { isSubmitted && ( <motion.div key="modal" initial="initial" animate="animate" exit="exit" variants={variants} className="px-5 py-5 max-w-[95%] absolute flex flex-col justify-center items-center bg-white rounded-md text-center drop-shadow-md">
        <IoCheckmarkCircle className="text-blue-500 text-8xl my-3 drop-shadow-sm "/>
        <p className="text-2xl">
        Wiadomość została wysłana pomyślnie!
        </p>
        </motion.div>
  )}
  </AnimatePresence>
  )
}

export default FormModal