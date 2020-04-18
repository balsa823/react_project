// Expences reducer
const expencesReducerDefaultState = []
export default (state = expencesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENCE':
            return [
                ...state,
                action.expence
            ];
        case 'REMOVE_EXPENCE':
            return state.filter(({ id }) => {
                return id !== action.id
            });
        case 'EDIT_EXPENCE':
            return state.map((expence) => {
                if (expence.id == action.id) {
                    return {
                        ...expence,
                        ...action.updates
                    }
                } else {
                    return expence
                };
            });
        default:
            return state;
    }
};
