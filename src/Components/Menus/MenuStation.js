import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function MenuStation(props) {
    const station = props.station || [];

    return (
        <Select
            defaultValue={''}
            name="station"
            labelId="selectStation-label"
            id="selectStation"
            value={props.note.station}
            onChange={props.handleChange}
        >
            <MenuItem value=""> <em>None</em> </MenuItem>
            {
                station.map((e, i) => {
                    return (<MenuItem key={i} value={e} > {e} </MenuItem>)
                })
            }
        </Select>
    )
}