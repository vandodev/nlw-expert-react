export function NewNoteCard(){
    return(
        <button className="rounded-md flex flex-col gap-3 text-left bg-slate-700 p-5 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
            <span className="text-sm font-medium text-slate-200">
                Adicionar nota
            </span>
            <p className="text-sm leading-6 text-slate-400">
                Grave uma nota em áudio que será convertida para texto
                automaticamente.
            </p>
       </button>
    )
}