import React from 'react';
import styles from './Header.module.css';
import Modal from '../Modal';

function Header(props) {
    const {
        capa = 'https://wallpapercrafter.com/desktop/210218-food-burger-tray-and-board-hd.jpg',
        logo = 'https://image.shutterstock.com/image-vector/tasty-burger-icon-simple-illustration-260nw-1441325378.jpg',
        nome = 'RG Burguer - hamburguer artesanal',
        tempoEntregaMin = '30 min',
        tempoEntregaMax = '1 h',
        aberto = true,
    } = props;

    const [modalOpen, setModalOpen] = React.useState(false)


    return (
        <>
            <header className={styles.header}>
                <img src={capa} className={styles.capa} alt="" />
                <div className={styles.overlay} />
                <div className={styles.logo}>
                    <img src={logo} alt={`logo de ${nome}`} />
                </div>
                <h1 className={styles.title}>{nome}</h1>
                {
                    aberto &&
                    <div className={styles['aberto-container']} >
                        <span className={styles.aberto}>aberto</span>
                        <span className={styles.tempo}><i className="fa fa-motorcycle" /> - de {tempoEntregaMin} à {tempoEntregaMax}</span>
                    </div>
                }
                {!aberto && <span className={styles.fechado}>fechado para pedidos</span>}
                <button
                    className={styles['ver-mais']}
                    onClick={() => setModalOpen(true)}
                >
                    ver mais +
                </button>
            </header>
            <Modal
                title="Informações"
                open={modalOpen}
                onBack={() => {
                    setModalOpen(false)
                }}
            >
                teste
            </Modal>

        </>
    )
}

export default Header;
