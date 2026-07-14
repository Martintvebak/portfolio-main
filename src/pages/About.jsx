import Top from "../components/Top";
import Section from "../components/Section";
import Work from "../components/Work";
import Art from "../components/Art";

export default function About() {
  return (
   <section>
     <Top />
      <Section
       title="Who am I?"
       tagline="I'm Martin Andersen, a Multimedia Designer from Denmark, graduated from Business Academy Aarhus. I'm passionate about UX/UI and visual design, and I love creating digital experiences that are both beautiful and functional. I also enjoy working with graphic design and exploring new creative possibilities."
       tagline2="I’m especially passionate about UX & Design, as it allows me to craft digital experiences where creativity meets functionality. Along the way, I also discovered an interest in programming, which allows me to bring my designs to life."
       tagline3="I also like a good team where you can spark new ideas together and even come with different perspectives. This motivates me and inspires me to push even further with the next project."
       image="./img/pc-water.webp"
       className="who-am-i"
      textClassName="section-text2"
     />
      <Work />
      <Section
       title="Fun facts"
       tagline="I create under the alias “Tvebak”. The name goes back to my childhood, when my parents used to call me “Tvebak”, which is the Danish word for crispy, double-baked bun. It stuck with me, and now I use it as my creative identity, which you can see in my logo. "
       tagline2="I did an internship in the Netherlands where I worked on real design projects and learned so much. The experience, the culture, and the collaborative Dutch work environment really shaped how I approach design and teamwork today."
       image="./img/logo.webp"
       className="fun-facts"
       textClassName="section-text2"
     />
      <Art />
   </section>
  );
}