import style from '../Forms/form.module.css'
import React, { useState } from 'react'

const Form = () => {

    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')

    // 🔥 Load from localStorage ONCE
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem("Task")) || [];
    });

    const submitHandler = (e) => {
        e.preventDefault()
    }

    // ✅ Add Task
    const saveTask = (e) => {
        e.preventDefault()

        if (!title.trim() || !detail.trim()) return;

        const newTask = {
            id: Date.now(),
            title,
            detail
        }

        const updated = [...tasks, newTask]

        setTasks(updated)
        localStorage.setItem("Task", JSON.stringify(updated))

        setTitle('')
        setDetail('')
    }

    // ✅ Delete Task
    const deleteTask = (id) => {
        const updated = tasks.filter((t) => t.id !== id)

        setTasks(updated)
        localStorage.setItem("Task", JSON.stringify(updated))
    }

    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={submitHandler}>

                <div>
                    <input
                        className={style.title}
                        type="text"
                        placeholder='Enter task title..'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <textarea
                        className={style.detail}
                        placeholder='Enter details..'
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                    ></textarea>
                </div>

                <div>
                    <button className={style.addBtn} onClick={saveTask}>
                        Add Task
                    </button>
                </div>

            </form>

            <section className={style.taskSection}>
                <h1 className={style.heading}>Recent Notes</h1>

                <div className={style.taskDisplay}>
                    {tasks.length === 0 ? (
                        <p>No tasks yet...</p>
                    ) : (
                        tasks.map((t) => (
                            <div key={t.id} className={style.task}>
                                <div>
                                    <h2 className={style.taskTitle}>{t.title}</h2>
                                    <h4 className={style.taskDetail}>{t.detail}</h4>
                                </div>

                                <button
                                    onClick={() => deleteTask(t.id)}
                                    className={style.deleteTask}
                                >
                                    Delete Task
                                </button>
                            </div>
                        ))
                    )}
                </div>

            </section>
        </div>
    )
}

export default Form