import React, { useState } from 'react';
import styles from './modalEquipamentos.module.css';

const ModalEquipamentos = ({ isOpen, onClose, comodo }) => {
  const [equipamento, setEquipamento] = useState({
    nome: '',
    potencia: '',
    tempoUso: '',
  });

  const [equipamentosAdicionados, setEquipamentosAdicionados] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEquipamento((prev) => ({ ...prev, [name]: value }));
  };

  const adicionarEquipamento = () => {
    if (!equipamento.nome || !equipamento.potencia || !equipamento.tempoUso) return;
    setEquipamentosAdicionados((prev) => [...prev, equipamento]);
    setEquipamento({ nome: '', potencia: '', tempoUso: '' });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Equipamentos - {comodo}</h2>

        <div className={styles.formulario}>
          <input
            type="text"
            name="nome"
            placeholder="Nome do equipamento"
            value={equipamento.nome}
            onChange={handleChange}
          />
          <input
            type="number"
            name="potencia"
            placeholder="Potência (W)"
            value={equipamento.potencia}
            onChange={handleChange}
          />
          <input
            type="number"
            name="tempoUso"
            placeholder="Tempo de uso (h/dia)"
            value={equipamento.tempoUso}
            onChange={handleChange}
          />
          <button onClick={adicionarEquipamento}>Adicionar</button>
        </div>

        <div className={styles.lista}>
          {equipamentosAdicionados.map((eq, idx) => (
            <div key={idx} className={styles.itemEquipamento}>
              <strong>{eq.nome}</strong> - {eq.potencia}W - {eq.tempoUso}h/dia
            </div>
          ))}
        </div>

        <button onClick={onClose} className={styles.fechar}>Fechar</button>
      </div>
    </div>
  );
};

export default ModalEquipamentos;
