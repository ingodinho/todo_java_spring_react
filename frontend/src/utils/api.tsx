import axios from "axios";
import {IToDo} from "../models/toDoModel";

type ApiHelpers = {
    apiBaseUrl: string;
}
export const apiHelpers: ApiHelpers = {
    apiBaseUrl: "http://localhost:8080"
}

export const apiGetToDos = async () : Promise < IToDo[] > => {
    const response = await axios.get(apiHelpers.apiBaseUrl + '/todo');
    return response.data;
}

export const apiAddToDo = async (description: string) : Promise<IToDo> => {
    const response = await axios.post<IToDo>(apiHelpers.apiBaseUrl + '/todo/new', {
        description
    });
    return response.data;
}

export const apiUpdateToDo = async (toDo:IToDo) : Promise<IToDo> => {
    const response = await axios.put<IToDo>(apiHelpers.apiBaseUrl + `/todo/edit`, toDo);
    return response.data;
}

export const apiToggleToDoStatus = async (toDo: IToDo) : Promise<IToDo> => {
    const response = await axios.put<IToDo>(apiHelpers.apiBaseUrl + `/todo/toggle?id=${toDo.id}`);
    return response.data;
}

export const apiDeleteToDo = async (toDo: IToDo) : Promise<void> => {
    await axios.delete(apiHelpers.apiBaseUrl + `/todo/delete?id=${toDo.id}`);
}