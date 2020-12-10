import React from 'react';

import classes from "./OrderConfirmation.module.sass"
var QRCode = require('qrcode.react');

const OrderConfirmation = () => {

    return (
        <section className={classes.Section}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center"><h1>Thank for your order</h1></div>
                    <QRCode value="http://facebook.github.io/react/" size="400" className="mx-auto mt-5"/>
                </div>
            </div>
        </section>
    );
}

export default OrderConfirmation;
