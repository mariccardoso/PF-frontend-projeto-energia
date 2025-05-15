import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      {/*HEADER COMPONENT*/}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" className={styles.logoImage} />
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>Simulador</li>
            <li className={styles.navItem}>Resultados</li>
            <li className={styles.navItem}>Sugestões</li>
          </ul>
        </nav>
        <div className={styles.contact}>
          <a href="mailto: mariana.c.cardoso@aluno.senai.br" className={styles.contactLink}>
            Contato
          </a>
        </div>
      </header>
      {/*MAIN CONTENT*/}
      <div className={styles.mainSection}>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>Simulador de Consumo de Energia Elétrica</h1>
          <p className={styles.description}>
            Este simulador foi desenvolvido para ajudar você a entender e calcular o consumo de energia elétrica em sua residência.
          </p>
          <button className={styles.startButton}>Começar</button>
        </div>
        <div className={styles.imagesContainer}>
          <div className={styles.topImages}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBz3yvCbNQ3EEWmMKJi-3z8DzjW5a210hjbg&s" alt="Imagem 1" className={styles.image1} />
            <img src="https://origoenergia.com.br/blog/wp-content/uploads/2022/11/energia-limpa-1-1024x683.jpg" alt="Imagem 2" className={styles.image2} />
          </div>
          <div className={styles.bottomImages}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIlaJdyBedE7u7ByKeCVrsklQHi-8c32zc2x3CjDMl06GBUbF-J-brW9LzoeVcjm3j2k&usqp=CAU" alt="Imagem 3" className={styles.image4} />
            <img src="https://solucoes.edp.com.br/media/b3nnhze3/pauta-14-energia-solar.webp" alt="Imagem 4" className={styles.image3}/>
          </div>  
        </div>
      </div>

      {/*SIMULATOR COMPONENT*/}
      <div className={styles.simulatorSection}>
        <h2 className={styles.simulatorTitle}>Simulador de Consumo</h2>
        <p className={styles.simulatorDescription}>
          Utilize nosso simulador para calcular o consumo de energia elétrica em sua residência.
        </p>
        <div className={styles.simulatorContainer}>
          <div className={styles.simulatorInterativeHouse}>
            <img src="https://www.energia.com.br/wp-content/uploads/2021/10/energia-eficiente.jpg" alt="Casa" className={styles.houseImage} />
          <div className={styles.simulatorInputs}>
          <div className={styles.energyInfo}>
            <h3 className={styles.energyInfoTitle}>Informações de Consumo</h3>
            <p className={styles.energyInfoText}>Consumo Total: 0 kWh</p>
            <p className={styles.energyInfoText}>Custo Total: R$ 0,00</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    </main>
  );
}
