export function Notfound() {
    return (
        <section className="bg-black/85 h-screen flex items-center justify-center text-white text-center">
            <article className="pt-12 flex gap-4 flex-col">
                <img src="/notfoundimg.webp" alt="Will Smith en minecraft!" className="rounded-3xl" />
                <div>
                    <h2 className="text-4xl">404 - Not Found</h2>
                    <p className="text-2xl"><strong>Te confundiste capo!</strong></p>
                </div>
            </article>
        </section>
    )
}