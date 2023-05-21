export function Content() {
    return (
        <div className="max-w-8xl mx-auto px-8">
            <section id="home" className="">
                <div className="grid grid-cols-1 pt-12">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">
                            Hello! {" "}
                            <span className="text-firstColorAlt">I am</span>
                        </h3>
                        <h1 className="text-white text-5xl font-bold mb-2">Gabriel {' '}
                            <span className="text-white">
                                Naldi
                            </span>
                        </h1>
                        <h3 className="text-lg font-medium mb-5">
                            Full-stack {' '}
                            <span className="text-firstColor">Developer</span>
                        </h3>
                        <p className="text-textColor text-sm leading-6">
                            With knowledge in development of modern Websites, Services, mobile Apps and APIs. I offer the best projects resulting in quality work.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}