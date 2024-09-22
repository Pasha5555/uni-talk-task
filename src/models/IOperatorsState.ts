import { IOperator } from "./IOperator";
import { IOperatorAddon } from "./IOperatorAddon";

export interface IOperatorsState {
    operators: IOperator[];
    operatorAddons: IOperatorAddon[]
    isLoading: boolean;
    error: string;
}
