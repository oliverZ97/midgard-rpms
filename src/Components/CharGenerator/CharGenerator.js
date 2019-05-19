import React from 'react';
import { browserHistory } from 'react-router';
import 'normalize.css';
import './CharGenerator.scss';

function CharGenerator() {

    return (
        <div className="charGenerator">
            <div>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Surname"/>
            </div>
            <div>
                <input type="number" placeholder="St" min="1" max="100" />
                <input type="number" placeholder="Ko" min="1" max="100" />
                <input type="number" placeholder="Gs" min="1" max="100" />
                <input type="number" placeholder="Gw" min="1" max="100" />
                <input type="number" placeholder="In" min="1" max="100" />
                <input type="number" placeholder="Zt" min="1" max="100" />
            </div>
        </div>
    );
}

export default CharGenerator;