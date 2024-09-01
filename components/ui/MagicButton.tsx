import React from 'react';

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: 'left' | 'right'; // Explicitly define position options
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses = '', 
}) => {
  return (
    <button
      className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 rounded-lg p-[1px] focus:outline-none overflow-hidden ${otherClasses}`}
      onClick={handleClick}
    >
      <span
        className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />
      <span
        className={`inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${
          position === 'left' ? 'flex-row' : 'flex-row-reverse' // Adjust icon position based on 'left' or 'right'
        }`}
      >
        {icon && position === 'left' && <span className="mr-2">{icon}</span>}
        {icon && position === 'right' && <span className="ml-2">{icon}</span>}
        {title}
      </span>
    </button>
  );
};

export default MagicButton;
