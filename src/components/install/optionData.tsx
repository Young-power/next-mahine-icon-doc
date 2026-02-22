import { Npm, Pnpm, Yarn,  } from "next-mahine-icon";

export type PackageManager = "NPM" | "YARN" | "PNPM";

export interface OptionType {
    item: PackageManager;
    value: string;
    icon: React.ReactNode
}

export const options: OptionType[] = [
    {
        item: "NPM",
        value: "npm install next-mahine-icon",
        icon: <Npm width={30} height={30} className="text-red-500 " />

    },
    {
        item: "YARN",
        value: "yarn add next-mahine-icon",
        icon: <Yarn width={30} height={30} className="text-sky-500 " />
    },
    {
        item: "PNPM",
        value: "pnpm add next-mahine-icon",
        icon: <Pnpm width={30} height={30} className="text-orange-500" />

    }
];
