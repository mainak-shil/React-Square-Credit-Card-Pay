import React, { useState, useEffect } from "react";
import "./App.css";
import Square from "./Component/Square";

const App = () => {
    const [isLoad, setLoad] = useState(false);
    useEffect(() => {
        let sqPaymentScript = document.createElement("script");
        sqPaymentScript.src = process.env.REACT_APP_SQUARE_URL;
        sqPaymentScript.type = "text/javascript";
        sqPaymentScript.async = false;
        sqPaymentScript.onload = () => {
            setLoad(true);
        };
        document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
    });

    const squarePayment = isLoad ? (
        <Square paymentForm={window.SqPaymentForm} price={"100"} />
    ) : null;

    return (
        <div className="App">
            <h1>Square</h1>
            {squarePayment}
        </div>
    );
};

export default App;
