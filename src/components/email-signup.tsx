import { ArrowRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "./theme-context"
import { themes } from "@/lib/themes"
import { Input } from "@/components/ui/input"

type EmailSignupProps = {
  email: string
  cta: string
  onEmailChange: (v: string) => void
}

export function EmailSignup({ email, cta, onEmailChange }: EmailSignupProps) {
  const { theme } = useTheme()
  const themeConfig = themes[theme]

  return (
    <>
      {/* Email Form */}
      <div
        className={cn(
          "w-full max-w-md flex flex-col gap-2 sm:gap-3 p-2 rounded-2xl border transition-all",
          themeConfig.muted,
          themeConfig.border,
          theme === "glass" && "backdrop-blur-xl bg-white/40",
          theme === "neon" && "shadow-[0_0_20px_rgba(34,211,238,0.1)]",
        )}
      >
        <Input
          type="email"
          placeholder={theme === "terminal" ? "your@email.sh" : "Введите ваш email для приглашения"}
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className={cn(
            "flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none text-sm sm:text-base",
            themeConfig.cardForeground,
            themeConfig.fontClass,
            "placeholder:opacity-50",
          )}
        />
        <button
          className={cn(
            "w-full px-4 sm:px-6 py-2.5 font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base sm:py-1.5 rounded-lg",
            "hover:scale-[1.02] active:scale-[0.98]",
            themeConfig.accent,
            themeConfig.accentForeground,
            themeConfig.fontClass,
            theme === "neon" && "shadow-[0_0_25px_rgba(34,211,238,0.5)]",
            theme === "luxury" && "shadow-[0_0_25px_rgba(251,191,36,0.3)]",
          )}
        >
          {cta}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Social Proof */}
      <div
        className={cn(
          "flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 sm:pt-6",
          themeConfig.mutedForeground,
          themeConfig.fontClass,
        )}
      >
        <div className="flex -space-x-2">
          {[
            "/professional-woman-headshot.png",
            "/young-man-portrait-smiling.jpg",
            "/asian-woman-professional-photo.jpg",
            "/bearded-man-headshot.png",
            "/smiling-black-woman-portrait.png",
          ].map((src, i) => (
            <img
              key={i}
              src={src || "/placeholder.svg"}
              alt={`User ${i + 1}`}
              className={cn(
                "w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 object-cover",
                theme === "dark" || theme === "neon" || theme === "terminal" || theme === "luxury"
                  ? "border-zinc-800"
                  : "border-white",
              )}
            />
          ))}
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center gap-0.5 sm:gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className={cn(
                  "w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current",
                  theme === "luxury" && "text-amber-400",
                  theme === "neon" && "text-cyan-400",
                  theme === "retro" && "text-amber-600",
                  (theme === "minimal-light" ||
                    theme === "dark" ||
                    theme === "monochrome" ||
                    theme === "glass" ||
                    theme === "terminal") &&
                    "text-current",
                )}
              />
            ))}
          </div>
          <span className="text-[10px] sm:text-xs">
            {theme === "terminal" ? "// 847 guests_confirmed" : "Уже 847+ подтвердили участие"}
          </span>
        </div>
      </div>
    </>
  )
}
