import React from 'react';

const DateComponent = ({ date }) => {
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };

    const formattedDate = date.toLocaleString('en-GB', options);
    return (
            <><b>Коли:</b> {formattedDate}</>
    );
};

export default DateComponent;
