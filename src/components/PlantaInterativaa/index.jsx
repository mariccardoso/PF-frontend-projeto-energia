'use client';
import { useState } from 'react';
import styles from './plantaInterativa.module.css';
import ModalEquipamentos from '../ModalEquipamentos/index.jsx';

const PlantaInterativa = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [comodoSelecionado, setComodoSelecionado] = useState(null);

  const abrirModal = (comodo) => {
    setComodoSelecionado(comodo);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setComodoSelecionado(null);
  };

  return (
    <div className={styles.container}>
      <img 
        src="/image/plantaCasa.png" 
        alt="Planta da casa" 
        className={styles.imagem} 
      />

      {/* Botões sobrepostos nos cômodos */}
      <button className={`${styles.comodo} ${styles.cozinha}`} onClick={() => abrirModal('Cozinha')}>Cozinha</button>
      <button className={`${styles.comodo} ${styles.sala}`} onClick={() => abrirModal('Sala')}>Sala</button>
      <button className={`${styles.comodo} ${styles.quarto}`} onClick={() => abrirModal('Quarto')}>Quarto</button>
      <button className={`${styles.comodo} ${styles.banheiro}`} onClick={() => abrirModal('Banheiro')}>Banheiro</button>

      {/* Modal */}
      <ModalEquipamentos 
        isOpen={modalAberto}
        onClose={fecharModal}
        comodo={comodoSelecionado}
      />
    </div>
  );
};

export default PlantaInterativa;
