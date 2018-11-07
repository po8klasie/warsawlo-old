export default (state = {}, action) => {
  switch (action.type){
    case 'UPDATE_NAV_HEIGHT':
        return {
          ...state,
          navHeight: action.navHeight
        }
    default:
          return state;
  }
};
