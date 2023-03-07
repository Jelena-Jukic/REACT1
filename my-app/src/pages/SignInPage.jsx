import {useState} from "react";
import { Button } from "../components/Button";
import { InputFormField } from "../components/InputFormField";
import { RandomNameButton } from "../components/RandomNameButton";
import {getRandomName} from"../library/random";
import { FormField } from "../components/FormField";

export function SignInPage (props) {
 /*   const stateArray = useState(' ');
    const fromState = stateArray[0];
    const setFromState = stateArray[1];

ili umjesto prethodno:
*/ 
const [fromState, setFromState] = useState (getRandomName());


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
             <FormField>
                 <RandomNameButton onRandomName={handleUsernameChange}/>
                </FormField>
             <FormField>
                 <Button type="submit" label= "Sign in"/>
            </FormField>
            </form>
            </div>
        </div>
    );
};