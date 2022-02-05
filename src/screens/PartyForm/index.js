import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker'
import Routes from '../../constants/routes';
import Cities from '../../constants/cities';
import styles from './styles.module.scss'

const PartyForm = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = data => {
    console.log(data);
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
      <label type='text' name='participants'>
        Participants:
        <input {...register('participants', { required: true })} />
      </label>
      {errors.city && <span>This field is required</span>}
      {errors.address && <span>This field is required</span>}
      {errors.startTime && <span>This field is required</span>}
      {errors.participants && <span>This field is required</span>}
      
      <input type='submit' />
    </form>
  );
}

export default PartyForm