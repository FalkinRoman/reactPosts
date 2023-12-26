import React, { Children } from 'react';
import classes from "./MyNotification.module.css"

const MyNotification = ({children, props}) => {
    return (
        <div className={classes.notification}>
            {children}
        </div>
    );
};

export default MyNotification;