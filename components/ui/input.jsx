import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[48px] w-full rounded-lg border border-white/10 focus:border-accent/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.08)] font-light bg-secondary/50 px-4 py-5 text-base placeholder:text-text-muted outline-none transition-all duration-300",
        className
      )}
      ref={ref}
      {...props} />
  );
})
Input.displayName = "Input"

export { Input }
