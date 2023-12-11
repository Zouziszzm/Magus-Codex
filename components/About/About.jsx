import { useContext, useEffect } from "react";
import AnimateContext from "@/context/AnimateContext.js";
import { motion } from "framer-motion";
import Activenav from "../Activenav/Activenav";
const About = () => {
  const { controls, animationVariants } = useContext(AnimateContext);
  useEffect(() => {
    controls.set("initial");
    controls.start("animate");
  }, []);

  useEffect(() => {
    controls.set("initial");
    controls.start("animate");
  }, [controls]);

  return (
    <>
      <motion.div
        animate={controls}
        variants={animationVariants}
        className="relative"
      >
        <div className="flex justify-center h-full items-center">
          <div className="flex p-4 h-fit flex-wrap vs:w-full md:w-[85%]">
            <div className="flex justify-center gap-2 flex-col p-4  icon_color vs:order-2 vs:w-full lg:order-1 lg:w-2/3">
              <p className="font-bold vs:text-2xl md:text-3xl">Hello there!</p>
              <p className="vs:text-md lg:text-lg">
                I'm a Frontend Developer hailing from India. My passion lies in
                crafting seamless and interactive web experiences using
                cutting-edge technologies. Currently, my focus revolves around
                React, Next.js, Node.js, and Java.
              </p>
              <p className="vs:text-md lg:text-lg">
                I'm on an exciting journey to become a full-stack developer,
                exploring the realms of both frontend and backend technologies.
              </p>
              <p className="vs:text-md lg:text-lg">
                Enthusiastically learning languages like JavaScript for its
                versatility and Python for its robust backend capabilities. I
                find joy in translating ideas into functional, user-centric
                applications. Beyond coding, I'm actively working on expanding
                my professional network. Building connections with fellow
                developers, industry professionals, and like-minded individuals
                is a priority for me. I believe in the power of collaboration
                and continuous learning. Let's connect, share insights, and
                build something remarkable together.
              </p>
              <p className="vs:text-md lg:text-lg">
                Let's build something remarkable together.
              </p>
            </div>
            <div className="flex p-4 justify-center items-center vs:order-1 vs:w-full lg:order-2 lg:w-1/3">
              <div className="p-2 border-[1px] icon_border w-fit h-fit">
                <img className="rounded-md" src="/pfp/unnamed.jpg" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
