import React from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const date = new Date();

const now = moment();


export default class ExpenceForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.expence ? props.expence.description :'',
            note: props.expence ? props.expence.note :'',
            amount: props.expence ? (props.expence.amount / 100).toString() :'',
            createdAt: props.expence ? moment(props.expence.createdAt) : moment(),
            calendarFocused: false,
            error: ""
        };
    }
    onDescChange = (e)=> {
        const description = e.target.value;
        this.setState(()=>({ description }));
    };
    onTextChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({focused}) => {
        this.setState(()=>({ calendarFocused: focused}));
    };
    onSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            //Set error state
            this.setState(() => ({error: "Please provide description!"}));
        }
        else{
            console.log("submitted");
            this.setState(() => ({ error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount * 100),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }; 
    render(){
        return (
            <div>
                {
                    this.state.error && 
                    <p>{this.state.error}</p>
                }
                <form onSubmit={this.onSubmit}>
                    <input
                        type= "text"
                        placeholder="Description"
                        autoFocus
                        value = {this.state.description}
                        onChange={this.onDescChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused} 
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=> false }
                    />
                    <textarea
                        value={this.state.note}
                        placeholder="Add a note (optional)"
                        onChange={this.onTextChange}
                    />
                    
                    <button>Add Expence</button>
                </form>
            </div>
        )
    }
}