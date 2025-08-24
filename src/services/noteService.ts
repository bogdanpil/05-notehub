import axios from "axios";
import type { Note } from "../types/note";

const BASE_URL = "https://notehub-public.goit.study/api/notes";
const TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;

export interface FetchNotesResponse {
    notes: Note[];
    totalPages: number;
}

export const fetchNotes = async (search: string, page = 1, perPage = 12): Promise<FetchNotesResponse> => {
    const params: Record<string, string> = { 
        page: String(page),
        perPage: String(perPage),
    };
    if (search.trim() !== '') {
        params.search = search;
    }

    const config = {
        params,
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = await axios.get<FetchNotesResponse>(BASE_URL, config);
    return response.data;
}

export const createNote = async (note: { title: string; content: string; tag: string }): Promise<Note> => {
    const config = {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response = await axios.post<Note>(BASE_URL, note, config);
    return response.data;
}

export const deleteNote = async (id: string): Promise<Note> => {
    const config = {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    }
    const response: AxiosResponse<Note> = await axios.delete(`${BASE_URL}/${ id }`, config);
    return response.data;
}