import {TemplateElementType, TemplateFactory} from '../../../ElementBox/TypeElement';
import {LeftDiv, RightDiv} from '../../../../ui-css-component/div/BoxDiv';
import React from 'react';

class ChatTemplateFactory extends TemplateFactory {
    isMyMessage: boolean;

    constructor(type: TemplateElementType, template: (value: string) => JSX.Element, isMyMessage: boolean) {
    	super(type, template);
    	this.isMyMessage = isMyMessage;
    }

    public makeTemplate(value:string) {
    	if(this.isMyMessage)
    		return <RightDiv>{this.template(value)}</RightDiv>;
    	return <LeftDiv>{this.template(value)}</LeftDiv>;
    }
}

export default ChatTemplateFactory;
