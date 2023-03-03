import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/Message";
import { SubmitFormField } from "../components/SubmitFormField";

export function ChatPage (props){
    return (
        <div>
            Chat page
            <div className="massage-list">
             <Message author="Domagoj" text="Lorem ipsum"/>
             <Message author="Udenko" text="Dolor sit amet"/>             
            </div>
        <form action="">
            <InputFormField/>
            <SubmitFormField label="Send"/>
        </form>

        </div>
    );

};