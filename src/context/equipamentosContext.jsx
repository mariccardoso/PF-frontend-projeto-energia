'use client';
import { createContext, useContext, useState } from 'react';

const EquipamentosContext = createContext();

export const EquipamentosProvider = ({ children }) => {
  const [equipamentosPorComodo, setEquipamentosPorComodo] = useState({});

  const adicionarEquipamento = (comodo, equipamento) => {
    setEquipamentosPorComodo((prev) => ({
      ...prev,
      [comodo]: [...(prev[comodo] || []), equipamento],
    }));
  };

  return (
    <EquipamentosContext.Provider value={{ equipamentosPorComodo, adicionarEquipamento }}>
      {children}
    </EquipamentosContext.Provider>
  );
};

export const useEquipamentos = () => useContext(EquipamentosContext);
