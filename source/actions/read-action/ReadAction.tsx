import React, { useMemo, useState, useEffect } from 'react';
import { Box, Text } from 'ink';
import Table from '../../components/table/Table.js';
import { fetchNotes, formatNoteDate } from './utils.js';
import { Note } from './types.js';

export default function ReadAction() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const fetchedNotes = await fetchNotes();
            setNotes(fetchedNotes);
            setLoading(false);
        }
        load();
    }, []);

    const columns = useMemo(() => [
        { head: 'ID', index: 0, width: 12 },
        { head: 'Title', index: 1, width: 30 },
        { head: 'Created At', index: 2, width: 20 }
    ], []);

    const rows = useMemo(() => {
        return notes.map(note => [
            note.id,
            note.title,
            formatNoteDate(note.createdAt)
        ]);
    }, [notes]);

    if (loading) {
        return (
            <Box paddingY={1}>
                <Text color="yellow">Loading notes...</Text>
            </Box>
        );
    }

    if (notes.length === 0) {
        return (
            <Box paddingY={1}>
                <Text color="red">No notes found. Create one with `note-cli -c`!</Text>
            </Box>
        );
    }

    return (
        <Box flexDirection="column" paddingY={1}>
            <Box borderStyle="round" borderColor="green" paddingX={1} marginBottom={1}>
                <Text bold>LIST OF NOTES</Text>
            </Box>
            <Table columns={columns} data={rows} />
            <Box marginTop={1}>
                <Text color="gray">Showing {notes.length} note(s)</Text>
            </Box>
        </Box>
    );
}
