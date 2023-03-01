import {useState} from "react";
import { InputFormField } from "../components/InputFormField";
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

    return (
        <div className="sign-in-form">
            <div className="card">
            <form className="sign-in-form" onSubmit={handleSubmit}>
             <InputFormField label = "Username" type ="text" onChange ={handleUsernameChange}/>
             <SubmitFormField/>  
            </form>
            </div>
        </div>
    );
};