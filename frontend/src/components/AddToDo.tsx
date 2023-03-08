import React, {Fragment, useState} from "react";

export interface IPropsToDo {
    handleAddToDo: (description: string) => void;
}
const AddToDo:React.FC<IPropsToDo> = ({handleAddToDo}) => {

    const [inputDescription, setInputDescription] = useState<string>("");

    const handleInputDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputDescription(event.target.value);
    }

    const addToDo = () => {
        handleAddToDo(inputDescription);
        setInputDescription("");
    }

    return (
        <Fragment>
            <input type={"text"} value={inputDescription} onChange={handleInputDescriptionChange}/>
            <button onClick={addToDo}>Add</button>
        </Fragment>
    )
}

export default AddToDo;