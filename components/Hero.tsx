import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaArrowRight } from 'react-icons/fa'; // Example icon
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='relative pb-10 pt-20'>
      {/* Spotlight Effects */}
      <div className='absolute inset-0'>
        <Spotlight
          className='absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill='rgba(255, 255, 255, 0.8)'
        />
        <Spotlight
          className='absolute top-10 left-full h-[80vh] w-[50vw]'
          fill='rgba(255, 182, 193, 0.7)'
        />
        <Spotlight
          className='absolute top-28 left-80 h-[80vh] w-[50vw]'
          fill='rgba(173, 216, 230, 0.7)'
        />
      </div>

      {/* Background and Mask */}
      <div className="relative flex items-center justify-center h-screen w-full bg-gray-50">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-gray-50 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />

        {/* Image in the right corner */}
        <motion.div
          className='absolute top-2/3 right-4 transform -translate-y-1/2'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className='relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64'>
            <img
              src="/Ayele_Gobezie.jpg"
              alt="Ayele Gobezie Chekol"
              className='rounded-full object-contain w-full h-full'
            />
          </div>
          {/* Name and Degree Below the Photo */}
          <div className='relative top-4 mt-6 px-2 text-center'>
            <p className='text-gray-900 text-lg md:text-xl lg:text-2xl font-extrabold leading-tight'>
              Ayele Gobezie Chekol
            </p>
          </div>
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className='relative z-20 flex flex-col items-center justify-center my-20'>
        <div className='flex flex-col items-center text-center max-w-[60vw] md:max-w-2xl lg:max-w-3xl'>
          <TextGenerateEffect
            className='mt-4 text-3xl md:text-5xl lg:text-6xl font-bold'
            words="I'm Ayele, a passionate developer who transforms ideas into elegant solutions."
          />

          <p className='mt-4 text-base md:text-lg lg:text-xl text-gray-700'>
            Fullstack Web Developer dedicated to crafting exceptional web experiences.
          </p>

          <a href="#about">
            <MagicButton
              title='Explore My Work'
              icon={<FaArrowRight />}
              position='right'
              otherClasses='mt-6'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
