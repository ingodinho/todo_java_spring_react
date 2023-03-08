import React, {Fragment, useEffect, useState} from "react";
import ToDo from "../../components/ToDo";
import {apiAddToDo, apiDeleteToDo, apiGetToDos, apiToggleToDoStatus, apiUpdateToDo} from "../../utils/api";
import {IToDo} from "../../models/toDoModel";
import AddToDo from "../../components/AddToDo";

const Home: React.FC = () => {

    const [toDos, setToDos] = useState<IToDo[]>([]);

    useEffect(() => {
        const getToDos = async () => {
            const toDos = await apiGetToDos();
            setToDos(toDos);
        }
        getToDos();
    }, [])

    const updateToDoArray = (prevToDoArray: IToDo[], updatedToDo: IToDo): IToDo[] => {
        return prevToDoArray.map(toDoItem => {
            if (toDoItem.id === updatedToDo.id) {
                return updatedToDo;
            }
            return toDoItem;
        })
    }

    const handleAddToDo = async (description: string): Promise<void> => {
        const newToDo = await apiAddToDo(description);
        setToDos(prev => [newToDo, ...prev]);
    }

    const handleEditToDo = async (todo: IToDo): Promise<void> => {
        const updatedToDo = await apiUpdateToDo(todo);
        setToDos(prev => {
            return updateToDoArray(prev, updatedToDo);
        })
    }

    const handleToggleToDo = async (todo: IToDo): Promise<void> => {
        const updatedToDo = await apiToggleToDoStatus(todo);
        setToDos(prev => {
            return updateToDoArray(prev, updatedToDo);
        })
    }

    const handleDeleteToDo = async (toDo: IToDo): Promise<void> => {
        apiDeleteToDo(toDo);
        setToDos(prev => prev.filter(toDoItem => toDoItem.id !== toDo.id));
    }

    return (
        <Fragment>
            <h1>This is my little to do app</h1>
            <AddToDo handleAddToDo={handleAddToDo} />
            <ul>
                {toDos.map(todo => (
                    <ToDo toDo={todo}
                          key={todo.id}
                          handleEditToDo={handleEditToDo}
                          handleToggleToDo={handleToggleToDo}
                          handleDeleteToDo={handleDeleteToDo}/>
                ))}
            </ul>
        </Fragment>
    )
}

export default Home;