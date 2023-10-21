import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { services, testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Add a CSS class for the hover effect
const ServiceCard = ({ index, title, link }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const outerWrapperStyles = {
    transition: "transform 0.6s ease-in-out",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    borderRadius: "20px", // Add other styles here for the outer wrapper
  };

  const innerWrapperStyles = {
    // Add any styles here for the inner wrapper (background color, padding, etc.)
  };

  return (
    <div className='xs:w-[250px] w-full'>
      <div
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        style={outerWrapperStyles}
      >
        <Link to={link} className='w-full h-full block'>
          <div
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[10px] flex justify-evenly items-center flex-col'
            style={innerWrapperStyles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h3 className='text-white text-[20px] font-bold text-center'>
              {title}
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};




const FeedbackCard = ({ index, testimonial }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full mt-4'
    style={{ minHeight: '350px', height: 'auto' }}
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
    </div>
  </motion.div>
);
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About ConHacks</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Join us for ConHacks on October 22, 2023, at Conestoga College, Waterloo Campus. This hackathon invites you to create, innovate, network, and most importantly have fun coding! ConHacks is the first iteration of Conestoga Colleges yearly hackathon. With over 100 participants, judges and mentors, and awesome merch, prizes and free food, seize the opportunity to create something impactful. Check out our schedule for an exciting day of hacking, judging, and networking!</motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* Feedbacks box with FeedbackCard */}
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Outcome</p>
            <h2 className={styles.sectionHeadText}>What will you get out of ConHacks?</h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
