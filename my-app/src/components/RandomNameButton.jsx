import { Button } from "./Button";
import {getRandomName} from "../library/random";


export function RandomNameButton(props){

    function handleClick(){
        console.log(getRandomName());
        props.onRandomName(getRandomName());
    }
    return(
        <Button type="button" onClick={handleClick} label="Get random name"/>
    );
}