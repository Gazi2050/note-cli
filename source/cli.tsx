#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';
import App from './app.js';

meow(
	`
	Usage
	  $ note-cli

	Options
		--create, -c  Create a new note
		--update, -u  Update an existing note
		--delete, -d  Delete a note
		--read,   -r  Read/List notes

	Examples
	  $ note-cli --create
	  $ note-cli -c
	`,
	{
		importMeta: import.meta,
	},
);

render(<App />);
