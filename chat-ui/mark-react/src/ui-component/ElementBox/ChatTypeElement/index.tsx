import {
	imageTemplate, linkTemplate,
	textTemplate,
	TypeElementProps
} from '../../ElementBox/TypeElement';
import React, {useCallback} from 'react';
import ChatTemplateFactory from './ChatTemplateFactory';

type ChatTypeElementProps = {
    isMyMessage : boolean
} & TypeElementProps

const ChatTypeElement = (props : ChatTypeElementProps) => {
	const {isMyMessage, type, key, value} = props;
	const chatTemplate: ChatTemplateFactory | undefined = [
		new ChatTemplateFactory('Text',textTemplate,isMyMessage),
		new ChatTemplateFactory('Image',imageTemplate,isMyMessage),
		new ChatTemplateFactory('Link',linkTemplate,isMyMessage)
	].find( template => template.isSupported(type));

	return chatTemplate && chatTemplate.makeTemplate(value);
};

export default ChatTypeElement;