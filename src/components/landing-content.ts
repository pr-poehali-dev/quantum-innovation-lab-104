import { Sparkles, Zap, Shield } from "lucide-react"
import type { ThemeMode } from "@/lib/themes"

export type ContentItem = {
  badge: string
  title: string
  highlight: string
  subtitle: string
  cta: string
  features: { icon: typeof Sparkles; text: string }[]
}

export const landingContent: Record<ThemeMode, ContentItem> = {
  "minimal-light": {
    badge: "Торжественное событие",
    title: "Последний",
    highlight: "звонок",
    subtitle:
      "Совсем скоро прозвенит самый важный звонок в их жизни. Не пропусти этот особенный момент.",
    cta: "Получить приглашение",
    features: [
      { icon: Sparkles, text: "Торжество" },
      { icon: Zap, text: "Живое выступление" },
      { icon: Shield, text: "Незабываемо" },
    ],
  },
  dark: {
    badge: "Скоро праздник",
    title: "Последний",
    highlight: "звонок",
    subtitle: "Финальная страница школьной жизни. Встречаем её вместе — ярко и с душой.",
    cta: "Прийти на праздник",
    features: [
      { icon: Sparkles, text: "Торжественно" },
      { icon: Zap, text: "Ярко" },
      { icon: Shield, text: "С душой" },
    ],
  },
  retro: {
    badge: "Приглашаем на праздник",
    title: "Последний",
    highlight: "звонок",
    subtitle: "Тёплый и торжественный праздник, который останется в памяти на всю жизнь.",
    cta: "Подтвердить присутствие",
    features: [
      { icon: Sparkles, text: "Тепло и уют" },
      { icon: Zap, text: "Живая музыка" },
      { icon: Shield, text: "Память навсегда" },
    ],
  },
  neon: {
    badge: "[ ФИНАЛЬНЫЙ ЗВОНОК ]",
    title: "ПОСЛЕДНИЙ",
    highlight: "ЗВОНОК",
    subtitle: "// Торжество. Выпускники. Счастье. Впереди — целая жизнь.",
    cta: "ПРИНЯТЬ ПРИГЛАШЕНИЕ",
    features: [
      { icon: Sparkles, text: "ЯРКИЙ ПРАЗДНИК" },
      { icon: Zap, text: "ЖИВОЕ ШОУ" },
      { icon: Shield, text: "НЕЗАБЫВАЕМО" },
    ],
  },
  monochrome: {
    badge: "Приглашение",
    title: "Последний",
    highlight: "звонок",
    subtitle: "Торжественный финал школьного пути. Сдержанно, элегантно, по-настоящему.",
    cta: "Подтвердить участие",
    features: [
      { icon: Sparkles, text: "Торжественно" },
      { icon: Zap, text: "Памятно" },
      { icon: Shield, text: "Искренне" },
    ],
  },
  glass: {
    badge: "Особый день",
    title: "Последний",
    highlight: "звонок",
    subtitle: "Лёгкий, светлый и радостный праздник. Для тех, кто делает первый шаг во взрослую жизнь.",
    cta: "Прийти на праздник",
    features: [
      { icon: Sparkles, text: "Светло" },
      { icon: Zap, text: "Радостно" },
      { icon: Shield, text: "Трогательно" },
    ],
  },
  terminal: {
    badge: "> event: last_bell",
    title: "$ ring",
    highlight: "--final",
    subtitle: "// школа завершена. выпускники готовы. церемония начнётся по расписанию...",
    cta: "$ rsvp --confirm",
    features: [
      { icon: Sparkles, text: "--ceremony" },
      { icon: Zap, text: "--live_show" },
      { icon: Shield, text: "--memories" },
    ],
  },
  luxury: {
    badge: "Торжественное приглашение",
    title: "Последний",
    highlight: "звонок",
    subtitle:
      "Изысканное торжество в честь выпускников. Незабываемый праздник с особой атмосферой.",
    cta: "Принять приглашение",
    features: [
      { icon: Sparkles, text: "Торжественно" },
      { icon: Zap, text: "Премиально" },
      { icon: Shield, text: "Эксклюзивно" },
    ],
  },
}
