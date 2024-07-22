import { Link } from "react-router-dom";


export function Footer() {
    return (
        <>
            <footer className="bg-white flex justify-center flex-col p-4">
                <hr className="text-black w-3/4 mx-auto" />
                <section className="flex pt-6 justify-center">
                    <article className="flex items-center flex-wrap justify-around w-3/4">
                        <div className="w-[200px]">
                            <img src="/steve.webp" alt="Steve matando creeper" className="w-full" />
                        </div>
                        <div className="text-xl">
                            <Link to="/contact">
                                <strong>Contaco</strong>
                            </Link>
                        </div>
                    </article>
                </section>
            </footer>
        </>
    )
}