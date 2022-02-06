import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Routes from '@constants/routes'
import { saveFormData, storeWeather, storeBeers } from '@reducers/partyFormSlice'
import { calculateBeersForWeather } from '@utils/beerCalculator'
import Input from '@components/Input'
import { getWeatherByDate } from '@utils/weather'
import Select from '@components/Select'
import Picker from '@components/DatePicker'
import Cities from './constants/cities'
import styles from './styles.module.scss'

const PartyForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [startDate, setStartDate] = useState(new Date())

  const setDate = (date) => setStartDate(date)

  const onSubmit = async data => {
    const temperature = await getWeatherByDate(startDate, data.city)
    const beerAmount = calculateBeersForWeather(temperature, data.participants)
    dispatch(saveFormData({ ...data, startDate }))
    dispatch(storeWeather(temperature))
    dispatch(storeBeers(beerAmount))
    navigate(Routes.INVITATION)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Input name="company" register={register} required label="Company Name" defaultValue="Crystl" error={errors.company} />
      <Picker
        selected={startDate}
        onChange={setDate}
        label="Event Date"
        showTimeSelect
        maxDate={30}
      />
      <Select name="city" register={register} required options={Cities} error={errors.city} />
      <Input name="address" register={register} required error={errors.address} />
      <Input name="reason" register={register} required label="Meeting Reason" error={errors.reason} />
      <Input name="participants" register={register} required error={errors.participants} />

      <input type="submit" />
    </form>
  )
}

export default PartyForm
