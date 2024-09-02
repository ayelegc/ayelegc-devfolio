import { FaLocationArrow, FaArrowUp, FaPhone } from "react-icons/fa";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full pt-20 pb-10 bg-white text-black flex flex-col min-h-screen" id="contact">
      {/* Background Grid */}
      <div className="absolute inset-x-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="Background grid"
          className="w-full h-full opacity-20"
        />
      </div>

      <div className="flex flex-col items-center text-center flex-grow">
        <h1 className="heading lg:max-w-[45vw] text-black">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-gray-800 mt-5 md:mt-10">
          Reach out to me and let's discuss how I can help you achieve your goals.
        </p>
        <div className="flex flex-col gap-6 items-center mt-6">
          <a href="mailto:ayele.gobezie@gmail.com" aria-label="Email Ayele Gobezie">
            <MagicButton
              title="Email Me"
              icon={<FaLocationArrow className="text-black" />}
              position="right"
            />
          </a>
          <a 
            href="tel:+251943295750" 
            aria-label="Call Ayele Gobezie" 
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-black rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            <FaPhone size={18} className="text-black" />
            <span>Call Me: +251 943 295 750</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-16">
        {/* Follow Me Text */}
        <p className="text-gray-800 mb-4 text-lg font-medium">Follow Me</p>

        <div className="flex gap-6 md:gap-8 items-center">
          {socialMedia.map(({ id, link, img }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center bg-black-100 rounded-lg border border-gray-300"
            >
              <img src={img} width={20} height={20} className="text-black" />
            </a>
          ))}
        </div>

        {/* Google Maps Embed */}
        <div className="mt-8 w-full">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15699.307205698358!2d37.7837775!3d8.1865777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b88dc4b3d783d%3A0x1f6894d4376be650!2sWolkite%20University!5e0!3m2!1sen!2set!4v1632615098782!5m2!1sen!2set"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Wolkite University Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-gradient-to-br from-blue-200 to-purple-300 text-black shadow-lg hover:from-blue-300 hover:to-purple-400 transition-transform transform hover:scale-105"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={24} className="text-black" />
      </button>

      {/* Copyright Section */}
      <div className="bg-black text-white py-3 text-center mt-auto">
        <p className="text-sm md:text-base font-light md:font-normal">
          Wolkite University, Ethiopia<br />
          &copy; 2024 Ayele Gobezie
        </p>
      </div>
    </footer>
  );
};

export default Footer;
