import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";

import { styles } from "../styles";
import { github, instagram, linkedin } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  image,
  source_code_link,
  instagram_link,
  linkedin_link,
}) => {
  const [cardStyle, setCardStyle] = useState({
    opacity: 0, // Initially hidden
    transition: "opacity 0.5s ease", // Fade-in transition
  });

  useEffect(() => {
    // Use a delay to stagger the animations
    const animationTimeout = setTimeout(() => {
      setCardStyle({
        opacity: 1, // Show
        transition: "opacity 0.5s ease", // Keep the same transition for later updates
      });
    }, 200 * index); // Adjust the delay as needed

    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(animationTimeout);
  }, [index]);

  return (
    <Tilt
      options={{
        max: 15,
        scale: 1,
        speed: 10,
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      style={cardStyle} // Apply the animation style
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div className='flex space-x-2'>
            {/* GitHub icon and link */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>

            {/* Instagram icon and link */}
            {instagram_link && (
              <div
                onClick={() => window.open(instagram_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={instagram}
                  alt='Instagram'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}

            {/* LinkedIn icon and link */}
            {linkedin_link && (
              <div
                onClick={() => window.open(linkedin_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={linkedin}
                  alt='LinkedIn'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
      </div>
    </Tilt>
  );
};

const Works = () => {
  const [headingStyle, setHeadingStyle] = useState({
    transform: "translateY(-50px)",
    opacity: 0,
    transition: "transform 0.5s ease, opacity 0.5s ease",
  });

  const [subheadingStyle, setSubheadingStyle] = useState({
    transform: "translateY(-50px)",
    opacity: 0,
    transition: "transform 0.5s ease, opacity 0.5s ease",
  });

  useEffect(() => {
    setTimeout(() => {
      setHeadingStyle({
        transform: "translateY(0)",
        opacity: 1,
        transition: "transform 0.5s ease, opacity 0.5s ease",
      });
      setSubheadingStyle({
        transform: "translateY(0)",
        opacity: 1,
        transition: "transform 0.5s ease, opacity 0.5s ease",
      });
    }, 1000);
  }, []);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`} style={subheadingStyle}>
          Behind the scenes
        </p>
        <h2 className={`${styles.sectionHeadText}`} style={headingStyle}>
          Meet the team
        </h2>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

