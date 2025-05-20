import Image from "next/image";
import styles from "./page.module.css";
import { Yaldevi } from "next/font/google";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import PlantaInterativa from "@/components/plantaInterativa";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* COMPONENTE HEADER */}
      <header className={styles.header}>
        <h2 className={styles.logo}> 
          Consumo <span className={styles.logoSpan}> Energia</span>
        </h2>
        <nav className={styles.navbar}>
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
              <a href="#" className={styles.navbarLink}>Home</a>
            </li>
            <li className={styles.navbarItem}>
              <a href="#" className={styles.navbarLink}>About</a>
            </li>
            <li className={styles.navbarItem}>
              <a href="#" className={styles.navbarLink}>Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.socialMedia}>
          <a href="#" className={styles.socialMediaLink}>
          <Instagram color="#8000ff" />
          </a>
          <a href="#" className={styles.socialMediaLink}>
          <Facebook color="#8000ff" />
          </a>
          <a href="#" className={styles.socialMediaLink}>
            <Linkedin color="#8000ff" />
          </a>
        </div>
      </header>

      {/* COMPONENTE HERO */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}> Slogan Chamativo Aqui</h1>
        <h3 className={styles.heroSubtitle}>Simule o seu Ccnsumo de Energia</h3>
        <p className={styles.heroDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={styles.heroButtons}>
          <a href="#" className={styles.heroButton}>Saiba Mais</a>
          <a href="#" className={styles.heroButton}>Simule seu consumo</a>
        </div>
      <section className={styles.heroImageSection}>
        <img src="/image/hero.png" alt="Hero Image" className={styles.heroImage} />
        <div className={styles.heroImageGradient}></div>
      </section>

      </section>

      {/* COMPONENTE SIMULADOR */}
      <PlantaInterativa /> 
    </main>
  );
}
