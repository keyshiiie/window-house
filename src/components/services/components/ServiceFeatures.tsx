// src/components/services/components/ServiceFeatures.tsx
import React from 'react';
import type { Feature } from '../types/Services';
import styles from '../serviceDetail.module.scss';

interface ServiceFeaturesProps {
    features: Feature[];
}

export const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ features }) => {
    return (
        <div className={styles.features}>
            <h2 className={styles.features__title}>Дополнительные возможности</h2>
            <div className={styles.features__grid}>
                {features.map((feature) => (
                    <div key={feature.id} className={styles.featureCard}>
                        <div className={styles.featureCard__icon}>
                            <img src={feature.icon} alt={feature.title} />
                        </div>
                        <h3 className={styles.featureCard__title}>{feature.title}</h3>
                        <p className={styles.featureCard__description}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};