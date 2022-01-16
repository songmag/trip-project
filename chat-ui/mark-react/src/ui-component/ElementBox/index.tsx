import React from 'react';
import {Box} from '../../ui-css-component/div/BoxDiv';

type ElementBoxProps = Pick<HTMLDivElement , 'children' | 'style'>

const ElementBox = (props : ElementBoxProps) => {
	return (<Box>{props.children}</Box>);
};

export default ElementBox;

