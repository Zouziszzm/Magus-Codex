import { useContext, useEffect } from "react";
import AnimateContext from "@/context/AnimateContext.js";
import { motion } from "framer-motion";
const Home = ({ redirect }) => {
  const { controls, animationVariants } = useContext(AnimateContext);
  useEffect(() => {
    controls.set("initial");
    controls.start("animate");
  }, []);

  const handelback = () => {
    redirect(false);
  };
  useEffect(() => {
    controls.set("initial");
    controls.start("animate");
  }, [controls]);

  return (
    <>
      <motion.div animate={controls} variants={animationVariants}>
        Home
        <button className="m-2 bg-red-200 p-4" onClick={handelback}>
          back
        </button>
      </motion.div>
    </>
  );
};

export default Home;
