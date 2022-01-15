import React, {CSSProperties, MouseEventHandler} from 'react';
import {CssButton} from '../../ui-css-component/button/SubmitButton';

type ButtonProps = {
    onClick?: MouseEventHandler;
    buttonValue : string;
    disabled?: boolean;
    type? : 'reset'|'submit'|'button'
}

const Button = (props : ButtonProps) => (<CssButton onClick={props.onClick} disabled={props.disabled ?? false} type={props.type}>{props.buttonValue}</CssButton>);
export default Button;