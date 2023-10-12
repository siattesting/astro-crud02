import { atom } from 'nanostores';
import { localStore } from './localStore';

export const notes = atom([]);

export function addNote(note) {
  notes.set([...notes.get(), note]);
  console.log('Added note:', notes.get());
}

// export const localNotes = localStore('astro-notes', notes);
