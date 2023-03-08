import React, {useState} from "react";
import {IToDo} from "../models/toDoModel";

interface IPropsToDo {
    toDo: IToDo;
    handleEditToDo: (toDo: IToDo) => void;
    handleToggleToDo: (toDo: IToDo) => void;
    handleDeleteToDo: (toDo: IToDo) => void;
}

const ToDo: React.FC<IPropsToDo> = ({toDo, handleEditToDo, handleToggleToDo, handleDeleteToDo}) => {

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [inputDescription, setInputDescription] = useState<string>(toDo.description);

    const changeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputDescription(event.target.value);
    }

    const editToDo = () => {
        setIsEditing(true);
    }

    const updateDescription = () => {
        const editedToDo:IToDo = {
            id: toDo.id,
            description: inputDescription,
            status: toDo.status
        }
        handleEditToDo(editedToDo);
        setIsEditing(false);
    }

    const toggleToDo = () => {
        handleToggleToDo(toDo);
    }

    const deleteToDo = () => {
        handleDeleteToDo(toDo);
    }

    return (
        <li>
            {isEditing && (
                <div>
                    <input type={"text"} value={inputDescription} onChange={changeDescription}/>
                    <button onClick={updateDescription}>Update</button>
                </div>)}

            {!isEditing && <p>{toDo.description}</p>}
            <div>
                <button onClick={deleteToDo}>X</button>
                <button onClick={editToDo}>Edit</button>
                <button onClick={toggleToDo}>Toggle</button>
                <p>{toDo.status ? "DONE" : "NOT DONE"}</p>
            </div>
        </li>
    )
}

export default ToDo;
