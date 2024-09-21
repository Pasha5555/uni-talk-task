import { Checkbox } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import React from "react";
import User from "../components/common/User";
import { IOperator } from "../models/IOperator";
import { IOperatorAddon } from "../models/IOperatorAddon";


export const getTableColumns = (operatorAddons: IOperatorAddon[]) => {
    const operatorAddonsCols = Array.from(new Set(operatorAddons.map(({fieldName}: any) => fieldName)));
    const defaultColumns: GridColDef[] = [
        { 
            field: 'order', 
            headerName: '#', 
            width: 50, 
            type: 'number',
            renderCell: (params) => params.id,
        },
        {
          field: 'name',
          headerName: 'User',
          width: 250,
          editable: false,
          renderCell: (params) => {
            const {avatar, name} = params.row;
            console.log(params);
            
            return <User userAvatarUrl={avatar} userName={name} />;
          }
        },
        {
          field: 'isWorking',
          headerName: 'Is working?',
          width: 150,
          editable: false,
          renderCell: (params) => <Checkbox
            defaultChecked
            sx={{
              color: '#f04259',
              '&.Mui-checked': { color: '#f04259' },
              '&.MuiCheckbox-root': { padding: 0 },
              '& .MuiSvgIcon-root': { fontSize: 22 }
            }}
          />
        },
        {
          field: 'createdAt',
          headerName: 'Created at',
          type: 'string',
          width: 200,
          editable: false,
          valueGetter: (value) => formatDate(value),
        }
      ];
    const formattedOperatorAddonsCols: GridColDef[] = operatorAddonsCols.map((operatorName) => {
        return { field: operatorName.toLowerCase(), headerName: operatorName, width: 150, type: 'string', editable: false }
    });
    const columns: GridColDef[] = [
        ...defaultColumns,
        ...formattedOperatorAddonsCols
    ];

    return columns;
};

export const getTableRows = (operators: IOperator[], operatorAddons: IOperatorAddon[]) => {
    const rows = operators.map((operator: IOperator): any => {
        const operatorAddonsByOperator = operatorAddons.reduce((acc: any, {fieldName, text, id}: any) => {
            return id === operator.id ? {...acc, [fieldName.toLowerCase()]: text} : acc;
        }, {});

        return {...operator, ...operatorAddonsByOperator};
    });

    return rows;
};

export function formatDate(dateString: string): string {
  const [datePart, timePart] = new Date(dateString).toISOString().split('T');
  const [year, month, day] = datePart.split('-');
  const [hours, minutes] = timePart.split(':');
  
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}
