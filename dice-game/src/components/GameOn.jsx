import dice1 from "../images/dice1.png"
import dice2 from "../images/dice2.png"
import dice3 from "../images/dice3.png"
import dice4 from "../images/dice4.png"
import dice5 from "../images/dice5.png"
import dice6 from "../images/dice6.png"
import { FaShuffle } from "react-icons/fa6";
import { useState  } from "react"

const diceImages =[
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6
];



function GameOn() {
    const [player1Dice, setPlayer1Dice] = useState(diceImages[5]);
    const [player2Dice, setPlayer2Dice] = useState(diceImages[5]);
    const [winner, setwinner] = useState(null);
    const [isRolling, setIsRolling] = useState(false);
    const [text, setText] = useState("Player 1");

    const rollDice =()=>{
        setIsRolling(true);
        const interval = setInterval(()=>{
            const randomPlayer1 = Math.floor(Math.random() * 6);
            const randomPlayer2 = Math.floor(Math.random() * 6);
    
            setPlayer1Dice(diceImages[randomPlayer1]);
            setPlayer2Dice(diceImages[randomPlayer2]);
        }, 500);
    
        setTimeout(()=>{
            clearInterval(interval);
            const finalPlayer1Roll = Math.floor(Math.random() * 6) + 1;
            const finalPlayer2Roll = Math.floor(Math.random() * 6) + 1;
    
            setPlayer1Dice(diceImages[finalPlayer1Roll-1]);
            setPlayer2Dice(diceImages[finalPlayer2Roll-1]);
    
            if(finalPlayer1Roll > finalPlayer2Roll){
                setwinner( `${text} Winner !` );
            }else if(finalPlayer2Roll > finalPlayer1Roll){
                setwinner("PC  Winner !");
            }else{
                setwinner("Berabere !");
            }
    
            setIsRolling(false);
    
        },3000);

    }
    const handleChange = (e) => {
        setText(e.target.value);
    };
   

    return ( <>
    <div className="inputDiv">
    <input
                        type="text"
                        onChange={handleChange}
                        className="playerNameInput"
                        placeholder="Nickinizi Giriniz..."
                    />
    </div>
    
    <div className="container">
    
        <div className="diceDiv">
       
            <h1>{text}</h1>
            {player1Dice && <img className="diceImage" src={player1Dice} alt="" /> }
        </div>
        <div className="diceDiv">
        <h1>PC</h1>
        {player2Dice && <img className="diceImage" src={player2Dice} alt="" /> }
        </div>
    </div>
        <div className="btnDiv">
            <div> {winner && <h3 className="winnerText">{winner}</h3> } </div>
            <button onClick={rollDice} disabled={isRolling} className="btn"><FaShuffle /></button>
        </div>
    </> );
}

export default GameOn;