import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";

async function Notes() {
  const {notes} = await fetchNotes("", 1)

  return <NoteList notes={notes} />;
}

export default Notes;
