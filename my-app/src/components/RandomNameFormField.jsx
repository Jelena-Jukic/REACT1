import { RandomNameButton } from "../components/RandomNameButton";
export function RandomNameFormField (props) {
    return (
        <div className="random-name-form-field">
                    <RandomNameButton onRandomName={props.onRandomName}/*type="submit" label={props.label}*/  />
                </div>

    );
};