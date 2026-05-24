import { useState } from "react"
import { ThemeSwitcher } from "./theme-switcher"
import { useTheme } from "./theme-context"
import { themes } from "@/lib/themes"
import { cn } from "@/lib/utils"
import { landingContent } from "./landing-content"
import { HeroSection } from "./hero-section"
import { TimerSection } from "./timer-section"
import { EmailSignup } from "./email-signup"

export function LandingPage() {
  const { theme } = useTheme()
  const themeConfig = themes[theme]

  const [targetDate, setTargetDate] = useState<Date>(() => {
    return new Date("2026-05-26T10:00:00")
  })

  const [days, setDays] = useState("7")
  const [hours, setHours] = useState("0")
  const [minutes, setMinutes] = useState("0")
  const [seconds, setSeconds] = useState("0")
  const [email, setEmail] = useState("")
  const [showSettings, setShowSettings] = useState(false)

  const handleSetTimer = () => {
    const newTarget = new Date()
    newTarget.setDate(newTarget.getDate() + Number.parseInt(days || "0"))
    newTarget.setHours(newTarget.getHours() + Number.parseInt(hours || "0"))
    newTarget.setMinutes(newTarget.getMinutes() + Number.parseInt(minutes || "0"))
    newTarget.setSeconds(newTarget.getSeconds() + Number.parseInt(seconds || "0"))
    setTargetDate(newTarget)
    setShowSettings(false)
  }

  const currentContent = landingContent[theme]

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col transition-all duration-500 relative overflow-hidden",
        themeConfig.background,
      )}
    >
      {/* Subtle background decoration */}
      {theme === "neon" && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      )}
      {theme === "glass" && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-300/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-300/30 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
      )}
      {theme === "luxury" && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/2 w-[800px] h-[400px] bg-gradient-to-r from-amber-500/5 via-yellow-500/10 to-amber-500/5 rounded-full blur-3xl -translate-x-1/2" />
        </div>
      )}

      {/* Header with Theme Switcher */}
      <header className="relative z-50 w-full">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center text-center justify-center">
          <ThemeSwitcher />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="max-w-4xl w-full flex flex-col items-center gap-6 sm:gap-10">
          <HeroSection content={currentContent} />

          <TimerSection
            targetDate={targetDate}
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            showSettings={showSettings}
            onToggleSettings={() => setShowSettings(!showSettings)}
            onDaysChange={setDays}
            onHoursChange={setHours}
            onMinutesChange={setMinutes}
            onSecondsChange={setSeconds}
            onSetTimer={handleSetTimer}
          />

          <EmailSignup
            email={email}
            cta={currentContent.cta}
            onEmailChange={setEmail}
          />
        </div>
      </main>

      {/* Footer */}
      <footer
        className={cn(
          "relative z-10 py-6 sm:py-8 text-center border-t px-4",
          themeConfig.border,
          themeConfig.mutedForeground,
          themeConfig.fontClass,
        )}
      >
        <p className="text-xs sm:text-sm">
          {theme === "terminal"
            ? "© 2025 // last_bell_ceremony | with --love"
            : "© 2025 · Последний звонок · С любовью для выпускников"}
        </p>
      </footer>
    </div>
  )
}
