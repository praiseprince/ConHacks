import React from 'react';
import { Footer } from 'flowbite-react';
import { BsGithub, BsInstagram } from 'react-icons/bs';

const styles = {
  root: {
    base: "w-full rounded-lg bg-black shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    container: "w-full p-6",
    bgDark: "bg-gray-800",
    backgroundColor: "#050816", // Change background color to #050816
  },
  icon: {
    base: "text-gray-500 dark:hover:text-white",
    size: "h-5 w-5",
  },
  title: {
    base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white",
  },
  copyright: {
    base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
    href: "ml-1 hover:underline",
    span: "ml-1",
  },
  email: {
    base: "text-sm ml-1 hover:underline",
    color: "#9CA3AF", // Change to your desired hex color code
  },
};

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container style={styles.root}>
      <div className="w-full">
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="ConHacks"
            href="#"
            year={2023}
            style={styles.copyright}
          />
          <a href="mailto:contact@conhacks.com" style={styles.email}>contact@conhacks.com</a>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a onClick={() => window.open("https://www.instagram.com/conhacks/", "_blank")}>
              <BsInstagram style={styles.icon} />
            </a>
            <a href="#nothing">
              <BsGithub style={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
}

