import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

const note = {
  date: new Date(),
  content: "olá mundo"
}

export function App() {
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
      
        {/* <NoteCard date={new Date()} content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ea doloribus repellat autem, eius, repudiandae vitae architecto error aspernatur soluta distinctio voluptatum dolorem labore. Maiores placeat velit suscipit ducimus quaerat!"/>
        <NoteCard date={new Date(23, 4, 1)} content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ea doloribus repellat autem, eius, repudiandae vitae architecto error aspernatur soluta distinctio voluptatum dolorem labore. Maiores placeat velit suscipit ducimus quaerat!"/> */}

        <NoteCard note={note}/>

      </div>
    </div>
  )
}
