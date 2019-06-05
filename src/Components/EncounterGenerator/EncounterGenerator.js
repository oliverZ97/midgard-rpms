import React from 'react';
import 'normalize.css';
import './EncounterGenerator.css';

class EncounterGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            biome: "",
            building: "",
        }

        this.createEncounter = this.createEncounter.bind(this);
        this.setBiome = this.setBiome.bind(this);
        this.setBuilding = this.setBuilding.bind(this);
    }

    createEncounter() {
        let biomes = [
            "Wüste", "Steppe", "Savanne", "Dschungel", "Tannenwald", 
            "Mischwald", "Eichenwald", "Eiswüste", "Gebirge", "Hügelland", 
            "Felswüste", "Sumpf", "Grasland", "Felseninsel", "Südseeinsel",
            "Nordlandinsel", "Gebirgswald", "See", "Ozean", "Fluss"
        ];
        let buildings = [
            "Dorf", "Ruine", "Höhle", "Stadt(klein)", "Stadt(mittel)", 
            "Stadt(groß)", "Turm", "Anwesen", "Kneipe", "Burg", 
            "Palast", "Hütte", "verlassenes Anwesen", "Friedhof", "Kapelle",
            "Garten", "Heckenlabyrinth", "Wrack", "Handelsschiff", "Schiff"
        ];
        let biome = biomes[Math.round((Math.random()*20)+1)];     
        let building = buildings[Math.round((Math.random()*20)+1)];
        this.setBiome(biome);
        this.setBuilding(building);
    }

    setBiome(biome) {
        this.setState({
            biome: biome
        })
    }

    setBuilding(building) {
        this.setState({
            building: building
        })
    }

    render() {
        let biom = this.state.biome;
        let building = this.state.building;
    return (
        
        <div className="encounterGenerator">
            <button onClick={this.createEncounter}>Generate Encounter!</button>
            <p>{biom}</p>
            <p>{building}</p>
        </div>
    );
    }
}

export default EncounterGenerator;