import React from 'react';
import Image from 'next/image';
import * as SimpleIcons from 'simple-icons';

interface TechItem {
  name: string;
  iconSlug?: string;
  customIcon?: React.ReactNode;
  customIconKey?: string;
  iconSize?: number;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

interface TechStackProps {
  categories: TechCategory[];
}

const TechStack: React.FC<TechStackProps> = ({ categories }) => {
  // Custom icons mapping
  const customIcons: Record<string, string> = {
    cursor: "/icons/tech/cursor.png",
    claudeCode: "/icons/tech/claude-code.png", 
    gemini: "/icons/tech/gemini.png",
    claude: "/icons/tech/claude.png",
    figma: "/icons/tech/figma.png",
    vscode: "/icons/tech/vscode.png"
  };

  const getIconComponent = (iconSlug: string, iconSize: number = 24) => {
    const icon = SimpleIcons[`si${iconSlug}` as keyof typeof SimpleIcons] as { hex: string; path: string } | undefined;
    if (!icon) return null;
    
    return (
      <svg
        className="w-6 h-6"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ color: `#${icon.hex}` }}
      >
        <path d={icon.path} />
      </svg>
    );
  };

  const getCustomIcon = (iconKey: string, iconSize: number = 24) => {
    const iconPath = customIcons[iconKey];
    if (!iconPath) {
      return <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-600">PNG</div>;
    }
    
    return (
      <Image 
        src={iconPath} 
        alt={iconKey}
        width={iconSize}
        height={iconSize}
        className="object-contain"
      />
    );
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="space-y-8">
        {categories.map((category, categoryIndex) => (
          <div key={category.title}>
            {/* Category Title */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {category.title}
            </h3>
            
            {/* Tech Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((tech) => {
                const iconSize = tech.iconSize || 24;
                
                return (
                  <div key={tech.name} className="flex items-center gap-4">
                    {/* Icon Container */}
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {tech.customIcon ? 
                        tech.customIcon : 
                        tech.customIconKey ? 
                          getCustomIcon(tech.customIconKey, iconSize) :
                          tech.iconSlug ? 
                            getIconComponent(tech.iconSlug, iconSize) : 
                            <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      }
                    </div>
                    
                    {/* Tech Name */}
                    <span className="text-lg font-medium text-gray-900">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
            
            {/* Separator Line (except for last category) */}
            {categoryIndex < categories.length - 1 && (
              <div className="border-b border-gray-200 mt-8"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;