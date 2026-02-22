import React from 'react'

const Use = () => {
    return (
        <section className="mt-10 px-4">
            <div className="max-w-2xl mx-auto text-center">
                
                <h2 className="text-3xl font-bold italic text-muted-foreground  mb-3">
                    How to use
                </h2>

                <p className="text-muted-foreground mb-8 lg:text-lg">
                    Simple, fast, and optimized for modern applications.
                </p>

                <div className="space-y-4">
                    
                    <div className="p-4 rounded-2xl border bg-muted/40 hover:bg-muted/60 transition">
                        <p className="font-medium  lg:text-2xl ">
                            Server-first approach
                        </p>
                        <p className="text-sm text-muted-foreground  lg:text-lg ">
                            Next Mahine Icon renders icons on the server with zero client-side JavaScript by default.
                        </p>
                    </div>

                    <div className="p-4 rounded-2xl border bg-muted/40 hover:bg-muted/60 transition">
                        <p className="font-medium lg:text-2xl">
                            Lightweight components
                        </p>
                        <p className="text-sm text-muted-foreground lg:text-lg">
                            Each icon is a React component that outputs an inline SVG for maximum performance.
                        </p>
                    </div>

                    <div className="p-4 rounded-2xl border bg-muted/40 hover:bg-muted/60 transition">
                        <p className="font-medium lg:text-2xl">
                            Tree-shakable
                        </p>
                        <p className="text-sm text-muted-foreground lg:text-lg">
                            Only imported icons are included in your bundle, keeping your app fast and clean.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Use