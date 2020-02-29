import * as Types from '../Constants';

export const chooseType = (type) => {
    return {
        type: Types.CHOOSE_TYPE,
        payload: type,
    }
}

export const tryProduct = (product) => {
    return {
        type: Types.TRY_PRODUCT,
        payload: product,
    }
}

export const tryTopCloth = (topCloth) => {
    return {
        type: Types.TRY_TOPCLOTH,
        payload: topCloth,
    }
}

export const tryBotCloth = (botCloth) => {
    return {
        type: Types.TRY_BOTCLOTH,
        payload: botCloth,
    }
}

export const tryShoes = (shoes) => {
    return {
        type: Types.TRY_SHOES,
        payload: shoes,
    }
}

export const tryHandBag = (handBag) => {
    return {
        type: Types.TRY_HANDBAG,
        payload: handBag,
    }
}

export const tryNecklace = (necklace) => {
    return {
        type: Types.TRY_NECKLACE,
        payload: necklace,
    }
}

export const tryHairStyle = (hairStyle) => {
    return {
        type: Types.TRY_HAIRSTYLE,
        payload: hairStyle,
    }
}

export const tryBackground = (background) => {
    return {
        type: Types.TRY_BACKGROUND,
        payload: background,
    }
}