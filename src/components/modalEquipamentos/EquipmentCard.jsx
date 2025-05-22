import React from 'react';
import styles from './ModalEquipamentos.module.css';

const EquipmentCard = ({ equipamento, tempoUso, onChange, onAdd }) => (
  <div className={styles.card}>
    <img src={equipamento.iconeUrl} alt={equipamento.nome} />
    <strong>{equipamento.nome}</strong>
    <input
      type="number"
      placeholder="Horas por dia"
      value={tempoUso}
      onChange={(e) => onChange(equipamento.id, e.target.value)}
    />
    <button onClick={onAdd}>Adicionar</button>
  </div>
);

export default EquipmentCard;
