import { FaLocationArrow, FaArrowUp, FaPhone } from "react-icons/fa";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      {/* Background Grid */}
      <div className="absolute inset-x-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="Background grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 mt-5 md:mt-10">
          Reach out to me and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className="flex flex-col gap-6 items-center mt-6">
          <a href="mailto:ayele.gobezie@gmail.com" aria-label="Email Ayele Gobezie">
            <MagicButton
              title="Email Me"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a 
            href="tel:+251943295750" 
            aria-label="Call Ayele Gobezie" 
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            <FaPhone size={18} />
            <span>Call Me: +251 943 295 750</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-16">
        {/* Follow Me Text */}
        <p className="text-white-200 mb-4 text-lg font-medium">Follow Me</p>

        <div className="flex gap-6 md:gap-8 items-center">
          {socialMedia.map(({ id, link, img }) => (
            <a
              key={id}
              href={link} // Assuming socialMedia contains a link property
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={img} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Add margin between social media and copyright */}
      <div className="mt-12 flex items-center justify-center">
        <p className="text-sm md:text-base font-light md:font-normal text-center">
          &copy; 2024 Ayele Gobezie
        </p>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg hover:from-blue-600 hover:to-purple-700 transition-transform transform hover:scale-105"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
