import crypto from 'node:crypto';
import { getDb } from '../../db/db.js';

export const LIMITS = {
    TITLE: 50,
    DESCRIPTION: 300,
};

export const validateField = (val: string, limit: number) => val.slice(0, limit);

export const saveNote = async (title: string, content: string) => {
    const db = await getDb();

    const newNote = {
        id: crypto.randomBytes(5).toString('hex').slice(0, 9),
        title,
        content,
        createdAt: new Date().toISOString(),
        updatedAt: '',
    };

    db.data.notes.push(newNote);
    await db.write();

    return newNote;
};
