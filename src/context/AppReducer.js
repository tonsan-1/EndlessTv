export default function AppReducer(state, action){
    switch (action.type) {
        case 'ADD_MOVIE_TO_FAVORITES':
            return {
                ...state,
                favorites: [action.payload, ...state.favorites]
            }
        default :
        return state;
    }
};