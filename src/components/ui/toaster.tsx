"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { useToast } from "./use-toast"

const Toast = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof toastVariants> & {
      onClose: () => void
    }
>(({ className, variant, onClose, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    >
      <div className="flex-1">
        {props.children}
      </div>
      <button
        onClick={onClose}
        className="ml-4 p-1 rounded-full hover:bg-foreground/10 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
})
Toast.displayName = "Toast"

const toastVariants = cva(
  "relative flex w-full items-center p-4 rounded-lg shadow-lg overflow-hidden border border-border bg-background text-foreground",
  {
    variants: {
      variant: {
        default: "border-border bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export { Toast, toastVariants }

export function Toaster() {
  const { toasts, dismiss } = useToast()  // Get dismiss from useToast

  return (
    <div className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {toasts.map(({ id, title, description, variant }) => (
        <Toast
          key={id}
          variant={variant}
          className="mb-2 animate-in slide-in-from-right-full data-[swipe=move]:transition-none data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:animate-out data-[swipe=end]:fade-out-80 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=end]:duration-200"
          onClose={() => dismiss(id)}  // Use the dismiss function directly
        >
          <div className="grid gap-1">
            {title && (
              <div className="font-semibold [&+div]:text-sm">
                {title}
              </div>
            )}
            {description && (
              <div className="text-sm opacity-90">
                {description}
              </div>
            )}
          </div>
        </Toast>
      ))}
    </div>
  )
}