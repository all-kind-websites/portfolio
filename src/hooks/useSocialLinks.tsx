import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill, BsStackOverflow } from 'react-icons/bs';

const useSocialLinks = () => {
  const links = [
    {
      id: 0,
      child: (
        <>
          <FaLinkedin size={30} /> LinkedIn
        </>
      ),
      href: "https://www.linkedin.com/in/fotios-tsakiris-72331b170/",
      style: "rounded-tr-md",
    },
    {
      id: 1,
      child: (
        <>
          <FaGithub size={30} />GitHub
        </>
      ),
      href: "https://github.com/footios",
    },
    {
      id: 2,
      child: (
        <>
          <BsStackOverflow size={30} />Stack...
        </>
      ),
      href: "https://stackoverflow.com/users/5986141/fotios-tsakiris",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} /> Mail
        </>
      ),
      href: "mailto:footios76@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} /> Resume
        </>
      ),
      href: "/Fotis_Tsakiris_React_Native_CV.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return links;
}

export default useSocialLinks