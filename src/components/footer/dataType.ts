import { Github, Package, Bug, Users, MahineIconType} from "next-mahine-icon"

export type FooterLink = {
  label: string
  href: string
  icon: MahineIconType
}



export const communityLinks: FooterLink[] = [
  {
    label: "GitHub",
    href: "#",
    icon: Github,
  },
  {
    label: "NPM",
    href: "#",
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
