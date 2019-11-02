import React, {Component} from 'react';
import SelectOption from '../../components/SelectOption'

import './styles.css'

export default class CandyType extends Component {
    render() {
        return (
            <div className="main">
                <h1>Passo 1: Escolha seu doce</h1>
                <div className="container">
                    <SelectOption/ >
                    <SelectOption/ >
                    <SelectOption/ >
                </div>
            </div>
        )
    }
}
