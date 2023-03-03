const adjectives =['lijepa', 'zgodna', 'pametna'];
const nouns = ['jelena', 'mama', 'kćer']

function getRandomName(){
    const adjectiveIndex = Math.floor(Math.random()*adjectives.length);
    const nounsIndex = Math.floor(Math.random()*nouns.length);
    return `${adjectives[adjectiveIndex]} ${nouns[nounsIndex]}`;
}
export function RandomNameButton(props){
    function handleClick(){
        console.log(getRandomName());
        props.onRandomName(getRandomName());
    }
    return(
        <button type="button" onClick={handleClick}>Get random name</button>
    );
}