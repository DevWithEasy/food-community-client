import React from 'react';

const InputView = ({title,name,placeholder,handleChange}) => {
    return (
        <div className='bg-gray-100 rounded'>
            <label htmlFor="title" className='block pl-1 py-1 text-sm'>{title} : </label>
            <input
              type="text"
              name={name}
              className="input"
              placeholder={placeholder}
              onChange={handleChange}
              required
            />
        </div>
    );
};

export default InputView;