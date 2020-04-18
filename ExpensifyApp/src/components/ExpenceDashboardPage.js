import React from "react";
import ExpenceList from './ExpenceList';
import ExpenceListFilters from './ExpenceListFilters';
const ExpenseDashboardPage = () => (
    <div>
        <ExpenceListFilters/>
        <ExpenceList/>
    </div>
);


export default ExpenseDashboardPage;