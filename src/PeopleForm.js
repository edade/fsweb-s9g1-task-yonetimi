import { useForm } from "react-hook-form";


const PeopleForm = ({ kisiler, submitFn }) => {
  const {register, handleSubmit, reset,  formState:{errors, isValid}}=useForm({defaultValues: {title:"", description:"", people:[]}, mode:"onChange"})


  function onSubmit(e) {
   // e.preventDefault();
    submitFn(e.title);
    reset();
  }

  return (
    <form className="taskForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          İsim
        </label>
        <input
          className="input-text"
          id="title"
          type="text"
          {...register("title", {
            validate: (val) => !kisiler.includes(val) || "Bu isim daha önce eklenmiş!"  
          })}

        />
        <p className="input-error">{errors?.title?.message}</p>
      </div>

      <div className="form-line">
        <button
          className="submit-button"
          type="submit"
          disabled={!isValid}
        >
          Ekle
        </button>
      </div>
    </form>
  );
};

export default PeopleForm;
