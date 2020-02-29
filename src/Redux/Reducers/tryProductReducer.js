import * as Types from '../../Constants';
const initialState = {
    topclothes: '',
    botclothes: '',
    shoes: '',
    handbags: '',
    necklaces: '',
    hairstyle: '',
    background: '',
}

const tryProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.TRY_PRODUCT: {
            state = { ...state, [action.payload.type]: action.payload.imgSrc_png }
            return { ...state }
        }
        default:
            return state;
    }
}

export default tryProductReducer;