import React from 'react'

const Form = ({ handleChange, handleSubmit, data, errors, venues }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            name="name"
            placeholder="eg: Jon Snow"
            onChange={handleChange}
            value={data.name || ''}
          />
        </div>
        {errors.name && <div className="help is-danger">{errors.name}</div>}
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            name="image"
            placeholder="eg: https://gameofthrones.fandom.com/jon-snow.png"
            onChange={handleChange}
            value={data.image || ''}
          />
        </div>
        {errors.image && <div className="help is-danger">{errors.image}</div>}
      </div>
      <div className="field">
        <label className="label">Gender</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select
              name="gender"
              onChange={handleChange}
              value={data.gender || ''}
            >
              <option value="" disabled>Please choose...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        {errors.gender && <div className="help is-danger">{errors.gender}</div>}
      </div>
      <div className="field">
        <label className="label">Venue</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select
              name="venue"
              onChange={handleChange}
              value={data.venue || ''}
            >
              <option value="" disabled>Please choose...</option>
              {venues.map(venue =>
                <option key={venue._id} value={venue._id}>{venue.name}</option>
              )}
            </select>
          </div>
        </div>
        {errors.gender && <div className="help is-danger">{errors.gender}</div>}
      </div>

      <button className="button is-primary">Submit</button>
    </form>
  )
}

export default Form
