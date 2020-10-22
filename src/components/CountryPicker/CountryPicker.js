import React, { useState, useEffect, useCallback } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries])
    // handleCountryChange(e.target.value)

    const onChange = useCallback((event) => {   
        const { target: { value } } = event;
        console.log(value);
        handleCountryChange(value);
    })

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={onChange}>
                <option value="global">Global</option>
                {fetchedCountries.map((country, index) =>
                    <option key={index} value={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker