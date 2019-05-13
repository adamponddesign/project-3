import React from 'react'
import Select from 'react-select'

import Search from './Search'

const musicGenres = [
  { label: 'Jazz', value: 'Jazz' },
  { label: 'Funk', value: 'Funk' },
  { label: 'Techno', value: 'Techno' },
  { label: 'House', value: 'House' },
  { label: 'Disco', value: 'Disco' },
  { label: 'Electronic', value: 'Electronic' },
  { label: 'Rock', value: 'Rock' },
  { label: 'Blues', value: 'Blues' },
  { label: 'Metal', value: 'Metal' }
]


const Form = ({ handleChange, handleSubmit, handleSelect, data, errors}) => {
  return (
    <form onSubmit={handleSubmit}>

      <div className="field">
        <label className="label">Search</label>
        <div className="control">
          <Search className="input" />
        </div>
      </div>

      {/*Name field*/}
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            name="name"
            placeholder="eg: The Red Lion"
            onChange={handleChange}
            value={data.name || ''}
          />
        </div>
        {errors.name && <div className="help is-danger">{errors.name}</div>}
      </div>

      {/*Price Point field*/}
      <div className="field">
        <label className="label">Price Point</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select
              name="pricePoint"
              onChange={handleChange}
              value={data.pricePoint || ''}
            >
              <option value="" disabled>Please choose...</option>
              <option value="Rent overdue">Rent overdue</option>
              <option value="Rent due tomorrow">Rent due tomorrow</option>
              <option value="Middle of the month">Middle of the month</option>
              <option value="Just got paid">Just got paid</option>
              <option value="Blowout">Blowout</option>
            </select>
          </div>
        </div>
        {errors.pricePoint && <div className="help is-danger">{errors.pricePoint}</div>}
      </div>

      {/*website field*/}
      <div className="field">
        <label className="label">Website</label>
        <div className="control">
          <input
            className="input"
            name="website"
            placeholder="eg: www.theredlion.com"
            onChange={handleChange}
            value={data.website || ''}
          />
        </div>
        {errors.website && <div className="help is-danger">{errors.website}</div>}
      </div>

      {/*tel field*/}
      <div className="field">
        <label className="label">Tel</label>
        <div className="control">
          <input
            className="input"
            name="tel"
            placeholder="eg: +442037547444"
            onChange={handleChange}
            value={data.tel || ''}
          />
        </div>
        {errors.tel && <div className="help is-danger">{errors.tel}</div>}
      </div>

      {/*address1 field*/}
      <div className="field">
        <label className="label">Address Line 1</label>
        <div className="control">
          <input
            className="input"
            name="address1"
            placeholder="eg: 123 Lion Lane"
            onChange={handleChange}
            value={data.address1 || ''}
          />
        </div>
        {errors.address1 && <div className="help is-danger">{errors.address1}</div>}
      </div>

      {/*address2 field*/}
      <div className="field">
        <label className="label">Address Line 2</label>
        <div className="control">
          <input
            className="input"
            name="address2"
            placeholder="eg: London"
            onChange={handleChange}
            value={data.address2 || ''}
          />
        </div>
        {errors.address2 && <div className="help is-danger">{errors.address2}</div>}
      </div>

      {/*post code field*/}
      <div className="field">
        <label className="label">Post Code</label>
        <div className="control">
          <input
            className="input"
            name="postCode"
            placeholder="eg: W1 3TP"
            onChange={handleChange}
            value={data.postCode || ''}
          />
        </div>
        {errors.postCode && <div className="help is-danger">{errors.postCode}</div>}
      </div>


      {/*opening times field*/}
      <div className="field">
        <label className="label">Opening Times</label>
        <div className="control">
          <input
            className="input"
            name="openingTimes"
            placeholder="eg: 10.00 - 23.00"
            onChange={handleChange}
            value={data.openingTimes || ''}
          />
        </div>
        {errors.openingTimes && <div className="help is-danger">{errors.openingTimes}</div>}
      </div>

      {/*admission fee field*/}
      <div className="field">
        <label className="label">Admission Fee in £</label>
        <div className="control">
          <input
            className="input"
            name="admissionFee"
            placeholder="eg: 10"
            onChange={handleChange}
            value={data.admissionFee || ''}
          />
        </div>
        {errors.admissionFee && <div className="help is-danger">{errors.admissionFee}</div>}
      </div>

      {/*description field*/}
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            className="textarea"
            name="description"
            placeholder="eg: Nice vibe, great pint"
            onChange={handleChange}
            value={data.description || ''}
          />
        </div>
        {errors.description && <div className="help is-danger">{errors.description}</div>}
      </div>

      {/*Venue type field*/}
      <div className="field">
        <label className="label">Type of venue</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select
              name="venueType"
              onChange={handleChange}
              value={data.venueType || ''}
            >
              <option value="" disabled>Please choose...</option>
              <option value="Bar">Bar</option>
              <option value="Boozer">Boozer</option>
              <option value="Club">Club</option>
            </select>
          </div>
        </div>
        {errors.venueType && <div className="help is-danger">{errors.venueType}</div>}
      </div>

      {/*Music style field*/}
      <div className="field">
        <label className="label">Music Styles</label>
        <div className="control">

          <Select

            name="musicStyle"
            options={musicGenres}
            onChange={handleSelect}
            isMulti
          />

        </div>
      </div>



      <button className="button is-primary">Submit</button>
    </form>
  )
}

export default Form
