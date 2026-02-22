"use client"
import CodeBlockLight from "./CodeBlockLight"

const Exemple = () => {
  return (
    <section id="exemples" className="max-w-xl mx-auto  space-y-10 mt-3">

      <p className=" text-lg  lg:text-xl font-semibold italic ml-3">Examples</p>

      <CodeBlockLight
        filename="mahineIcon_exemple.ts"
        code={`import { MahineIcon } from 'next-mahine-icon';

// Usage
const App = () => {
  return <MahineIcon  width={30} height={30} className="text-blue-500" />;
};

export default App;`}
      />



      <h2 className="text-lg italic  font-semibold mb-4 ml-3">How Using <span className="text-red-500">MahineIconType</span></h2>
      <CodeBlockLight
        filename="mahineIcon_exemple.ts"
        code={`
import { Github, Package, MahineIconType } from "next-mahine-icon"

type FooterLink = {
  label: string
  href: string
  icon: MahineIconType
}

const footerLinks: FooterLink[] = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "Packages", href: "/packages", icon: Package },
]

const Footer = () => (
  <footer className="p-4 border-t">
    <ul className="flex gap-4">
      {footerLinks.map((link, i) => {
        const Icon = link.icon
        return (
          <li key={i} className="flex items-center gap-1">
            <Icon width={20} height={20} />
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        )
      })}
    </ul>
  </footer>
)

export default Footer

  `}
      />


<h2 className="text-lg italic font-semibold mb-4 ml-3">
  How Using <span className="text-green-500">In Server Component</span>
</h2>

<p className="text-sm text-gray-600 dark:text-gray-400 ml-3 mb-4">
  In a server component, icons are rendered as static UI. You cannot use interactive
  events like <code className="mx-1 px-1 bg-gray-200 dark:bg-zinc-800 rounded">onClick</code>.
</p>
      <CodeBlockLight
  filename="mahineIcon_server.tsx"
  code={`
import { MahineIcon } from "next-mahine-icon";

const Exemple = () => {
  return (
    <div>
      <MahineIcon width={30} height={30} className="text-blue-400" />
    </div>
  );
};

export default Exemple;
`}
/>


<h2 className="text-lg italic font-semibold mb-4 ml-3">
  How Using <span className="text-red-500">In Client Component</span>
</h2>

<p className="text-sm text-gray-600 dark:text-gray-400 ml-3 mb-4">
  In a client component, wrap your icon inside an interactive element (like a
  <code className="mx-1 px-1 bg-gray-200 dark:bg-zinc-800 rounded">button</code> or
  <code className="mx-1 px-1 bg-gray-200 dark:bg-zinc-800 rounded">span</code>) to handle events like onClick.
</p><CodeBlockLight
  filename="mahineIcon_onclick.tsx"
  code={`
"use client";

import { MahineIcon } from "next-mahine-icon";

const Exemple = () => {
  const handleClick = () => {
    alert("Icon clicked 🚀");
  };

  return (
    <div>
      <button onClick={handleClick}>
        <MahineIcon width={30} height={30} className="text-blue-400 cursor-pointer" />
      </button>
    </div>
  );
};

export default Exemple;
`}
/>





    </section>
  )
}

export default Exemple
