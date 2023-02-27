export function CoinFlip () {
    const number = Math.random ();
    return <div> Coin Shows {number < 0.5 ? "HEAD" : "TAILS"} </div>;

    /**
    if (number <0.5) {
        return <div> HEAD</div>;
    }
    return <div>TAILS</div>;
    */
}