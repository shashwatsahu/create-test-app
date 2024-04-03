import React, { useState } from 'react';

export const FolderItem = ({id, data, history, onClick, handleAddFolder}) => {

    const [showInput, setShowInput] = useState('');
    const [inputText, setInputText] = useState("");

    if (!data?.items || !data.items.length) {
        return <div style={{paddingLeft: 20}}>
            <label>{data.name}</label>
        </div>
    }

    return (
        <>
        <div style={{paddingLeft: 20}}>
            <>
            <label onClick={() => onClick(id)}>{data.name}</label>
            <button onClick={() => setShowInput(showInput ? "" :"folder")}>Folder +</button>
            <button onClick={() => setShowInput(showInput ? "" :"file")}>File +</button>
            </>
            {showInput && <>
            <input type='text' value={inputText} onChange={event => setInputText(event.target.value)} />   
            <button onClick={() => handleAddFolder(id, 'folder', inputText)}>Save</button>
            </>}
            {[...history].includes(id) && data.items.map((folderItem, index) => 
            <FolderItem key={index.toString()} id={folderItem.name} history={history} onClick={onClick} data={folderItem} />)}
        </div>
        </>
    )
}
