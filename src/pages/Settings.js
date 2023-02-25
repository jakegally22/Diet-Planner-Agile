import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {PrimaryButton} from '../stylesheets/common';
import '../stylesheets/settings.css';
import firebase from '../firebase';

const Settings = (props) => {

    useEffect(() => {
        let abortController = new AbortController();
        const inputCal = document.querySelector('#settings-calories');
        const inputCarbs = document.querySelector('#settings-carbs');
        const inputProtein = document.querySelector('#settings-protein');
        const inputFat = document.querySelector('#settings-fat');
        //
        inputCal.value = props.config.goalCal;
        inputCarbs.value = props.config.goalCarb;
        inputProtein.value = props.config.goalProtein;
        inputFat.value = props.config.goalFat;

        return () => {
            abortController.abort();
        };
    }, [props]);

    const submit = () => {
        const inputCal = document.querySelector('#settings-calories');
        const inputCarbs = document.querySelector('#settings-carbs');
        const inputProtein = document.querySelector('#settings-protein');
        const inputFat = document.querySelector('#settings-fat');
        const newConfig = {
            goalCal: Number(inputCal.value),
            goalFat: Number(inputFat.value),
            goalProtein: Number(inputProtein.value),
            goalCarb: Number(inputCarbs.value),
        }

        var db = firebase.firestore();
        db.collection('users').doc(firebase.auth().currentUser.uid).collection('settings').doc('config').update(newConfig)

        props.dispatchConfig({type: 'update', payload: newConfig});
    }

    return (
        <div className="settings">
            <div className="settings-top">
                <h1>Set Configurations</h1>
            </div>

            <div className="settings-inputs">
                <div className="settings-inputDiv">
                    <h2>Calorie Goal: </h2>
                    <input type="number" min="1200" id="settings-calories"/>
                </div>
                <div className="settings-inputDiv">
                    <h2>Carbs Goal: </h2>
                    <input type="number" min="0" id="settings-carbs"/>
                </div>
                <div className="settings-inputDiv">
                    <h2>Protein Goal: </h2>
                    <input type="number" min="0" id="settings-protein"/>
                </div>
                <div className="settings-inputDiv">
                    <h2>Fat Goal: </h2>
                    <input type="number" min="0" id="settings-fat"/>
                </div>
            </div>

            <div className="settings-submit">
                <PrimaryButton width="20%" onClick={submit}>Submit</PrimaryButton>
            </div>

            <Link to="/diet-tracker">
                <h2>Back</h2>
            </Link>
        </div>
    );
}

export default Settings;
