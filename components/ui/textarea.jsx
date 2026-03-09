import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-lg border border-white/10 bg-secondary/50 px-4 py-5 text-base placeholder:text-text-muted focus-visible:outline-none focus-visible:border-accent/60 focus-visible:shadow-[0_0_0_3px_rgba(34,211,238,0.08)] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
