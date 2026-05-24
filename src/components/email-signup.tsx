import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "./theme-context"
import { themes } from "@/lib/themes"

export function SocialProof() {
  const { theme } = useTheme()
  const themeConfig = themes[theme]

  return (
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
  )
}
