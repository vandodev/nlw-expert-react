import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface NoteCardProps {  
    note: {
        date: Date;
        content: string;
    };
  }

export function NoteCard({note}:NoteCardProps){
    return(
        <Dialog.Root>
            <Dialog.Trigger className="rounded-md flex flex-col gap-3 text-left relative overflow-hidden bg-slate-800 p-5 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
                
                <span className="text-sm font-medium text-slate-300">
                    {/* há {props.note.date.toISOString()} dias */}
                    há 2 dias
                </span>

                <p className="text-sm leading-6 text-slate-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti corrupti nulla reprehenderit ullam maiores est excepturi labore accusantium sunt, atque vel blanditiis. Deleniti quam voluptates, necessitatibus tempore ipsum aspernatur.
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="inset-0 fixed bg-black/50" />
                <Dialog.Content className="fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-slate-700 md:rounded-md flex flex-col outline-none">
                    <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
                        <X className="size-5" />
                    </Dialog.Close>

                    <div className="flex flex-1 flex-col gap-3 p-5">
                        <span className="text-sm font-medium text-slate-300">
                            Há 2 dias
                        </span>
                        <p className="text-sm leading-6 text-slate-400">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, modi deleniti molestias veritatis doloribus debitis eius laudantium eaque sit, tenetur porro praesentium, esse quae? Hic nemo temporibus harum accusamus cupiditate?
                        </p>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>

        </Dialog.Root>
    )
}