import React from 'react';
import './Add.scss';

import add from '../../assets/new.svg';

function Add () {
    
     
       return (
        <div className="add">
            <div className="add__form">
                <form>
                    <input className="add__form-input"
                    type ="text"
                    placeholder="Add task"
                    />
                </form>
            </div>             
            <div className="add__button">
            <img src={add} alt="Add task"/>
            </div>
        </div>
        

       );
     }
     
     export default Add;