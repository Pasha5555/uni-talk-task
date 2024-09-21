import { Container, TextField, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { IOperator } from '../../models/IOperator';
import { operatorAddonsFetching, operatorsFetching } from '../../store/reducers/OperatorsSlice';
import { getTableColumns, getTableRows } from '../../utils/utils';
import OperatorsTable from '../OperatorsTable/OperatorsTable';


const StyledTextField = styled(TextField)({
    '&.MuiFormControl-root': {
        width: 250,
        margin: '20px'
    },
    '& .MuiFormLabel-root, & .MuiInputLabel-root': {
        '&.Mui-focused': {
            color: 'grey'
        },
    },
    '& .MuiOutlinedInput-root, & .MuiInputBase-root': {
        '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
            border: '1px solid grey',
        },
    },
});

const StyledCard = styled(Card)({
    '&.MuiPaper-root': {
        marginTop: '30px'
    }
});


export interface IAppProps {
}

export default function OperatorsTableWrapper (props: IAppProps) {
    const dispatch = useAppDispatch();
    const [searchText, setSearchText] = useState('');
    const {operators, operatorAddons} = useAppSelector((state: any) => state.operators);
    const columns: any = useMemo(() => getTableColumns(operatorAddons), [operatorAddons]);
    const rows: any = useMemo(() => {
        const tableRows = getTableRows(operators, operatorAddons);
        return searchText
            ? tableRows.filter(row => row.name.toLowerCase().includes(searchText.toLowerCase()))
            : tableRows;

    }, [operators, operatorAddons, searchText]);
  
    useEffect(() => {
      dispatch(operatorsFetching());
      dispatch(operatorAddonsFetching());
    }, [])

    console.log(columns, rows);
    
  
    return (
        <StyledCard>
            <StyledTextField 
                id="outlined-basic" 
                label="Search" 
                placeholder='User name...'
                value={searchText} 
                onChange={({target}) => setSearchText(target.value)}
            />
            <OperatorsTable columns={columns} rows={rows} />
        </StyledCard>
  );
}
