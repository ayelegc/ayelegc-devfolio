import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-lg transition duration-300 shadow-md dark:shadow-none p-6 bg-gray-100 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-300">
        {icon}
        <div className="font-sans font-bold text-indigo-600 dark:text-indigo-400 mb-3 mt-4 text-2xm">
          {title}
        </div>
        <div className="font-sans font-normal text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
