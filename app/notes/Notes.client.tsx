'use client'

import NoteList from "@/components/NoteList/NoteList";
import { deleteNote, fetchNotes, NotesHttpResponse } from "@/lib/api";
import { Note } from "@/types/note";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

function NotesClient() {
const [currentPage, setCurrentPage] = useState<number>(1);
const [searchText, setSearchText] = useState<string>("");

const queryClient = useQueryClient()

const deletionM = useMutation<void, Error, Note["id"]>({
  mutationFn: async (id: Note["id"]) => {
    await deleteNote(id);
  },
  onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Failed to delete note");
    },
  onSuccess: ()=> {
    queryClient.invalidateQueries({queryKey: ["notes"]});
    toast.error("Note deleted");
  }
})

  const {
    data: { notes = [], totalPages = 0 } = {},
    isLoading,
    isError,
    error,
  } = useQuery<NotesHttpResponse, Error>({
    queryKey: ["notes", currentPage, searchText],
    queryFn: () => fetchNotes(searchText, currentPage),
    placeholderData: keepPreviousData,
  });

  return (<NoteList notes={notes} handleClick={()=>{deletionM.mutate(id)}}/>)
}

export default NotesClient;