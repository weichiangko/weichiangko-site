import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  asChild?: boolean;
}

export function AnimatedButton({ 
  children, 
  className, 
  variant = "outline",
  asChild = true,
  ...props 
}: AnimatedButtonProps) {
  return (
    <Button 
      variant={variant} 
      asChild={asChild}
      className={cn(
        "group transition-all duration-200 ease-in-out",
        className
      )}
      {...props}
    >
      <span className="flex items-center">
        {children}
        <span className="overflow-hidden transition-all duration-200 ease-in-out w-0 group-hover:w-6">
          <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out" />
        </span>
      </span>
    </Button>
  );
}