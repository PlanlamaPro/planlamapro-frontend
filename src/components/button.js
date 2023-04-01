import React from "react";
import Popup from "reactjs-popup";
import styles from "../styles/nodeStyles.module.css";

const Tooltip = () => (
    <Popup
    trigger={<button className="button"> Açıklama </button>}
    modal
    nested
  >
    {close => (
      <div className={styles.modal}>
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className={styles.modal_header}> Açıklama </div>
        <div className={styles.modal_content}>
          {' '}
          Kahvaltıda deniz kenarı bir yerde kişi sayısı kadar önceden rezerve edilmiş restorana gidilip serpme kahvaltı söylenecek.
        </div>
        <div className={styles.modal_actions}>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            Kapat
          </button>
        </div>
      </div>
    )}
  </Popup>
  );
export default Tooltip;
