import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home14/Banner"
import Chooseus from "@/components/sections/home14/Chooseus"
import Feature from "@/components/sections/home14/Feature"
import Process from "@/components/sections/home14/Process"
import Projects from "@/components/sections/home14/Projects"
import About from "@/components/sections/home14/About"
export default function Home() {

    return (
        <>
            <Layout headerStyle={14} footerStyle={14} wrapperCls="home_14">
                <Banner />
                <Feature />
                <About/>
                <Process />
                <Chooseus />
                <Projects />
            </Layout>
        </>
    )
}