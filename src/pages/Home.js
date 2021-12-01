import "../assets/style.css"
import Header from "../components/Header";
import Hero from "../components/Hero";
import Client from "../components/Clients";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default function Home() {
    return (
       <div className="body-wrap">
  <Header />
  <main className="site-content">
    <Hero />
    <Client />
   <Features />
   <Pricing />

  </main>
  <Footer />
</div>

    )
}
