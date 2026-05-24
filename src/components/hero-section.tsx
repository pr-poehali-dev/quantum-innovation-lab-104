import { Bell } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "./theme-context"
import { themes } from "@/lib/themes"
import type { ContentItem } from "./landing-content"

type HeroSectionProps = {
  content: ContentItem
}

export function HeroSection({ content }: HeroSectionProps) {
  const { theme } = useTheme()
  const themeConfig = themes[theme]

  return (
    <>
      {/* School Name */}
      <div className={cn("text-center space-y-1", themeConfig.mutedForeground, themeConfig.fontClass)}>
        <p className="text-xs sm:text-sm uppercase tracking-widest opacity-70">
          {theme === "terminal"
            ? "// school: №183 | class: 11В"
            : "Школа с углублённым изучением отдельных предметов №183 имени Р. Алексеева"}
        </p>
      </div>

      {/* Badge */}
      <div
        className={cn(
          "inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition-all",
          themeConfig.muted,
          themeConfig.border,
          themeConfig.mutedForeground,
          themeConfig.fontClass,
          theme === "neon" && "shadow-[0_0_15px_rgba(34,211,238,0.3)] border-cyan-500/50",
          theme === "luxury" && "border-amber-500/30",
        )}
      >
        <Bell className="w-3 h-3 sm:w-4 sm:h-4" />
        {content.badge}
      </div>

      {/* Main Headline */}
      <div className="text-center space-y-3 sm:space-y-4">
        <h1
          className={cn(
            "text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance leading-[1.1]",
            themeConfig.foreground,
            themeConfig.fontClass,
          )}
        >
          {content.title}{" "}
          <span
            className={cn(
              "relative inline-block",
              theme === "neon" && "text-cyan-400 [text-shadow:0_0_40px_rgba(34,211,238,0.6)]",
              theme === "luxury" &&
                "bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent",
              theme === "glass" && "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
              theme === "retro" && "text-amber-700",
              theme === "terminal" && "text-green-300",
              (theme === "minimal-light" || theme === "monochrome" || theme === "dark") && themeConfig.foreground,
            )}
          >
            {content.highlight}
          </span>
        </h1>
        <p
          className={cn(
            "text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-pretty leading-relaxed px-2 sm:px-0",
            themeConfig.mutedForeground,
            themeConfig.fontClass,
          )}
        >
          {content.subtitle}
        </p>
      </div>

      {/* Features */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 flex-wrap">
        {content.features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm",
              themeConfig.mutedForeground,
              themeConfig.fontClass,
            )}
          >
            <feature.icon
              className={cn(
                "w-3.5 h-3.5 sm:w-4 sm:h-4",
                theme === "neon" && "text-cyan-400",
                theme === "luxury" && "text-amber-400",
                theme === "glass" && "text-indigo-500",
              )}
            />
            <span>{feature.text}</span>
          </div>
        ))}
      </div>
    </>
  )
}
