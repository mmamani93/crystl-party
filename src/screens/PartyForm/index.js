import React, { useState } from 'react';
import { getWeatherByDate } from '../../utils/weather';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker'
import Routes from '../../constants/routes';
import Cities from '../../constants/cities';
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import { saveFormData }  from '../../reducers/partyFormSlice';
import { storeWeather } from '../../reducers/weatherSlice';
import { storeBeers } from '../../reducers/beerSlice';
import { calculateBeersForWeather } from '../../utils/beerCalculator';

const PartyForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = async data => {
    const temperature = await getWeatherByDate(startDate, data.city)
    const beerAmount = calculateBeersForWeather(temperature, data.participants)
    dispatch(saveFormData({...data, startDate}))
    dispatch(storeWeather(temperature))
    dispatch(storeBeers(beerAmount))
    navigate(Routes.PARTY_FORM)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <label type='text' name='date'>
        Event Date:
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </label>
      <label type='text' name='city'>
        City:
        <select {...register('city', { required: true })}>
          {Cities.map(city => (
            <option value={city} key={city}>{city}</option>
            ))}
        </select>
      </label>
      <label type='text' name='address'>
        Address:
        <input {...register('address', { required: true })} />
      </label>
      <label type='text' name='startTime'>
        Start Time:
        <input {...register('startTime', { required: true })} />
      </label>
      <label type='text' name='reason'>
        Reason:
        <input {...register('reason', { required: true })} />
      </label>
      <label type='text' name='participants'>
        Participants:
        <input {...register('participants', { required: true })} />
      </label>
      {errors.address && <span>This field is required</span>}
      {errors.startTime && <span>This field is required</span>}
      {errors.participants && <span>This field is required</span>}
      {errors.reason && <span>This field is required</span>}
      
      <input type='submit' />
    </form>
  );
}

export default PartyForm
