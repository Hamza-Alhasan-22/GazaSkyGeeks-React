//import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { } from '@mui/material/Select';
//import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
//import styles from './style.module.css'

function FilterType(props) {
    const {title, defultValue, options} = props;
    return (
        <div>
            <p>{title}</p>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{defultValue}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={defultValue.toLowerCase()}
                    label={defultValue}
                    // onChange={handleChange}
                >
                    {
                        options.map((i, index) => {
                            return (
                                <MenuItem value={index}>{i}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
            {
                title === 'Date' ?
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">To</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={to}
                            label='To'
                            // onChange={handleChange}
                        >
                            {
                                options.map((i, index) => {
                                    return (
                                        <MenuItem value={index}>{i}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                    : null
            }
        </div>
    );
}

export default FilterType;