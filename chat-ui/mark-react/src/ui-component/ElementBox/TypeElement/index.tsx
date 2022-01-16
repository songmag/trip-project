import React, {useState} from 'react';
import {ChatElementBox} from '../../../ui-css-component/div/BoxDiv';

export type TypeElementProps = {
	key : string;
    type: TemplateElementType;
    value : string;
}

export type TemplateElementType = 'Image' |'Text' | 'Link' | 'File';

export class TemplateFactory {
	supportType:TemplateElementType;
	template: (value:string) => JSX.Element;

	constructor(type:TemplateElementType, template: (value:string) => JSX.Element){
		this.supportType = type;
		this.template = template;
	}

	public isSupported(type:TemplateElementType){
		return type === this.supportType;
	}

	public makeTemplate(value:string) {
		return this.template(value);
	}

}

export const textTemplate = (value:string) : JSX.Element => {
	return (<ChatElementBox>{value}</ChatElementBox>);
};

export const imageTemplate = (value:string) : JSX.Element => {
	return (<img src={value}/>);
};

export const linkTemplate = (value:string) : JSX.Element => {
	return (<a href={value}/>);
};

const TemplateFactories:TemplateFactory[] = [
	new TemplateFactory('Text',textTemplate),
	new TemplateFactory('Image',imageTemplate),
	new TemplateFactory('Link',linkTemplate)
];

const TypeElement = (props:TypeElementProps) => {
	const {type,value,key} = props;
	const [id,setId] = useState(key);

	const templateFactory = TemplateFactories.find( templateFactory => templateFactory.isSupported(type));
	return (templateFactory && <>{templateFactory.makeTemplate(value)}</>);
};

export default TypeElement;