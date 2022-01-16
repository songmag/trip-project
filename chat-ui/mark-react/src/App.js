import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react';
import Input from './ui-component/Input';
import Form from './ui-component/Form';
import ElementBox from './ui-component/ElementBox';
import TypeElement from './ui-component/ElementBox/TypeElement';
import {CenterBox} from './ui-css-component/div/BoxDiv';
import ChatTypeElement from './ui-component/ElementBox/ChatTypeElement';

function App() {

	const [dummyData, setDummyData] = useState([
		{
			key:'text1',
			type:'Text',
			value:'value1',
			isMyText : false
		},
		{
			key:'text2',
			type:'Text',
			value:'value2',
			isMyText : false
		},
		{
			key:'text3',
			type:'Text',
			value:'value3',
			isMyText : false
		},
	]);

	const [myText,setMyText] = useState('');

	const onSubmit = () => {
		if(myText === '') return;
		const sendText = myText;
		setMyText('');
		setDummyData((value) => value.concat({
			key: 'text4',
			type: 'Text',
			value: sendText,
			isMyText: true
		}) );
	};

	const setTextChangeEventHandler = (e) => {
		setMyText(e.target.value ?? '');
	};


	return (
		<CenterBox>
			<ElementBox>
				{dummyData.map( data => <ChatTypeElement key={data.key} type={data.type} value={data.value} isMyMessage={data.isMyText}/>)}
			</ElementBox>
			<Form onSubmit={onSubmit} submitButtonValue={'전송'}>
				<Input onChange={setTextChangeEventHandler} value={myText}/>
			</Form>
		</CenterBox>
	);
}

export default App;
