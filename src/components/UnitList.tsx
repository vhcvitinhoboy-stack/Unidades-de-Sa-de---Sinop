import React from 'react';
import { HealthUnit } from '../App';
import UnitCard from './UnitCard';

interface UnitListProps {
  units: HealthUnit[];
}

const UnitList: React.FC<UnitListProps> = ({ units }) => {
  return (
    <div>
      {units.map((unit, index) => (
        <UnitCard key={index} unit={unit} />
      ))}
    </div>
  );
};

export default UnitList;
