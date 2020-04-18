import React from 'react';
import {connect} from 'react-redux';
import ExpenceItem from './ExpenceListItem';
import selectExpences from '../selectors/expences';
const ExpenceList = (props) => (
    <div>
        <h1>ExpenceList</h1>
        {
            props.expences.map((expence)=>{
                return <ExpenceItem 
                    key = {expence.id}
                    {...expence}               
                />;
            })
        }
        
    </div>
);

const mapStateToProps = (state) => {
    return {
        expences: selectExpences(state.expences, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenceList);




