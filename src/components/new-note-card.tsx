import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function NewNoteCard(){
    return(
        <Dialog.Root>
            <Dialog.Trigger className="rounded-md flex flex-col gap-3 text-left bg-slate-700 p-5 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
            <span className="text-sm font-medium text-slate-200">
                Adicionar nota
            </span>
    
            <p className="text-sm leading-6 text-slate-400">
                Grave uma nota em áudio que será convertida para texto
                automaticamente.
            </p>
            </Dialog.Trigger>
  
            <Dialog.Portal>
            <Dialog.Overlay className="inset-0 fixed bg-black/50" />
            <Dialog.Content className="fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-slate-700 md:rounded-md flex flex-col outline-none">
                <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
                <X className="size-5" />
                </Dialog.Close>
    
                <form className="flex-1 flex flex-col">
                <div className="flex flex-1 flex-col gap-3 p-5">
                    <span className="text-sm font-medium text-slate-300">
                    Adicionar nota
                    </span>  

                    <p className="text-sm leading-6 text-slate-400">
                        Comece{" "}
                        <button
                            type="button"
                            className="font-medium text-lime-400 hover:underline"
                        >
                            gravando uma nota
                        </button>{" "}
                        em áudio ou se preferir{" "}
                        <button
                            type="button"
                            className="font-medium text-lime-400 hover:underline"
                        >
                            utilize apenas texto
                        </button>
                        .
                    </p>

                </div>   


                <button
                    type="button"
                    className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
                >
                    Salvar nota
                </button>         
                </form>

            </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}