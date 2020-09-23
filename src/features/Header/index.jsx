import React from 'react';
import styles from './Header.module.css';
import Modal from '../Modal';

function Header(props) {
    const {
        capa = 'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-15/e35/107512756_2535001389936527_5764518051365348860_n.jpg?_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=QvB6s3piI1kAX8ez-g5&oh=e0009e9f30ac9094db8a19b96ea20151&oe=5F7B821C',
        logo = 'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-19/s150x150/17881899_195091821005725_733024576669220864_a.jpg?_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_ohc=_OK7CpZhxZUAX81GUhL&oh=146fccae764bb1de91ab573acfe86062&oe=5F7D2D8C',
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
