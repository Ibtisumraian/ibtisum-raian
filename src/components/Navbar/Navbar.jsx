import React from "react";
import { motion } from "framer-motion";
import BubbleWrapper from "../BubbleWrapper/BubbleWrapper";

const Navbar = () => {
  const linksArray = [
    { href: "#hero", label: "Home" },
    { href: "#aboutMe", label: "About Me" },
    { href: "#mySkills", label: "Skills" },
    { href: "#projects", label: "Projects" },
  ];

  const links = linksArray.map((link, index) => (
    <motion.a
      key={link.href}
      href={link.href}
      whileHover={{ scale: 1.1, color: "#ec9956" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="hover:text-[#ec9956]"
    >
      {link.label}
    </motion.a>
  ));

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur-xl"
    >
      <div className="navbar text-white w-10/12 mx-auto py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <motion.ul
              tabIndex={0}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="menu menu-sm bg-gradient-to-br from-[#62393c] to-[#181e41] flex items-center gap-5 text-white dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </motion.ul>
          </div>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <img
                className="w-16"
                src="https://res.cloudinary.com/dv6p7mprd/image/upload/v1751115799/logo00-removebg-preview_vmyien.png"
                alt="Logo"
              />
              <motion.a
                className="text-2xl font-bold"
                whileHover={{ scale: 1.05, color: "#ec9956" }}
              >
                Ibtisum Raian
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="navbar-center hidden lg:flex"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <ul className="flex items-center gap-5 text-xl px-1">
            {linksArray.map((link, i) => (
              <motion.li
                key={link.href}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <a
                  href={link.href}
                  className="hover:text-[#ec9956] transition-all"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className="navbar-end">
          <BubbleWrapper>
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="py-1 sm:py-2 px-2 sm:px-4 rounded-4xl drop-shadow-xl/20 text-shadow-sm sm:text-xl bg-gradient-to-b from-[#e9615e] to-[#ec9956]"
            >
              Contact
            </motion.a>
          </BubbleWrapper>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
