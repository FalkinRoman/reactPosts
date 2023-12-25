import React, { children } from 'react';
import classes from "./MyModal.module.css"

const MyModal = ({children, visible, setVisible}) => {

    //массив классов 
    const rootClasses = [classes.myModal]

    //если видимость есть, добавляем класс актив 
    if(visible) {
        rootClasses.push(classes.active)
    }


    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;