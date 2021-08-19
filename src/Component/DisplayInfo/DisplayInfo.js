import React from 'react';

const DisplayInfo = props => {
    return props.CountryInfo && (
        <div className="CountryInfo">
            <p>{props.CountryInfo.name}</p>
            <p><img src={props.CountryInfo.flag} width="150px" height="auto" alt="FLAG"/></p>
            <p>{props.CountryInfo.capital}</p>
            <p>{props.CountryInfo.region}</p>
            <p>{props.CountryInfo.population} чел</p>
            <p>{props.CountryInfo.borders}</p>
        </div>
    );
};

export default DisplayInfo;