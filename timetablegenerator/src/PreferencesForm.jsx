import React, { useState, useEffect, forwardRef } from 'react';

const initialOptions = [
  'Computer Engineering',
  'Information Technology',
  'Computer Science Engineering - Artificial Intelligence and Data Science',
  'Computer Science Engineering - Artificial Intelligence and Machine Learning',
  'Computer Science Engineering - Internet of Things',
  'Electronics and Telecommunication',
  'Computer Science Engineering - Electronics and Computer Science',
  'Mechanical Engineering'
];

const PreferencesForm = forwardRef(({ formData, setFormData, setError }) => {

  const [preferences, setPreferences] = useState(formData.preferences || []);

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      preferences
    }));
  }, [preferences, setFormData]);

  const [preferencesOptions, setPreferencesOptions] = useState([]);

  useEffect(() => {
    // Initialize options for the first dropdown
    setPreferencesOptions([initialOptions]);

    // Update options for subsequent dropdowns based on current selections
    for (let i = 1; i < preferences.length; i++) {
      if (preferences[i - 1]) {
        const remainingOptions = initialOptions.filter(option => !preferences.slice(0, i).includes(option));
        setPreferencesOptions(prevOptions => [...prevOptions, remainingOptions]);
      } else {
        setPreferencesOptions(prevOptions => [...prevOptions, []]);
      }
    }

    // Update formData when preferences change
    setFormData(prevFormData => ({
      ...prevFormData,
      preferences
    }));
  }, [preferences, setFormData]);

  const handlePreferenceChange = (index, value) => {
    const updatedPreferences = [...preferences];
    updatedPreferences[index] = value;
    setPreferences(updatedPreferences);
  };

  const isFirstPreferenceEmpty = preferences[0] === '';

  return (
    <div className='container'>
      <div className='inputs'>
      <h1 className="center page-heading">Branch Preference Form</h1>
        {preferences.map((preference, index) => (
          <div key={index}>
            <div className='input-field'>
              <label htmlFor={`preference${index}`}>Preference {index + 1}: </label>
              <select
                id={`preference${index}`}
                className='dropdown-field'
                value={preference}
                onChange={(e) => handlePreferenceChange(index, e.target.value)}
              >
                <option value="">Select preference</option>
                {preferencesOptions[index] && preferencesOptions[index].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {index === 0 && isFirstPreferenceEmpty && <span className="error">First preference is required.</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default PreferencesForm;