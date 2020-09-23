import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Produto from '../Produto';
import ListaProdutos from '../Produto/Lista';
import ModalProduto from '../Produto/ModalProduto';

import {
    getCardapio,
    selectCardapio,
} from './CardapioSlice';


function Cardapio() {
    const { categorias } = useSelector(selectCardapio);
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalData, setModalData] = React.useState({});

    React.useEffect(() => {
        dispatch(getCardapio());
    }, []);

    return (
        <>
            <div id="cardapio">
                {categorias && categorias.map(categoria => (
                    <ListaProdutos title={categoria.nome} key={categoria.id}>
                        {
                            categoria.produtos.map(data => (
                                <Produto
                                    key={data.id}
                                    data={data}
                                    onClick={() => {
                                        setModalOpen(true);
                                        setModalData(data);
                                        console.log(data);
                                    }}
                                />
                            ))
                        }
                    </ListaProdutos>
                ))}
            </div>
            <ModalProduto
                {...modalData}
                modalOpen={modalOpen}
                onModalClose={() => {
                    setModalOpen(false);
                }}
            />
        </>
    );
}
  
  export default Cardapio;