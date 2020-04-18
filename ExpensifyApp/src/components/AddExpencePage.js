import React from "react";
import {connect} from 'react-redux';
import {addExpence} from '../actions/expences';
import ExpenceForm from './ExpenceForm';

const AddExpencePage = (props) => (
    <div>
        <h1>AddExpence</h1>
        <ExpenceForm 
            onSubmit={(expence)=>{
               props.dispatch(addExpence(expence));
               props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpencePage);
