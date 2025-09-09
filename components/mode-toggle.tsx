"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    console.log("[v0] Theme toggle mounted, current theme:", theme)
  }, [])

  React.useEffect(() => {
    console.log("[v0] Theme changed to:", theme)
  }, [theme])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-9 h-9">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const toggleTheme = () => {
    console.log("[v0] Toggle clicked, current theme:", theme)
    const newTheme = theme === "light" ? "dark" : "light"
    console.log("[v0] Setting theme to:", newTheme)
    setTheme(newTheme)
  }

  return (
    <Button variant="ghost" size="sm" className="w-9 h-9" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
