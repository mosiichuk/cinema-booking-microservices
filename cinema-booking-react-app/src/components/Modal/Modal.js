import React, {useEffect, useState} from 'react';
import classes from "./Modal.module.sass";

const Modal = (props) => {
    const [isOpened, setIsOpened] = useState(props.isOpened);

    useEffect(() => {
        setIsOpened(props.isOpened)
    }, [props.isOpened]);

    if(!isOpened)
        return null;

    return (
        <>
            <div className={classes.Backdrop} onClick={() => setIsOpened(false)}/>

            <div className={classes.Popup}>
                {props.children}
            </div>
        </>
    );
};

export default Modal;
