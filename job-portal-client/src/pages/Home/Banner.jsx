import { easeInOut, motion } from "motion/react";
import team1 from "../../assets/team/1.jpg";
import team2 from "../../assets/team/2.jpg";
import team3 from "../../assets/team/3.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{ y: [30, 90, 30] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-amber-200 shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-amber-200 shadow-2xl"
          />
        </div>

        <div className="flex-1">
          <motion.h1
            animate={{ x: 50, color: ["green"] }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeInOut,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{
                color: ["#ECFF33", "#b5db48", "#c2f72e"],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
