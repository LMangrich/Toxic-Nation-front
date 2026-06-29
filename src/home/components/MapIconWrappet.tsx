import { useState } from "react";

type Variant = 'primary' | 'secondary';

interface MapIconWrapperProps {
  children: React.ReactNode;
  label: string;
  className?: string;
  variant?: Variant;
}

export const MapIconWrapper = ({ 
  children, 
  label, 
  className = "", 
  variant = 'primary' 
}: MapIconWrapperProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Theme Mapping
  const themes = {
    primary: {
      outerBorder: "border-soft-toxic-green",
      outerShadow: "shadow-map-icon-glow",
      innerBg: "bg-light-toxic-green/40",
      innerBorder: "border-toxic-green",
      hoverBorder: "group-hover:border-soft-toxic-green",
      innerShadow: "shadow-map-icon-glow",
      hoverBg: "group-hover:bg-light-toxic-green/40"
    },
    secondary: {
      outerBorder: "border-soft-toxic-purple",
      outerShadow: "shadow-soft-glow-purple",
      innerBg: "bg-toxic-purple/40",
      innerBorder: "border-toxic-purple",
      hoverBorder: "group-hover:border-soft-toxic-purple",
      innerShadow: "shadow-glow-purple",
      hoverBg: "group-hover:bg-toxic-purple/40"
    }
  };

  const t = themes[variant];

  return (
    <div 
      className={`group cursor-pointer transition-all duration-300 ${className}`}
      onMouseEnter={() => {
        setIsHovering(true);
        setHasInteracted(true);
      }}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={`absolute inset-0 -top-1 -left-1
          border-2 ${t.outerBorder} ${t.outerShadow}
          opacity-0 pointer-events-none
          p-5 sm:p-9
          group-hover:opacity-100
          ${t.hoverBg}
          group-hover:animate-box-bounce
      `} />

      <div className={`relative flex flex-col items-center justify-start
          ${t.innerBg} border-2 ${t.innerBorder} ${t.hoverBorder} p-4 sm:p-8
          ${t.innerShadow}
          ${isHovering 
              ? 'animate-inner-box-bounce' 
              : (hasInteracted ? 'animate-inner-box-unhover' : '')}
      `}>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            ${isHovering 
              ? 'animate-icon-bounce' 
              : (hasInteracted ? 'animate-icon-unhover' : '')}
          `}>
            {children}
          </div>

          <span className={`absolute bottom-0 -left-1.5 -right-1.5 opacity-0 
              group-hover:opacity-100 group-hover:animate-text-pop 
              text-14 text-white text-center leading-[1.1]
          `}>
              {label}
          </span>
      </div>
    </div>
  );
};