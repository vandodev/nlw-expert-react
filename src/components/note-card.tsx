export function NoteCard(){
    return(
        <button className="rounded-md flex flex-col gap-3 text-left relative overflow-hidden bg-slate-800 p-5 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
            
            <span className="text-sm font-medium text-slate-300">
                há 2 dias
            </span>

            <p className="text-sm leading-6 text-slate-400">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ea doloribus repellat autem, eius, repudiandae vitae architecto error aspernatur soluta distinctio voluptatum dolorem labore. Maiores placeat velit suscipit ducimus quaerat!
            </p>

            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
        </button>
    )
}