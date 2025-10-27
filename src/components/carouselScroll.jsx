import { motion,useInView, useTransform, useScroll } from "framer-motion";
import { title } from "motion/react-client";
import { useRef } from "react";



const CarouselScroll = ({title}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  
  return (
    <section ref={targetRef} className="relative h-[300vh]  bg-[#012558]">
      
      <div className="grid grid-rows-3 sticky top-0  h-screen items-center overflow-hidden ">
        
        <div className=" row-end-2 content-center w-[10%] sm:w-[10%] md:w-[50%] lg:w-[60%] text-center bg-[#f57922]">
          <h1 className="text-8xl font-bold text-white">{title}</h1>
        </div>

        <motion.div 
          style={{ x }} className="flex gap-4 row-span-2">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
          
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  const ref=useRef(null);
  const isView = useInView(ref, { once: true, margin: "-100px" });
  return (
        <motion.div
        ref={ref}
          initial={{scale:0}}
          animate={isView?{scale:1}:{scale:0}}
          transition={{duration:0.3}}
          
        key={card.id}
        className="group relative h-[350px] w-[350px] overflow-hidden bg-neutral-200 rounded-2xl"
        >
          <div
              style={{
              backgroundImage: `url(${card.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
          ></div>
          <div className="absolute inset-0 z-10 grid place-content-center">
              <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
              {card.title}
              </p>
              <motion.a 
              whileHover={{scale:1.1}}
              whileTap={{scale:0.02}}
               className="rounded-2xl bg-amber-800 text-amber-50 text-center cursor-pointer">
                Visistar
              </motion.a>
          </div>
        </motion.div>
  );
};

export {CarouselScroll}; ;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];