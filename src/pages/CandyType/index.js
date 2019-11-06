import React, {Component} from 'react';
import SelectOption from '../../components/SelectOption'
import Grid from '@material-ui/core/Grid';

import './styles.css'

export default class CandyType extends Component {
    render() {
        return (
            <div className="root">
                <h1>Passo 1: Escolha seu doce</h1>
                <Grid container spacing={1}>
                    <Grid container item xs={12} justify="center" spacing={3}>
                        <SelectOption/ >
                        <SelectOption/ >
                        <SelectOption/ >
                    </Grid>
                </Grid>
            </div>
        )
    }
}
