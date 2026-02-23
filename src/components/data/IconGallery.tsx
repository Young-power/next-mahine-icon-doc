"use client";
import { useState } from "react";
import { icons, categories, IconItem, CategoryType } from "./icons";
import SIdeBar from "../sideBar/SIdeBar";
import Category from "./Category";
import { Search } from "next-mahine-icon";
import NotFoundIcon from "./NotFoundIcon";
import DetailBar from "./DetailBar";
import ZoomElement from "../motion/ZoomElement";
import { AnimatePresence } from "framer-motion";

export const IconGallery = () => {
    const [selectedIcon, setSelectedIcon] = useState<IconItem | null>(null);
    const [filter, setFilter] = useState<CategoryType>("all");




    const [searchValue, setSearchValue] = useState<string>('')

    const search = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setSearchValue(e.target.value)

    }




    const filteredIcons = icons
        .filter((icon) =>
            filter === "all" ? true : icon.category === filter
        )
        .filter((icon) =>
            icon.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            icon.category.toLowerCase().includes(searchValue.toLowerCase())
        );
    return (
        <div className="py-3">
            <div
                className="relative w-full max-w-md mx-auto mb-7">
                <input
                    type="text"
                    placeholder="Search icons..."
                    onChange={search}
                    className="w-full rounded-full border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-zinc-800/80 py-3 pl-5 pr-12 text-gray-900 dark:text-gray-100 shadow-sm backdrop-blur-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-400 dark:focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400/20 dark:focus:ring-gray-500/20"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-900 dark:bg-gray-100 p-2 text-white dark:text-black transition hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    <Search />
                </button>
            </div>
            {/* Filtre catégories mobile only*/}
            <div className="w-full grid grid-cols-3 gap-1 lg:hidden px-3 pb-7">
                <Category filt={filter} data={categories} func={setFilter} />
            </div>


            {/* Grid des icônes */}
          
            <div className="w-full h-89 lg:h-150 overflow-auto grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 lg:ml-24 gap-4">
                {filteredIcons.length > 0 ? filteredIcons.map((icon, index) => (
                    <div key={index}>
                        <ZoomElement >
                            <div
                                className={`flex flex-col items-center p-3 border rounded-lg cursor-pointer 
                                       ${selectedIcon === icon ? "border-2 border-blue-400 bg-blue-50 dark:bg-blue-900" : ""}
                                       hover:shadow-md hover:border-gray-300 transition-all duration-200 
                                       bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700`}
                                onClick={() => setSelectedIcon(icon)}
                            >
                                <icon.component className="w-8 h-8 text-gray-700 dark:text-gray-200 mb-2" />
                                <span
                                    className="text-xs text-center w-full truncate text-gray-900 dark:text-gray-100"
                                    title={icon.name}
                                >
                                    {icon.name}
                                </span>
                            </div>
                        </ZoomElement>
                    </div>
                )) : <NotFoundIcon />

                }
            </div>

            <SIdeBar filt={filter} data={categories} func={setFilter} />

            {/* Modal */}
            <AnimatePresence>
                {selectedIcon && (

                    <DetailBar select={selectedIcon} setSelect={setSelectedIcon} />

                )}
            </AnimatePresence>
        </div>
    );
};