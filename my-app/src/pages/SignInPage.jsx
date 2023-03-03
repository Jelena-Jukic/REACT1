import {useState} from "react";
import { InputFormField } from "../components/InputFormField";
import { RandomNameButton } from "../components/RandomNameButton";
import {SubmitFormField} from "../components/SubmitFormField";

export function SignInPage (props) {
    const stateArray = useState(' ');
    const fromState = stateArray[0];
    const setFromState = stateArray[1];

    // ili umjesto prethodno: [fromState, setFromState] = useState (' ');


    function handleSubmit (event){
        event.preventDefault();
        props.onSubmit(fromState);
    }
function handleUsernameChange (value){
    setFromState(value);
}

console.log(fromState);

    return (
        <div className="sign-in-form">
            <div className="card">
            <form className="sign-in-form" onSubmit={handleSubmit}>
             <InputFormField label = "Username" type ="text" onChange ={handleUsernameChange} value={fromState}/>
             <RandomNameButton onRandomName={handleUsernameChange}/>
             <SubmitFormField label="Sign in"/>  
            </form>
            </div>
        </div>
    );
};