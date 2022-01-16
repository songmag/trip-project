import React, {EventHandler, FormEventHandler, KeyboardEventHandler, useState} from 'react';
import Button from '../Button';
import {FormBox} from '../../ui-css-component/div/BoxDiv';

type FormProps = {
    onSubmit: () => boolean;
    isPossibleHandler?: (setPossible: (possible: boolean) => void) => void;
    submitButtonValue: string;
} & Pick<HTMLElement, 'children'>

const Form = (props: FormProps) => {
	const {children, onSubmit, isPossibleHandler, submitButtonValue} = props;
	const [possible, setPossible] = useState(false);

	const button = isPossibleHandler ??
        <Button buttonValue={submitButtonValue} onClick={onSubmit} disabled={possible}/>;

	const submitPressEnter: KeyboardEventHandler = (event) => {
		if (event.key === 'Enter') {
			if (onSubmit()) {
				return null;
			}
		}
	};

	return (
		<FormBox onKeyUp={submitPressEnter}>
			{children}
			{button ?? <Button buttonValue={submitButtonValue} onClick={onSubmit}/>}
		</FormBox>
	);
};

export default Form;