import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import { User } from "../components/common/User";
import { IOperator } from "../models/IOperator";
import { IOperatorAddon } from "../models/IOperatorAddon";
import { CustomCheckbox } from "../components/common/Checkbox";
import { GridRowModel } from "@mui/x-data-grid/models";

/* eslint-disable no-unused-vars */
type FormatCallback = (param: any) => any;

const getColumnFormat = (
    field: string, 
    headerName: string, 
    width: number, 
    type: any, 
    renderCell?: FormatCallback | null, 
    valueGetter?: FormatCallback
): GridColDef => {
  return { 
    field, 
    headerName, 
    width, 
    type,
    editable: false,
    ...(renderCell ? {renderCell} : {}),
    ...(valueGetter ? {valueGetter} : {})
  };
}

export const getTableColumns = (operatorAddons: IOperatorAddon[]): GridColDef[] => {
    const operatorAddonsCols = Array.from(new Set(
        operatorAddons.map((operatorAddon: IOperatorAddon) => operatorAddon.fieldName)
    ));
    const defaultColumns: GridColDef[] = [
        getColumnFormat('order', '#', 50, 'number', (params: any) => params.id),
        getColumnFormat('name', 'User', 250, 'string', (params: any) => {
        const {avatar, name} = params.row;        
            return <User userAvatarUrl={avatar} userName={name} />;
        }),
        getColumnFormat('isWorking', 'Is working?', 150, 'string', (params) => 
            <CustomCheckbox defaultChecked={params.row.isWorking} />
        ),
        getColumnFormat('createdAt', 'Created at', 200, 'string', null, (value) => formatDate(value))
    ];
    const formattedOperatorAddonsCols: GridColDef[] = operatorAddonsCols.map((operatorName) => {
        return getColumnFormat(operatorName.toLowerCase(), operatorName, 150, 'string');
    });
    
    return [...defaultColumns, ...formattedOperatorAddonsCols];
};

export const getTableRows = (operators: IOperator[], operatorAddons: IOperatorAddon[]): GridRowModel[] => {
    return operators.map((operator: IOperator) => {
        const operatorAddonsByOperator = operatorAddons.reduce((acc: any, {fieldName, text, id}: any) => {
            return id === operator.id ? {...acc, [fieldName.toLowerCase()]: text} : acc;
        }, {});

        return {...operator, ...operatorAddonsByOperator};
    });
};

export function formatDate(dateString: string): string {
    const [datePart, timePart] = new Date(dateString).toISOString().split('T');
    const [year, month, day] = datePart.split('-');
    const [hours, minutes] = timePart.split(':');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}
