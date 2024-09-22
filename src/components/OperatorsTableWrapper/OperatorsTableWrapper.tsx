import React from 'react';
import { useMemo } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import { useDebouncedValue } from '../../hooks/useDebouncedValue';
import { useTableData } from '../../hooks/useTableData';
import { RootState } from '../../store/store';
import { Loader } from '../common/Loader';
import { Notification } from '../common/Notification';
import { OperatorsTable } from '../OperatorsTable/OperatorsTable';
import { StyledCard, StyledTextField } from './styled';

export const OperatorsTableWrapper: React.FC = () => {
    const {isLoading, error} = useAppSelector((state: RootState) => state.operators);
    const [debouncedValue, searchValue, setSearchValue] = useDebouncedValue(300);
    const [columns, rows] = useTableData();
    const filteredRows = useMemo(() => debouncedValue 
        ? rows.filter((row: any) => row.name.toLowerCase().includes(debouncedValue.toLowerCase()))
        : rows, [rows, debouncedValue]);

    if (error) {
        return <Notification 
            type='error' 
            title='Error' 
            message='Something went wrong with the table data.' 
        />;
    }
  
    return (
        <>
            {
                isLoading 
                    ? <Loader />
                    : <StyledCard>
                        <StyledTextField 
                            id="outlined-basic" 
                            label="Search" 
                            placeholder='User name...'
                            value={searchValue} 
                            onChange={({target: {value}}) => setSearchValue(value)}
                        />
                        <OperatorsTable columns={columns} rows={filteredRows} />
                </StyledCard>
            }
        </>
  );
}
