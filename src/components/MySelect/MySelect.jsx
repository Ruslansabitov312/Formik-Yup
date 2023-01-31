import { useField } from 'formik'

const MySelect = ({ label, options, ...props }) => {
  const [field, meta] = useField({ ...props })

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <select {...props} {...field}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </select>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  )
}

export default MySelect
