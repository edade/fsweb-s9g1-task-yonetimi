import React from 'react'
import { useForm } from 'react-hook-form'
export default function TaskHookForm() {
  const {register, handleSubmit, formState:{errors}}=useForm({defaultValues: {title:"", description:"", people:[]}})



  const onSubmit = (formData) =>{
    console.log(formData)
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
    {...register("description")}
  ></textarea>
</div>

<div className="form-line">
  <label className="input-label">İnsanlar</label>
  <div>
      <label className="input-checkbox">
        <input
          type="checkbox"
        />
      </label>
  </div>
</div>
<div className="form-line">
  <button
    className="submit-button"
    type="submit">
    Kaydet
  </button>
</div>
</form>
  )
}
