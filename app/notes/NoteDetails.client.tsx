'use client'

import css from "./NoteDetails.module.css"
import { fetchNoteById } from "@/lib/api";
import { Note } from "@/types/note";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

function NoteDetailsClient() {
	const { id } = useParams<{ id: string }>();


const {
    data
  } = useQuery<Note, Error>({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    placeholderData: keepPreviousData,
	refetchOnMount: false,

  });

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