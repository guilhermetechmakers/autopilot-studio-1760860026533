import * as React from "react"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const OTPInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
))
OTPInput.displayName = "OTPInput"

const OTPInputContext = React.createContext<OTPInputContextValue | null>(null)

const useOTPInputContext = () => {
  const context = React.useContext(OTPInputContext)
  if (!context) {
    throw new Error("useOTPInputContext must be used within an OTPInputProvider")
  }
  return context
}

type OTPInputContextValue = {
  value: string
  setValue: (value: string) => void
  maxLength: number
}

const OTPInputProvider = ({
  children,
  value,
  setValue,
  maxLength,
}: {
  children: React.ReactNode
  value: string
  setValue: (value: string) => void
  maxLength: number
}) => {
  return (
    <OTPInputContext.Provider value={{ value, setValue, maxLength }}>
      {children}
    </OTPInputContext.Provider>
  )
}

const OTPInputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2", className)}
    {...props}
  />
))
OTPInputGroup.displayName = "OTPInputGroup"

const OTPInputSlot = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    index: number
  }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = useOTPInputContext()
  const { value, setValue, maxLength } = inputOTPContext
  const [isFocused, setIsFocused] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    if (newValue.length <= 1) {
      setValue(value.slice(0, index) + newValue + value.slice(index + 1))
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && value[index] === "") {
      const prevIndex = index - 1
      if (prevIndex >= 0) {
        setValue(value.slice(0, prevIndex) + value.slice(prevIndex + 1))
      }
    }
  }

  return (
    <input
      ref={ref}
      value={value[index] || ""}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-center text-sm ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        isFocused && "ring-2 ring-ring ring-offset-2",
        className
      )}
      maxLength={1}
      {...props}
    />
  )
})
OTPInputSlot.displayName = "OTPInputSlot"

const OTPInputSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    aria-orientation="vertical"
    className={cn("flex h-10 w-6 items-center justify-center", className)}
    {...props}
  >
    <Dot className="h-4 w-4" />
  </div>
))
OTPInputSeparator.displayName = "OTPInputSeparator"

export {
  OTPInput,
  OTPInputContext,
  OTPInputGroup,
  OTPInputProvider,
  OTPInputSeparator,
  OTPInputSlot,
  useOTPInputContext,
}