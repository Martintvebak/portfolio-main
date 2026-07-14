import Section from "../components/Section";
import Swiper from "../components/Swiper";
import Competencies from "../components/Competencies";
import ScrollText from "../components/Scroll-text";
import Fade from "../components/Fade";

export default function Home() {
  return (
<main>
  <section className="hero-background-image">
    <Fade>
        <Section
        subtitle="Hej, I'm Martin"
        title="Multimedia Designer"
        tagline="I'm a Danish Multimedia Designer who loves creating beautiful, user-centered digital experiences. I specialize in UX/UI and visual design, with a genuine passion for graphic design. I combine strategic thinking with creative execution to bring ideas to life."
        image="./img/big-me.webp"
        className="home-hero"
        />
    </Fade>
  </section>
    <Swiper /> 
    <Competencies />
    <Section
    title="Want to know more?"
    image="./img/draw-water.webp"
    className="more-about-me"
    link={{ text: "LEARN MORE", href: "/about" }}
    textClassName="section-text"
    />
  <ScrollText />
<Section
  title="Let's work together!"
  image="./img/blue-shirt.webp"
  imageSmall="./img/big-me.webp"
  className="work-together"
  link={{ text: "CONTACT ME", href: "/contact" }}
  textClassName="section-text"
/>

</main>


  );
}

