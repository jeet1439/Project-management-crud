import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
export default function NewProject({onAdd, onCancel}){
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    
    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value
        const enteredDueDate = dueDate.current.value;
        //validation...
        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            modal.current.open();
            return;
        }
    onAdd({
        title:enteredTitle,
        description:enteredDescription,
        dueDate: enteredDueDate
    });
    };
    

    return <>
    <Modal ref={modal} buttonCaption="Okey">
        <h2 className="text-xl font-bold text stone-500 my-3">Invalid Input</h2>
        <p className='text-stone-700 mb-3 '>Something went wrong &#128533;</p>
        <p className='text-stone-700 mb-4'>please make sure that u entered a valid value for every field</p>
        </Modal>
    <div className="w-[35rem] mt-16">
        <menu className="flex item-center justify-end gap-4 my-4">
            <li><button className=" px-6 py-2 rounded-md bg-stone-200 text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
            <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
            >Save</button></li>
        </menu>
        <div>
           <Input type="text" ref={title} label="Title"/> 
           <Input ref={description}label="Description" textarea/> 
           <Input type="date" ref={dueDate} label="Due Date"/> 
        </div>
    </div>
    </>
}