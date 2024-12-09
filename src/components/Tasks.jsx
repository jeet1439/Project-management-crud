import NewTask from "./NewTask.jsx"
export default function Tasks({tasks, onAdd, onDeletee}){
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 md-4">Tasks</h2>
         <NewTask onAdd={onAdd}/>
         {tasks.length == 0 && (<p className="text-stone-800 my-4">This project doesnot have anytask</p>)}
         {tasks.length > 0 && (
          <ul>
            {tasks.map((task) => 
            <li key={task.id} className="flex justify-between my-3 p-4 rounded-md bg-stone-200">
                <span>{task.text}</span>
                <button className="text-stone-700 hover:text-red-700" onClick={() => onDeletee(task.id)}>Clear</button>
            </li> )}
         </ul>
        )}
    </section>
}
