import Button from '../../Button';
import React,{useMemo} from 'react';

type FileElementProps = {
    fileType : FileType;
    fileName : string;
    lastModifyAt : string;
}

export type FileType ='xls'| 'file' | 'source' | 'zip' ;

const FileElement = (props : FileElementProps) => {
	const { fileType, fileName, lastModifyAt}= props;
	const getFileImage = (type:FileType) => {
		switch (type) {
		case 'xls':
			return '';
		case 'file':
			return '';
		case 'source' :
			return '';
		case 'zip' :
			return '';
		default:
			return '';
		}
	};
    
	const fileImage = getFileImage(fileType);

	return (
		<span>
			<Button buttonValue={fileName}></Button>
			{lastModifyAt}
		</span>
	);
};

export default FileElement;