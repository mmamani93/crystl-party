const Select = ({ name, register, required = false, label, options = [] }) => {
  const displayLabel = label || name.charAt(0).toUpperCase() + name.slice(1);
  
  return (
  <>
    <label>{displayLabel}</label>
    <select {...register(name, { required })}>
      {options.map(opt => (
        <option value={opt} key={opt}>{opt}</option>
      ))}
    </select>
  </>
)
}

export default Select