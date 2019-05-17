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
  { label: 'Metal', value: 'Metal' },
  { label: 'R&B', value: 'R&B' },
  { label: 'Hip-Hop', value: 'Hip-Hop' }
]


const Form = ({ handleChange, handleTimes, handleSubmit, handleSelect, handleSearchSelect, data, errors}) => {
  return (
    <main>
      <form>
        {/*Yelp API search field*/}
        <div className="field">
          <label className="label">Search</label>
          <div className="control">
            <Search className="input" handleSearchSelect={handleSearchSelect} />
          </div>
          <p className="help">Once you have a venue or business click GO to populate the fields below</p>
        </div>
      </form>



      <form onSubmit={handleSubmit}>

        <hr />

        {/*Name field*/}
        <div className="field">
          <label className="label">Name:</label>
          <div className="control">
            <input
              className="input"
              name="name"
              placeholder="e.g. The Red Lion (required)"
              onChange={handleChange}
              value={data.name || ''}
            />
          </div>
          {errors.name && <div className="help is-danger">{errors.name}</div>}
        </div>

        {/*address1 field*/}
        <div className="field">
          <label className="label">Address Line 1:</label>
          <div className="control">
            <input
              className="input"
              name="address1"
              placeholder="e.g. 123 Lion Lane (required)"
              onChange={handleChange}
              value={data.address1 || ''}
            />
          </div>
          {errors.address1 && <div className="help is-danger">{errors.address1}</div>}
        </div>

        {/*address2 field*/}
        <div className="field">
          <label className="label">Address Line 2:</label>
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
          <label className="label">Post Code:</label>
          <div className="control">
            <input
              className="input"
              name="postCode"
              placeholder="e.g. W1 3TP (required)"
              onChange={handleChange}
              value={data.postCode || ''}
            />
          </div>
          {errors.postCode && <div className="help is-danger">{errors.postCode}</div>}
        </div>

        {/*tel field*/}
        <div className="field">
          <label className="label">Tel:</label>
          <div className="control">
            <input
              className="input"
              name="tel"
              placeholder="e.g. +442037547444 (required)"
              onChange={handleChange}
              value={data.tel || ''}
            />
          </div>
          {errors.tel && <div className="help is-danger">{errors.tel}</div>}
        </div>

        {/*website field*/}
        <div className="field">
          <label className="label">Website:</label>
          <div className="control">
            <input
              className="input"
              name="website"
              placeholder="e.g. http://www.theredlion.com (required)"
              onChange={handleChange}
              value={data.website || ''}
            />
          </div>
          {errors.website && <div className="help is-danger">{errors.website}</div>}
        </div>

        {/*description field*/}
        <div className="field">
          <label className="label">Description:</label>
          <div className="control">
            <textarea
              className="textarea"
              name="description"
              placeholder="eg: Nice vibe, great pint (required)"
              onChange={handleChange}
              value={data.description || ''}
            />
          </div>
          {errors.description && <div className="help is-danger">{errors.description}</div>}
        </div>

        {/*lat field*/}
        <div className="field">
          <label className="label">Latitude Coordinates:</label>
          <div className="control">
            <input
              className="input"
              name="lat"
              onChange={handleChange}
              value={data.lat || ''}
            />
          </div>
          {errors.lat && <div className="help is-danger">{errors.lat}</div>}
        </div>

        {/*lng field*/}
        <div className="field">
          <label className="label">Longitude Coordinates:</label>
          <div className="control">
            <input
              className="input"
              name="lng"
              onChange={handleChange}
              value={data.lng || ''}
            />
          </div>
          {errors.lng && <div className="help is-danger">{errors.lng}</div>}
        </div>

        {/*opening times fields*/}

        <div className="label">Opening Times</div>

        {data.openingTimes.map(time =>
          <div className="field is-horizontal" key={time.day}> {/*Mon*/}
            <div className="field-label is-small">
              <label className="label">{time.day}</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input is-small"
                    placeholder="Opens e.g. 1900"
                    name={`${time.day}|start`}
                    onChange={handleTimes}
                    value={time.start || ''}
                  />
                </p>
              </div>
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input is-small"
                    placeholder="Closes e.g. 0200"
                    name={`${time.day}|end`}
                    onChange={handleTimes}
                    value={time.end || ''}
                  />
                </p>
              </div>
            </div>
          </div>
        )}
        {errors.openingTimes && <div className="help is-danger">{errors.openingTimes}</div>}

        {/*Price Point field*/}
        <div className="field">
          <label className="label">Price Point:</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                name="pricePoint"
                onChange={handleChange}
                value={data.pricePoint || ''}
              >
                <option value="" disabled>Please choose...</option>
                <option value="Rent overdue">(£) Rent overdue</option>
                <option value="Rent due tomorrow">(££) Rent due tomorrow</option>
                <option value="Middle of the month">(£££) Middle of the month</option>
                <option value="Blowout">(££££) Blowout</option>
              </select>
            </div>
          </div>
          {errors.pricePoint && <div className="help is-danger">{errors.pricePoint}</div>}
        </div>

        {/*admission fee field*/}
        <div className="field">
          <label className="label">Admission Fee (£):</label>
          <div className="control">
            <input
              className="input"
              name="admissionFee"
              placeholder="Provide value just as a number with no symbol"
              onChange={handleChange}
              value={data.admissionFee || ''}
            />
          </div>
          {errors.admissionFee && <div className="help is-danger">{errors.admissionFee}</div>}
        </div>

        {/*Venue type field*/}
        <div className="field">
          <label className="label">Type of venue:</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select
                name="venueType"
                onChange={handleChange}
                value={data.venueType || ''}
              >
                <option value="" disabled>Please choose... (required)</option>
                <option value="Bar">Bar 🍹</option>
                <option value="Boozer">Boozer 🍺</option>
                <option value="Club">Club 🕺</option>
              </select>
            </div>
          </div>
          {errors.venueType && <div className="help is-danger">{errors.venueType}</div>}
        </div>


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
    </main>
  )
}

export default Form
