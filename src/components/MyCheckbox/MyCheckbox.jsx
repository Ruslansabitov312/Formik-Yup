import { useField } from 'formik'

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' })

  return (
    <>
      <label className='checkbox'>
        <input type='checkbox' {...props} {...field} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  )
}

export default MyCheckbox
