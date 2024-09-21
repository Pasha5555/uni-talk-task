import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOperator } from "../../models/IOperator";
import { IOperatorAddon } from "../../models/IOperatorAddon";


interface OperatorsState {
    operators: IOperator[];
    operatorAddons: IOperatorAddon[]
    isLoading: boolean;
    error: string;
}

const initialState: OperatorsState = {
    operators: [],
    operatorAddons: [],
    isLoading: false,
    error: ''
}

export const operatorsSlice = createSlice({
    name: 'operators',
    initialState,
    reducers: {
        operatorsFetching(state) {
            state.isLoading = true;
        },
        operatorsFetchingSuccess(state, action: PayloadAction<IOperator[]>) {
            state.isLoading = false;
            state.error = '';
            state.operators = action.payload;
        },
        operatorsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        operatorAddonsFetching(state) {
            state.isLoading = true;
        },
        operatorAddonsFetchingSuccess(state, action: PayloadAction<IOperatorAddon[]>) {
            state.isLoading = false;
            state.error = '';
            state.operatorAddons = action.payload;
        },
        operatorAddonsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
})

export default operatorsSlice.reducer;
export const {
    operatorAddonsFetching,
    operatorAddonsFetchingSuccess,
    operatorsFetching,
    operatorAddonsFetchingError,
    operatorsFetchingError,
    operatorsFetchingSuccess
} = operatorsSlice.actions;
