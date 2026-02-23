import { Github, Package, Bug, Users, MahineIconType} from "next-mahine-icon"

export type FooterLink = {
  label: string
  href: string
  icon: MahineIconType
}



export const communityLinks: FooterLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Young-power/next-mahine-icon",
    icon: Github,
  },
  {
    label: "NPM",
    href: "https://www.npmjs.com/package/next-mahine-icon",
    icon: Package,
  },
  {
    label: "Issues",
    href: "#",
    icon: Bug,
  },
  {
    label: "Contributing",
    href: "#",
    icon: Users,
  },
]
