import { IOperator } from "../../models/IOperator";
import { IOperatorAddon } from "../../models/IOperatorAddon";
import { formatDate, getTableColumns, getTableRows } from "../../utils/utils";


describe('Table Utilities', () => {
  const operatorAddons: IOperatorAddon[] = [
    { id: "1", fieldName: 'Addon1', text: 'Text1', isChecked: false },
    { id: "2", fieldName: 'Addon2', text: 'Text2', isChecked: true },
  ];

  const operators: IOperator[] = [
    { id: "1", name: 'User1', avatar: 'url1', isWorking: true, createdAt: '2023-09-01T12:00:00Z' },
    { id: "2", name: 'User2', avatar: 'url2', isWorking: false, createdAt: '2023-09-02T12:00:00Z' },
  ];

  it('should return the correct columns for the DataGrid', () => {
    const columns = getTableColumns(operatorAddons);
    
    expect(columns).toHaveLength(6);
    expect(columns[0].field).toBe('order');
    expect(columns[1].headerName).toBe('User');
    expect(columns[2].headerName).toBe('Is working?');
    expect(columns[3].field).toBe('createdAt');
    expect(columns[4].field).toBe('addon1');
    expect(columns[5].field).toBe('addon2');
  });

  it('should return the correct rows for the DataGrid', () => {
    const rows = getTableRows(operators, operatorAddons);

    expect(rows).toHaveLength(2);
  });

  it('should format the date correctly', () => {
    const formattedDate = formatDate('2023-09-01T12:00:00Z');
    expect(formattedDate).toBe('01.09.2023 12:00');
  });
});
