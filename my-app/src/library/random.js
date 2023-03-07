const adjectives =['lijepa', 'zgodna', 'pametna'];
const nouns = ['jelena', 'mama', 'kćer']

export function getRandomName(){
    const adjectiveIndex = Math.floor(Math.random()*adjectives.length);
    const nounsIndex = Math.floor(Math.random()*nouns.length);
    return `${adjectives[adjectiveIndex]} ${nouns[nounsIndex]}`;
}