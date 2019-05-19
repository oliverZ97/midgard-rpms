import React from 'react';
import 'normalize.css';
import './MainMenu.css';

function MainMenu() {

    return (
        <div className="MainMenu">
            <div className="row">
                <button>Manual Character</button>
                <button>Character Generator</button>
            </div>
            <div className="row">
                <button>Dice Tool</button>
                <button>Images</button>
            </div>
            <div className="row"></div>
        </div>
    );
}

export default MainMenu;