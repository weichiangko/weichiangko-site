import React from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  logo?: React.ReactNode;
  isLast?: boolean;
}

interface TimelineProps {
  items: TimelineItemProps[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  subtitle, 
  date, 
  logo, 
  isLast = false 
}) => {
  return (
    <div className={`flex items-start ${!isLast ? 'relative' : ''}`}>
      <div className="w-2 h-2 bg-gray-600 rounded-full mr-4 relative z-10 mt-6"></div>
      <div className="flex items-start gap-4">
        {logo && (
          <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
            {logo}
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 mt-1">{subtitle}</p>
          <p className="text-gray-500 mt-1">{date}</p>
        </div>
      </div>
      {!isLast && (
        <div 
          className="absolute left-[3px] top-8 w-0.5 bg-gray-200" 
          style={{height: 'calc(100% + 2rem)'}}
        ></div>
      )}
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          date={item.date}
          logo={item.logo}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;