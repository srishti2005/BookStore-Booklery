import React, { useRef } from "react";

function Contact({ footerRef }) {
  const handleScrollToFooter = () => {
    if (footerRef && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="contact-section p-6">
      <button
        onClick={handleScrollToFooter}
        className="bg-purple-700 text-yellow-400 px-4 py-2 rounded-full hover:bg-purple-800 hover:text-yellow-500 duration-200"
      >
        Contact Us
      </button>
    </div>
  );
}

export default Contact;
