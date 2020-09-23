import React from 'react';
import styles from './Produto.module.css';
import ModalProduto from './ModalProduto';

export function formataPrecoProduto(preco = 0) {
    let novoPreco = typeof preco === 'number' ? preco : 0;
    if (preco >= 100) {
        const precoString = String(novoPreco);
        const decimais = precoString.substr(precoString.length-2, 2);
        const inteiro = precoString.substr(0, precoString.length-2);
        return `${inteiro},${decimais}`;
    }
    return novoPreco;
}

function Produto ({
    data,
    ...props
}) {
    const {
        id,
        nome,
        preco,
        foto,
        descricao,
        ingredientes = [],
    } = data;

    const precoFormatado = formataPrecoProduto(preco);

    return (
        <li
            className={styles.product}
            {...props}
        >
            <div className={styles.info}>
                <h3 className={styles.title}>{nome}</h3>
                <p className={styles.descricao}>{descricao}</p>
                <strong className={styles.price}>R$ {precoFormatado}</strong>
            </div>
            <figure className={styles.imageContainer}>
                <img src={foto} alt={`foto de ${nome}`}  className={styles.image}/>
            </figure>
        </li>
    )
}

export default Produto;