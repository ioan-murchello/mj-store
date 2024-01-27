const FormSelect = ({label, name, list, defaulValue, size}) => { 
  return (
    <div className="form-control">
        <label className="label" htmlFor={name}>
            <span className="label-text capitalize">{label}</span>
        </label>
        <select className={`select select-bordered rounded-lg ${size}`} name={name} id={name} defaultValue={defaulValue}>
            {list.map(item => {
                return <option key={item} value={item}>{item}</option>
            })}
        </select>
    </div>
  )
}
export default FormSelect