import React from "react";
import { useState } from "react";
import { StyledCheckbox } from "./styled";

interface ICheckboxProps {
  defaultChecked: boolean
}

export const CustomCheckbox: React.FC<ICheckboxProps> = ({defaultChecked}: ICheckboxProps) => {
    const [checked, setChecked] = useState(defaultChecked);

    return (
      <StyledCheckbox checked={checked} onChange={() => setChecked(!checked)} />
    )
}