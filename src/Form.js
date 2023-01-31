import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyCheckbox, MySelect, MyTextarea, MyTextInput } from './components'

// Options for custom select component
const selectOptions = [
  { key: 'Выберите валюту', value: '' },
  { key: 'USD', value: 'usd' },
  { key: 'RUB', value: 'rub' },
  { key: 'SOM', value: 'som' },
]

// Initial State
let initialState = {
  name: '',
  email: '',
  amount: 0,
  currency: '',
  text: '',
  terms: false,
}

// Yup Validation
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, '2 и более символов')
    .required('Обязательное поле'),
  email: Yup.string()
    .email('Неправильный email адрес')
    .required('Обязательное поле'),
  amount: Yup.number()
    .min(5, 'Не менее 5')
    .required('Обязательное поле'),
  currency: Yup.string()
    .required('Выберите валюту'),
  text: Yup.string()
    .min(10, '10 и более символов'),
  terms: Yup.boolean()
    .required('Необходимо согласие')
    .oneOf([true], 'Необходимо согласие'),
})

const CustomForm = () => {
  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className='form'>
        <h2>Отправить пожертвование</h2>
        <MyTextInput
          label='Ваше имя'
          id='name'
          name='name'
          type='text'
        />

        <MyTextInput
          label='Ваша почта'
          id='email'
          name='email'
          type='email'
        />

        <MyTextInput
          label='Количество'
          id='amount'
          name='amount'
          type='number'
        />

        <MySelect
          label='Валюта'
          id='currency'
          name='currency'
          options={selectOptions}
        />

        <MyTextarea
          label='Ваше сообщение'
          id='text'
          name='text'
        />

        <MyCheckbox name='terms'>
          Соглашаетесь с политикой конфиденциальности?
        </MyCheckbox>
        <button type='submit'>Отправить</button>
      </Form>
    </Formik>
  )
}

export default CustomForm
