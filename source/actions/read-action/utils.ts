import dayjs from 'dayjs';
import { getDb } from '../../db/db.js';
import { Note } from './types.js';

export const fetchNotes = async (): Promise<Note[]> => {
    const db = await getDb();
    return db.data.notes;
};

export const formatNoteDate = (date: string): string => {
    return dayjs(date).format('MMM D, YYYY h:mm A');
};
