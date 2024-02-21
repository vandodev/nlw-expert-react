import { useState } from "react";
import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export function App() {
  const [notes, setNotes] = useState([
    {id:1, date: new Date(), content: "olá mundo"},
    {id:2, date: new Date(), content: "Nota 2"}
  ])

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <img src={logo} alt="NLW Expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-state-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        
        <NewNoteCard />      
        
      
        {notes.map(note => {
          return <NoteCard key={note.id} note={note}/>
        })}

      </div>
    </div>
  )
}
