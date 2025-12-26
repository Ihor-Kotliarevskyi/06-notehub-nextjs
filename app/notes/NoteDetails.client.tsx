'use client'

import css from "../../components/NoteDetails/NoteDetails.module.css"
import { fetchNoteById } from "@/lib/api";
import { Note } from "@/types/note";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

function NoteDetailsClient(id) {

const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery<Note, Error>({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    placeholderData: keepPreviousData,
  });
console.log(data);

    return (<div className={css.container}>
	<div className={css.item}>
	  <div className={css.header}>
	    <h2>{data?.title}</h2>
	  </div>
	  <p className={css.content}>{data?.content}</p>
	  <p className={css.date}>{data?.createdAt}</p>
	</div>
</div>
)
}

export default NoteDetailsClient;