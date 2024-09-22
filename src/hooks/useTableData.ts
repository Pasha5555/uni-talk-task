import { useEffect, useMemo } from 'react';
import { operatorAddonsFetching, operatorsFetching } from '../store/reducers/OperatorsSlice';
import { getTableColumns, getTableRows } from '../utils/utils';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { GridColDef} from '@mui/x-data-grid';
import { GridRowModel } from '@mui/x-data-grid/models';
import { RootState } from '../store/store';

export const useTableData = (): [GridColDef[], GridRowModel[]] => {
    const dispatch = useAppDispatch();
    const {operators, operatorAddons} = useAppSelector((state: RootState) => state.operators);
    const columns: GridColDef[] = useMemo(() => getTableColumns(operatorAddons), [operatorAddons]);
    const rows: GridRowModel[] = useMemo(() => getTableRows(operators, operatorAddons), [operators, operatorAddons]);

    useEffect(() => {
      dispatch(operatorsFetching());
      dispatch(operatorAddonsFetching());
    }, [dispatch])

  return [columns, rows];
};
