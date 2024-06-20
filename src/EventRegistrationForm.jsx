import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validate';
import './EventRegistrationForm.css';



const EventRegistrationForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(submit, validate);

  function submit() {
    alert(`Form submitted successfully!\n\nSummary:\n${JSON.stringify(values, null, 2)}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={values.name} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={values.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Age:</label>
        <input type="number" name="age" value={values.age} onChange={handleChange} />
        {errors.age && <p>{errors.age}</p>}
      </div>
      <div>
        <label>Are you attending with a guest?</label>
        <select name="attendingWithGuest" value={values.attendingWithGuest} onChange={handleChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      {values.attendingWithGuest === 'yes' && (
        <div>
          <label>Guest Name:</label>
          <input type="text" name="guestName" value={values.guestName} onChange={handleChange} />
          {errors.guestName && <p>{errors.guestName}</p>}
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventRegistrationForm;
