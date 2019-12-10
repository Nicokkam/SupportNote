import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function MenuEquips(props) {

    const equips = props.description || [];

    return (
        <Select
            defaultValue={''}
            name="description"
            labelId="selectDescription-label"
            id="selectDescription"
            value={props.note.description}
            onChange={props.handleChange}
        >
            <MenuItem value=""> <em>None</em> </MenuItem>
            {
                equips.map((e, i) => {
                    return (<MenuItem key={i} value={e.description} > {e.description} </MenuItem>)
                })
            }
        </Select>
    )
}