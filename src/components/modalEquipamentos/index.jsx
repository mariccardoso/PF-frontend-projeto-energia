import React, { useEffect, useState } from 'react';
import styles from './ModalEquipamentos.module.css';
import EquipmentCard from './EquipmentCard.jsx';

const ModalEquipamentos = ({ isOpen, onClose, comodo }) => {
  const [equipamentos, setEquipamentos] = useState([]);
  const [tempoUso, setTempoUso] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      fetch(`http://localhost:3000/equipamentos`) // Ajuste para a URL da sua API
        .then(res => res.json())
        .then(data => {
          setEquipamentos(data);
          setLoading(false);
        });
    }
  }, [isOpen]);

  const handleInputChange = (id, tempo) => {
    setTempoUso(prev => ({ ...prev, [id]: tempo }));
  };

  const adicionarEquipamento = (equipamento) => {
    const tempo = tempoUso[equipamento.id];
    if (!tempo) return alert('Informe o tempo de uso');

    // Aqui você enviaria para o backend a associação do equipamento ao cômodo
    console.log('Adicionar ao cômodo:', comodo, equipamento.nome, tempo + 'h');
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Adicionar Equipamentos - {comodo}</h2>
        {loading ? (
          <p>Carregando equipamentos...</p>
        ) : (
          <div className={styles.grid}>
            {equipamentos.map(eq => (
              <EquipmentCard
                key={eq.id}
                equipamento={eq}
                tempoUso={tempoUso[eq.id] || ''}
                onChange={handleInputChange}
                onAdd={() => adicionarEquipamento(eq)}
              />
            ))}
          </div>
        )}
        <button className={styles.close} onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default ModalEquipamentos;
