'use client';
import { useState } from 'react';
import styles from './plantaInterativa.module.css';
import ModalEquipamentos from '../modalEquipamentos';
import { useEquipamentos } from '../context/EquipamentosContext';


const PlantaInterativa = () => {
  const [modalInfo, setModalInfo] = useState({ isOpen: false, comodo: '' });

  const abrirModal = (comodo) => setModalInfo({ isOpen: true, comodo });
  const fecharModal = () => setModalInfo({ isOpen: false, comodo: '' });

  return (
    <div className={styles.container}>
      <img src="image/plantaCasa.png" alt="Planta da casa" className={styles.imagem} />

      <div className={`${styles.comodo} ${styles.cozinha}`}>
        <button onClick={() => abrirModal("Cozinha")}>Cozinha</button>
      </div>

      <div className={`${styles.comodo} ${styles.sala}`}>
        <button onClick={() => abrirModal("Sala")}>Sala</button>
      </div>

      <div className={`${styles.comodo} ${styles.quarto}`}>
        <button onClick={() => abrirModal("Quarto")}>Quarto</button>
      </div>

      <div className={`${styles.comodo} ${styles.banheiro}`}>
        <button onClick={() => abrirModal("Banheiro")}>Banheiro</button>
      </div>
      <ModalEquipamentos 
        isOpen={modalInfo.isOpen}
        onClose={fecharModal}
        comodo={modalInfo.comodo}
    />

    </div>
  );
};

export default PlantaInterativa;
