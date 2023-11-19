import Link from "next/link"
import dynamic from 'next/dynamic'
const PortfolioFilter5 = dynamic(() => import('@/components/elements/PortfolioFilter5'), {
    ssr: false,
})

export default function Projects() {
    return (
        <>
            <section className="projects-section-three alternate-background">
                <div className="auto-container">
                    <div className="sec-title-three text-center">
                        <h2>Our projects make uniqueness <br /> from others</h2>
                        <span className="text-decoration-three" />
                    </div>
                   <PortfolioFilter5/>
                </div>
            </section>
        </>
    )
}
