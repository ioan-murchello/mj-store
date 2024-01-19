const FormCheckbox = ({label,name,defaultValue,size}) => {
  return (
    <div className='form-control items-center'>
      <label className='label cursor-pointer' htmlFor={name}>
        <span className='label'>{label}</span>
      </label>
      <input className={`checkbox checkbox-accent rounded-lg ${size}`} type="checkbox" name={name} defaultChecked={defaultValue} />
    </div>
  );
}
export default FormCheckbox