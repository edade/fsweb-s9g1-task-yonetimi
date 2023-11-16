import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from "nanoid";
export default function TaskHookForm({kisiler, submitFn}) {
  const {register, handleSubmit, reset,  formState:{errors, isValid}}=useForm({defaultValues: {title:"", description:"", people:[]}, mode:"onChange"})

  function onSubmit(e) {
    console.log("form çalıştı")
    submitFn({
      ...e,
      id: nanoid(5),
      status: "yapılacak",
    });
    reset();
  }
  return (

<form className="taskForm" onSubmit={handleSubmit(onSubmit)}>
<div className="form-line">
  <label className="input-label" htmlFor="title">
    Başlık
  </label>
  <input
     id="title" className="input-text" type='text' {...register("title", {required:"Task başlığı yazmalısınız", minLength: { value: 3, message: "Task başlığı en az 3 karakter olmalı" }})}
  />
  <div className='input-error'>{errors?.title?.message}</div>
</div>

<div className="form-line">
  <label className="input-label" htmlFor="description">
    Açıklama
  </label>
  <textarea
    className="input-textarea"
    id="description"
    {...register("description", {required:"Task açıklaması yazmalısınız", minLength: { value: 10, message: "Task açıklaması en az 10 karakter olmalı" }})}
  ></textarea>
  <div className='input-error'>{errors?.description?.message}</div>
</div>

<div className="form-line">
        <label className="input-label">İnsanlar</label>
        <div>
          {kisiler.map((p) => (
            <label className="input-checkbox" key={p}>
              <input
                type="checkbox" 
                {...register("people", {
                  required:"Lütfen en az bir kişi seçin",
                  validate: {maxLimit: (p) => p.length <= 3 || "En fazla 3 kişi seçebilirsiniz", 
                minLimit: (p)=> p.length >=1 || "Lütfen en az bir kişi seçin"}
                  })}
                value={p}
              />
              {p}
            </label>
          ))}
        </div>
        <div className='input-error'>{errors?.people?.message}</div>
      </div>
<div className="form-line">
  <button
    className="submit-button"
    type="submit"
    disabled= {!isValid}>
    Kaydet
  </button>
</div>
</form>
  )
}
