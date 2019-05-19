import React from 'react';
import 'normalize.css';
import './DiceGenerator.css';

class DiceGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            rolls: 0,
            dice: 0,
            bonus: 0,
            resultString: '',
            history: []
        }
        this.onClickSetValue = this.onClickSetValue.bind(this);
        this.onChangeSetBonus = this.onChangeSetBonus.bind(this);
        this.onChangeSetRolls = this.onChangeSetRolls.bind(this);
        this.setResultString = this.setResultString.bind(this);
        this.pushRollToHistory = this.pushRollToHistory.bind(this);
        this.roll = this.roll.bind(this);
        this.presentResult = this.presentResult.bind(this);
    }

    onClickSetValue(e) {
        let newDice = parseInt(e.target.value, 10);
        this.setState({
            dice: newDice
        })
        return newDice;
    }

    onChangeSetBonus(e) {
        console.log(e.target.value);
        this.setState({
            bonus: parseInt(e.target.value, 10)
        })
    }

    onChangeSetRolls(e) {
        this.setState({
            rolls: parseInt(e.target.value - 1, 10)
        })
    }

    setResultString(string) {
        this.setState({
            resultString: string
        })
    }

    pushRollToHistory(resultString) {
        let newHistory = [...this.state.history];
        if(newHistory.length >= 5) {
            newHistory.shift();
            newHistory.push(resultString);
        } else {
            newHistory.push(resultString);
        }
        this.setState({
            history: newHistory
        })
    }

    roll(e) {
        let result = 0;
        let dice = this.onClickSetValue(e);
        let rolls = [];
        for (let idx = 0; idx <= this.state.rolls; idx++) {
            let roll = Math.round(Math.random() * dice);
            result += roll;
            rolls.push(roll);
        }
        let resultString = ''
        rolls.forEach((roll) => {
            resultString += roll + "+";
        })
        result += this.state.bonus;
        let resultAsString = result + " = " + resultString + this.state.bonus;

        this.setResultString(resultAsString);
        this.pushRollToHistory(resultAsString);
        this.presentResult(result, resultAsString);
    }

    presentResult(result, resultString) {
        document.getElementById('result').innerHTML = result
        document.getElementById('resultString').innerHTML = resultString;
    }

    render() {
        let rollHistory = this.state.history.map((elem) => {
            return <p>{elem}</p>
        })
        return (
            <div className="container-row">
                <div className="diceGenerator">
                    <div className="diceGenerator__container">
                        <input className="diceGenerator__button" type="button" value="6" onClick={this.roll}></input>
                        <input className="diceGenerator__button" type="button" value="12" onClick={this.roll}></input>
                        <input className="diceGenerator__button" type="button" value="20" onClick={this.roll}></input>
                        <input className="diceGenerator__button" type="button" value="100" onClick={this.roll}></input>
                    </div>
                    <div className="diceGenerator__container">
                        <input className="diceGenerator__input" type="number" placeholder="W&uuml;rfe" onChange={this.onChangeSetRolls}></input>
                        <input className="diceGenerator__input" type="number" placeholder="Bonus" onChange={this.onChangeSetBonus}></input>
                    </div>
                    <h1 className="diceGenerator__headline" id="result"></h1>
                    <p className="diceGenerator__text" id="resultString"></p>
                </div>
                <div id="history" className="rollHistory">
                    <p>Letzte Ergebnisse</p>
                    {rollHistory}
                </div>
            </div>
        );
    }
}

export default DiceGenerator;