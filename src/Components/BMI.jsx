import {useState} from "react";

export function Bmi (){

    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()
    const [result, setResult] = useState()

    function handleWeightChange(e){
        setWeight(e.target.value)
    }

    function handleHeightChange(e){
        setHeight(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        let bmi = weight/height**2
        setResult(bmi)

    }
    return (<div className = "container">
        <div className="row">
            <div className="col-sm-4">
                <form onSubmit={handleSubmit}>
                    <input type="number" step="0.1" onChange={handleWeightChange} className="form-control mb-3" placeholder="Enter Weight"/>
                    <input type="number" step="0.01" onChange= {handleHeightChange} className="form-control mb-3" placeholder="Enter Height"/>
                    <button className="btn btn-success w-100">Calculate</button>
                </form>
                <h3 className="text-center">{result}</h3>
            </div>
        </div>
    </div>)
}