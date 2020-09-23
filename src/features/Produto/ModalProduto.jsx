import React from 'react';
import styles from './Produto.module.css';
import Modal from '../Modal';
import { formataPrecoProduto } from './';

function ModalProduto (props) {
    const {
        id,
        nome,
        preco,
        foto,
        descricao,
        ingredientes = [],
        padrao = {},
        modalOpen,
        onModalClose = () => {},
    } = props;

    const [values, setValues] = React.useState({});
    const [precoFormatado, setPrecoFormatado] = React.useState(0);
    const [quantity, setQuantity] = React.useState(1);

    React.useEffect(() => {
        setValues(padrao)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(padrao), id]); 

    React.useEffect(() => {
        const fotmatado = formataPrecoProduto(quantity*preco);
        setPrecoFormatado(fotmatado);
    }, [quantity,preco]);

    const isIncluded = (ingrediente, value) => {
        return !!(values[ingrediente] && values[ingrediente][value] && values[ingrediente][value] > 0);
    }

    const handleCheck = (ingredienteId, qtd = 1) => (event) => {
        const { value, checked } = event.target;
        const ingredienteTipo = values[ingredienteId] || {};
        
        console.log( { value, checked })

        const quantidade = checked ? qtd : 0;
        setValues({
            ...values,
            [ingredienteId]: {...ingredienteTipo, [value]: quantidade }
        });
    };

    const qtyAdd = () => {
        setQuantity(quantity+1);
    }

    const qtyRemove = () => {
        if(quantity > 1) setQuantity(quantity-1);
    }

    return (
        <Modal
            title={nome}
            open={modalOpen}
            onBack={onModalClose}
            className={styles.modalIngredientes}
        >  
            <div className={styles.ingredientes} >
                {ingredientes && ingredientes.map(({
                    customizavel,
                    id,
                    nome,
                    opcoes,
                    quantidadeCustomizavel,
                    quantidadeIncluida,
                }) => (
                    <div key={id} className={styles.ingrediente}>
                        <h4 className={styles.ingredienteTitle}>{nome}</h4>
                        <ul>
                            {opcoes.map((opcao) => (
                                <li className={styles.ingredienteOption}>
                                    <label htmlFor={opcao.id}>
                                        <input
                                            type="checkbox"
                                            checked={isIncluded(id,opcao.id)}
                                            name={id}
                                            id={opcao.id}
                                            value={opcao.id}
                                            onChange={handleCheck(id)}
                                        />
                                        {isIncluded(id,opcao.id) && <i className="fa fa-check-square" />}
                                        {!isIncluded(id,opcao.id) && <i className="fa fa-square" />}
                                        <span>{opcao.nome}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
                )}
            </div>

            <div className={styles.footer}>
                <div className={styles.qtd}>
                    <button className={`${styles.btn} ${styles.btnMinus}`} onClick={qtyRemove}>
                        <i className="fa fa-minus" />
                    </button>
                    <span className={styles.inputAdd}>{quantity}</span>
                    <button className={`${styles.btn} ${styles.btnPlus}`} onClick={qtyAdd}>
                        <i className="fa fa-plus" />
                    </button>
                </div>
                <button className={`${styles.btn} ${styles.btnAdd}`}>
                    Adicionar<br/>
                    <span className={styles.preco}>R$ {precoFormatado}</span>
                </button>
            </div>
        </Modal>
    )
}

export default ModalProduto;