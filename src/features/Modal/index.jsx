import React from 'react';
import styles from './Modal.module.css';

function Modal(props) {
    const {
        title,
        onBack = () => {},
        children,
        open,
    } = props;
    const [noEffect, setNoEffect] =  React.useState(true);
    const firstUpdate = React.useRef(true);

    React.useEffect(() => {
      if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
      } else if (noEffect) {
        setNoEffect(false)
      }
    });

    return (
        <div className={`${styles.modal} ${open ? styles.open : ''} ${noEffect ? styles.noEffect : ''}`}>
            <div className={styles.header}>
                <button className={styles.back} onClick={onBack}>
                    <i className={`fa fa-chevron-left ${styles.mobile}`} />
                    <i className={`fa fa-times ${styles.desktop}`} />
                </button>
                <span className={styles.title}>{title}</span>
            </div>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    );
}

export default Modal;