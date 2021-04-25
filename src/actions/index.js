export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const ADD_MEM = 'ADD_MEM';
export const ADD_MEM_DISPLAY = 'ADD_MEM_DISPLAY';
export const MEM_CLEAR = 'MEM_CLEAR';

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return {type:CHANGE_OPERATION,payload:operation}
}

export const clearDisplay = () => {
    return {type:CLEAR_DISPLAY}
}

export const addMem = () => {
    return {type:ADD_MEM}
}

export const addMemDisplay = () => {
    return {type: ADD_MEM_DISPLAY}
}

export const memClear = () => {
    return {type: MEM_CLEAR}
}