import React from 'react';
import classes from "./MyTextArea.module.css"

const MyTextarea = ({...props}) => {
    return (
        <textarea className={classes.textArea} {...props}  rows="10"></textarea>
    );
};

export default MyTextarea;