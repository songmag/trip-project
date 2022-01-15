import {ChangeEvent, ChangeEventHandler, useState} from 'react';
import React from 'react';
import {FixWidthInput} from '../../ui-css-component/input/FixWidthInput';

type InputTextProp = {
    type?: string;
    onChange?: ChangeEventHandler;
	value? : string;
	length? : number;
} & Omit<HTMLInputElement,'type'|'onChange'>

const Input = (prop:InputTextProp) => {
	const [value,setValue] = useState('');

	const valueChangeEventHandler: ChangeEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value ?? '');
	};

	return (
		<FixWidthInput maxLength={prop.length} type={prop.type ?? 'text'} onChange={prop.onChange ?? valueChangeEventHandler} value={prop.value ?? value}/>
	);
};

export default Input;