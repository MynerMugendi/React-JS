import {useState} from "react";

export function DollarConverter(){
    const[convertedAmount,setConvertedAmount] = useState()

    function handleAmountChange(e){

        let amount = e.target.value
        let dollars = amount/130
        dollars = Math.round(dollars*100)/100
        setConvertedAmount(dollars)
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 pt-4">
                        <input type="number" onChange={handleAmountChange} placeholder="Enter amount in Ksh" className="form-control"/>
                        <p className="text-center">USD {convertedAmount}</p>
                    </div>
                </div>
            </div>
        </>
    )
}