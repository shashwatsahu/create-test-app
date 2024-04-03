import React, {useState} from 'react';
import { Explorer } from './data';
import { FolderItem } from '../common/FolderItem';

export const Folder = () => {
    const [history, setHistory] = useState([]);

    const [folderData, setFolderData] = useState(Explorer);


    const addFolder = (folderKey, folderType, fileName) => {
        let tempData = JSON.parse(JSON.stringify(folderData));
        if (tempData.items.length === 0 && folderType === 'folder') {
            tempData.items.push({
                    id: Math.random(),
                    name: fileName,
                    isFolder: true,
                    items: [],
            })
        } else {
            let tempObj = tempData.items.find(el => el.name === folderKey);
            tempObj.items.push({
                id: Math.random(),
                name: fileName,
                isFolder: true,
                items: [],
            })   
        }
        setFolderData(tempData);
    }

    const handleFolderClick = (folderKey) => {
        let temp = [...history];
        if (temp?.includes(folderKey)) {
            let id = temp.findIndex(el => el === folderKey);
            temp.splice(id, 1);
            setHistory(temp);
        } else {
            temp.push(folderKey);
            setHistory(temp);
        }
    }
    return (
        <>
            <FolderItem 
                id={Explorer.name}
                data={folderData}
                history={history}
                onClick={handleFolderClick}
                handleAddFolder={addFolder}
            />
        </>
    )
}
