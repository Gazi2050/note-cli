import { getDb } from '../../db/db.js';
import { Note } from '../read-action/types.js';

export const findNoteById = async (id: string): Promise<Note | undefined> => {
    const db = await getDb();
    return db.data.notes.find(note => note.id === id);
};

export const updateNote = async (id: string, updates: Partial<Note>): Promise<void> => {
    const db = await getDb();
    const index = db.data.notes.findIndex(note => note.id === id);

    if (index !== -1) {
        db.data.notes[index] = {
            ...db.data.notes[index]!,
            ...updates,
            updatedAt: new Date().toISOString()
        };
        await db.write();
    }
};
