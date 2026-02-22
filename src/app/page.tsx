import { IconGallery } from "@/components/data/IconGallery";
import ButtonTop from "@/components/goTop/ButtonTop";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen 
                     bg-zinc-50 dark:bg-zinc-900 
                     font-sans text-zinc-900 dark:text-zinc-100">
      <ButtonTop />
      
      {/* Hero avec couleurs harmonisées au dark mode */}
      <div className="bg-zinc-50 dark:bg-zinc-900">
        <Hero />
      </div>

      <div className="max-w-7xl mx-auto px-4 ">
        {/* IconGallery devrait gérer ses propres boutons dark mode */}
        <IconGallery />
      </div>
    </main>
  );
}