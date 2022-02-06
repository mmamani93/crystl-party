import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Routes from '@constants/routes'
import {
  saveFormData,
  storeWeather,
  storeBeers
} from '@reducers/partyFormSlice'
import { calculateBeersForWeather } from '@utils/beerCalculator'
import Input from '@components/Input'
import { getWeatherByDate } from '@utils/weather'
import Select from '@components/Select'
import Picker from '@components/DatePicker'
import Button from '@components/Button'
import Cities from './constants/cities'
import styles from './styles.module.scss'

const PartyForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [startDate, setStartDate] = useState(new Date())

  const setDate = (date) => setStartDate(date)

  const onSubmit = async (data) => {
    const temperature = await getWeatherByDate(startDate, data.city)
    const beerAmount = calculateBeersForWeather(temperature, data.participants)
    dispatch(saveFormData({ ...data, startDate }))
    dispatch(storeWeather(temperature))
    dispatch(storeBeers(beerAmount))
    navigate(Routes.INVITATION)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Picker
        label="Event Date"
        maxDate={30}
        onChange={setDate}
        selected={startDate}
        showTimeSelect
      />
      <Select
        error={errors.city}
        name="city"
        options={Cities}
        register={register}
        required
      />
      <Input
        error={errors.address}
        name="address"
        register={register}
        required
      />
      <Input
        error={errors.reason}
        label="Meeting Reason"
        name="reason"
        register={register}
        required
      />
      <Input
        error={errors.participants}
        name="participants"
        register={register}
        required
        type="number"
      />
      <Button type="submit" text="Lets do it!" />
    </form>
  )
}

export default PartyForm
