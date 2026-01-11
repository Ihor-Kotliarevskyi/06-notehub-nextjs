import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

async function Notes() {
  
  const searchText = "";
  const currentPage = 1;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", searchText, currentPage],
    queryFn: () => fetchNotes(searchText, currentPage),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}

export default Notes;
