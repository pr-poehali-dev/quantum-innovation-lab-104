import { cn } from "@/lib/utils"
import { useTheme } from "./theme-context"
import { themes } from "@/lib/themes"
import { ThemedCountdown } from "./themed-countdown"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type TimerSectionProps = {
  targetDate: Date
  days: string
  hours: string
  minutes: string
  seconds: string
  showSettings: boolean
  onToggleSettings: () => void
  onDaysChange: (v: string) => void
  onHoursChange: (v: string) => void
  onMinutesChange: (v: string) => void
  onSecondsChange: (v: string) => void
  onSetTimer: () => void
}

export function TimerSection({
  targetDate,
  days,
  hours,
  minutes,
  seconds,
  showSettings,
  onToggleSettings,
  onDaysChange,
  onHoursChange,
  onMinutesChange,
  onSecondsChange,
  onSetTimer,
}: TimerSectionProps) {
  const { theme } = useTheme()
  const themeConfig = themes[theme]

  return (
    <div className="w-full flex flex-col items-center gap-2 sm:gap-3">
      <p
        className={cn(
          "text-xs sm:text-sm uppercase tracking-widest",
          themeConfig.mutedForeground,
          themeConfig.fontClass,
        )}
      >
        {theme === "terminal" ? "// time_remaining:" : "До праздника"}
      </p>
      <ThemedCountdown targetDate={targetDate} />
      <button
        onClick={onToggleSettings}
        className={cn(
          "text-xs underline-offset-4 hover:underline transition-all",
          themeConfig.mutedForeground,
          themeConfig.fontClass,
        )}
      >
        {theme === "terminal" ? "// modify_timer" : "Настроить таймер"}
      </button>

      {showSettings && (
        <div
          className={cn(
            "flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl border transition-all duration-500 animate-in fade-in slide-in-from-top-2 w-full sm:w-auto",
            themeConfig.muted,
            themeConfig.border,
            theme === "neon" && "shadow-[0_0_30px_rgba(34,211,238,0.15)]",
            theme === "glass" && "backdrop-blur-xl bg-white/40",
          )}
        >
          <div className="grid grid-cols-4 gap-2 sm:flex sm:items-end sm:gap-3 sm:flex-wrap sm:justify-center w-full sm:w-auto">
            <div className="flex flex-col gap-1 sm:gap-1.5">
              <Label htmlFor="days" className={cn("text-[10px] sm:text-xs", themeConfig.mutedForeground)}>
                Дни
              </Label>
              <Input
                id="days"
                type="number"
                min="0"
                max="99"
                value={days}
                onChange={(e) => onDaysChange(e.target.value)}
                className={cn(
                  "w-full sm:w-16 text-center text-sm",
                  themeConfig.card,
                  themeConfig.cardForeground,
                  themeConfig.border,
                  themeConfig.fontClass,
                )}
              />
            </div>
            <div className="flex flex-col gap-1 sm:gap-1.5">
              <Label htmlFor="hours" className={cn("text-[10px] sm:text-xs", themeConfig.mutedForeground)}>
                Часы
              </Label>
              <Input
                id="hours"
                type="number"
                min="0"
                max="23"
                value={hours}
                onChange={(e) => onHoursChange(e.target.value)}
                className={cn(
                  "w-full sm:w-16 text-center text-sm",
                  themeConfig.card,
                  themeConfig.cardForeground,
                  themeConfig.border,
                  themeConfig.fontClass,
                )}
              />
            </div>
            <div className="flex flex-col gap-1 sm:gap-1.5">
              <Label htmlFor="minutes" className={cn("text-[10px] sm:text-xs", themeConfig.mutedForeground)}>
                Мин
              </Label>
              <Input
                id="minutes"
                type="number"
                min="0"
                max="59"
                value={minutes}
                onChange={(e) => onMinutesChange(e.target.value)}
                className={cn(
                  "w-full sm:w-16 text-center text-sm",
                  themeConfig.card,
                  themeConfig.cardForeground,
                  themeConfig.border,
                  themeConfig.fontClass,
                )}
              />
            </div>
            <div className="flex flex-col gap-1 sm:gap-1.5">
              <Label htmlFor="seconds" className={cn("text-[10px] sm:text-xs", themeConfig.mutedForeground)}>
                Сек
              </Label>
              <Input
                id="seconds"
                type="number"
                min="0"
                max="59"
                value={seconds}
                onChange={(e) => onSecondsChange(e.target.value)}
                className={cn(
                  "w-full sm:w-16 text-center text-sm",
                  themeConfig.card,
                  themeConfig.cardForeground,
                  themeConfig.border,
                  themeConfig.fontClass,
                )}
              />
            </div>
          </div>
          <button
            onClick={onSetTimer}
            className={cn(
              "w-full sm:w-auto px-5 py-2 rounded-lg font-medium transition-all duration-200",
              "hover:scale-105 active:scale-95",
              themeConfig.accent,
              themeConfig.accentForeground,
              themeConfig.fontClass,
              theme === "neon" && "shadow-[0_0_20px_rgba(34,211,238,0.5)]",
              theme === "luxury" && "shadow-[0_0_20px_rgba(251,191,36,0.3)]",
            )}
          >
            {theme === "terminal" ? "execute()" : "Задать"}
          </button>
        </div>
      )}
    </div>
  )
}
