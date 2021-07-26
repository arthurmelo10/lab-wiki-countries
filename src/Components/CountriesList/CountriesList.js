import React, { Component } from 'react';
import countries from '../../countries.json';
import './CountriesList.css'

class CountriesList extends Component {

    state = {
        Countries: countries,
    }

    render() {
        return (
            <div className = 'countries'>
                <ul className='list-coutries' style = {{overflow: "scroll", height: "100vh"}}
>
                    {this.state.Countries.map((countrie) => {
                        return (
                            <p> <a href='#'>
                                <img src={`https://www.countryflags.io/${countrie.cca2}/flat/64.png`} />
                                {countrie.name.official}
                            </a>
                            </p>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default CountriesList


