import Select, { ActionMeta, SingleValue } from 'react-select'

import types from '../../data/types.json';

import { TypeModel } from '../../models/Type';

interface TypeSelectorProps {
    onSelect: ((newValue: SingleValue<SelectOptionProps>, actionMeta: ActionMeta<SelectOptionProps>) => void) | undefined;
}

export interface SelectOptionProps {
    value: string;
    label: string;
}

const options: SelectOptionProps[] = [] as SelectOptionProps[];

types.map((type: TypeModel) => options.push({
    value: type.id,
    label: type.label
}));

const TypeSelector = ({ onSelect }: TypeSelectorProps) => {
    return (
        <Select options={options} className="text-purple-800" onChange={onSelect} />
    );
}

export default TypeSelector;