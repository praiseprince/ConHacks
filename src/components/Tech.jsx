import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles"; // Import styles from your styles file

const Tech = () => {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const handleItemClick = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(null); // Close the clicked item if it's already open
    } else {
      setOpenItemIndex(index); // Open the clicked item
    }
  };

  const faqItems = [
    {
      question: "What is a hackathon?",
      answer:
    "A hackathon is an event where \"hackers\" gather to brainstorm and develop ideas related to a given theme, which, in this case, will be revealed during the opening ceremony. Participants create and implement their concepts, whether in software, web applications or something else. While a winning submission is recognized, it's also a valuable opportunity for learning and networking, regardless of the outcome."    },
    {
      question: "When and where is the hackathon taking place?",
      answer:
        "ConHacks is scheduled for October 22, 2023, and will be hosted at Conestoga College's Waterloo campus.",
    },
    {
      question: "Who can attend?",
      answer:
        "Participation in our inaugural hackathon is exclusively open to students currently enrolled at Conestoga College.",
    },
    {
      question: "I am first time hacker, what should I do?",
      answer:
        "It's perfectly acceptable; ConHacks is an opportunity for learning, networking, and brainstorming innovative ideas.",
    },
    {
      question: "What is expected of participants during the hackathon?",
      answer:
        "While completing the entire project in 8 hours isn't practicaly possible, we encourage participants to aim beyond a simple command-line interface and focus on generating compelling ideas.",
    },
    {
      question: "How does the team formation work?",
      answer:
        "Teams can consist of up to four members, and individuals are welcome to participate independently.",
    },
    {
      question: "How can I find a team to join if I don't have one already?",
      answer:
        "If you lack a team and prefer not to compete solo, you can indicate your preference on the application page, and we will facilitate team formation for you.",
    },
    {
      question: "Can I work on a project I've already started before the hackathon?",
      answer:
        "Projects commenced prior to the hackathon are acceptable if they align with the event's theme, which will be disclosed on the day of the competition. Nevertheless, we encourage participants to develop new concepts during the event.",
    },
    {
      question: "What are the judging criteria for hackathon projects?",
      answer:
        "Detailed judging criteria will be unveiled during the opening ceremony of the hackathon.",
    },
    {
      question: "What are the prizes for the winning teams or participants?",
      answer:
        "Participants have the opportunity to vie for substantial rewards, with prizes starting at $500 or more for victorious teams or individuals. Precise prize information will be unveiled during the grand reveal at the opening ceremony of the hackathon.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <motion.section
      className="bg-black-0 py-16" // Use the same background color as About
      initial={{ opacity: 0 }} // Add animation initial state
      animate={{ opacity: 1 }} // Add animation when component mounts
    >
      {/* Display the heading and subheading */}
      <p className={styles.sectionSubText}>FAQs</p>
      <h3 className={styles.sectionHeadText}>Answers to some FAQs</h3>

      {faqItems.map((item, index) => (
        <div
          key={index}
          className="bg-tertiary rounded-lg p-6 shadow-md mb-4 cursor-pointer"
          onClick={() => handleItemClick(index)}
        >
          <motion.h3
            className="text-white font-medium mb-4"
            initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }} // Add a transition duration
          >
            {item.question}
          </motion.h3>
          {openItemIndex === index && (
            <motion.p
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-secondary rounded-lg outline-none border-none font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }} // Add a transition duration
            >
              {item.answer}
            </motion.p>
          )}
        </div>
      ))}
    </motion.section>
  );
};

export default SectionWrapper(Tech, "faq");

