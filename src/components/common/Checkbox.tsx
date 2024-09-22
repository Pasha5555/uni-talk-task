import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

interface ICheckboxProps {
    defaultChecked: boolean
}

export const CustomCheckbox: React.FC<ICheckboxProps> = ({defaultChecked}: ICheckboxProps) => {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <Checkbox
          checked={checked}
          onChange={() => setChecked(!checked)}
          sx={{
            color: '#f04259',
            '&.Mui-checked': { color: '#f04259' },
            '&.MuiCheckbox-root': { padding: 0 },
            '& .MuiSvgIcon-root': { fontSize: 22 }
          }}
        />
    )
}