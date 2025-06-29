import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-8">

      {/* Bottom Line */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ibtisum Raian. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
