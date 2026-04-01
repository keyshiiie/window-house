// components/MainAdvantages.tsx
import React from 'react';
import AdvantageCard from './AdvantageCard';
import { advantagesData } from '../data/advantagesData';
import styles from '../main.module.scss';

interface MainAdvantagesProps {
    title?: string;
}

const MainAdvantages: React.FC<MainAdvantagesProps> = ({ 
}) => {
    return (
        <div className={styles.advantages}>
            <div className={styles.advantages__grid}>
                {advantagesData.map(advantage => (
                    <AdvantageCard 
                        key={advantage.id} 
                        advantage={advantage} 
                    />
                ))}
            </div>
        </div>
    );
};

export default MainAdvantages;