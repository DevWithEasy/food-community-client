import React from 'react';

const Loading = ({text}) => {
    return (
        <div className='flex justify-center items-center py-10'>
            <button className='flex items-center space-x-2 px-4 py-2 bg-indigo-500 text-white rounded'>
            <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>{text} ...</span>
            </button>
        </div>
    );
};

export default Loading;
