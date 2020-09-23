import React from 'react';
import styles from './Produto.module.css';
import {ReactComponent as TitleCurve} from './titleCurve.svg';

export default function ListaProduto(props) {
    const { children, title } = props;

    return (
        <div className={styles.lista}>
            {
                title &&
                <h2 className={styles.listaTitle}>
                    <TitleCurve className={styles.titleCurve} />
                    <span>{title}</span>
                </h2>
            }
            <ul>
                {children}
            </ul>
        </div>
    )
}