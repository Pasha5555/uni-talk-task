import axios from "axios";
import { IOperator } from "../models/IOperator";
import { IOperatorAddon } from "../models/IOperatorAddon";


const API_TOKEN = '66a7f07b53c13f22a3d17fb1';
const URL = `https://${API_TOKEN}.mockapi.io/api/`;

export const getTableOperators = async () => await axios.get<IOperator>(`${URL}operator`);
export const getTableOperatorAddons = async () => await axios.get<IOperatorAddon>(`${URL}operatorAddon`);
