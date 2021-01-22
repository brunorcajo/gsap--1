import React, { useEffect, useRef } from "react";
import "./styles.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Tecnologia",
    description:
      "É o conjunto de técnicas, habilidades, métodos e processos usados na produção de bens ou serviços, ou na realização objetivos"
  },
  {
    title: "Ciência",
    description:
      "Refere-se a qualquer conhecimento ou prática sistemáticos. Em sentido estrito, ciência refere-se ao sistema de adquirir conhecimento baseado no método científico bem como ao corpo organizado de conhecimento conseguido através de tais pesquisas"
  },
  {
    title: "Religião",
    description:
      "É um conjunto de sistemas culturais e de crenças, além de visões de mundo, que estabelece os símbolos que relacionam a humanidade com a espiritualidade e seus próprios valores morais."
  }
];

const App = () => {
  const cardAddSectionRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    console.log(revealRefs);
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `card=${index + 1}`,
            trigger: el,
            start: "top center+=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div className="app">
      <header className="app__header">
        <p>Scroll down to see sections</p>
      </header>
      <main className="app__main">
        {sections.map(({ title, description }) => (
          <div className="card" key={title} ref={cardAddSectionRef}>
            <h2 className="card__title">{title}</h2>
            <p className="card__description">{description}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
