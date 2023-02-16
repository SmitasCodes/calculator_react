import './InputDisplayArea.css'
import { useEffect } from 'react';
import inputCharValidation from './utils/inputCharValidation';
import {ButtonsArr} from './Buttons'

const InputDisplay = () =>{
    useEffect(() => {
        inputCharValidation(ButtonsArr);
    }, []);
    return (
        <div className="inputDisplayArea" >
            <input className='inputDisplayArea_input' type='text'></input>
        </div>
    )
}

export default InputDisplay;