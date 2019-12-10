import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function MenuProcess(props) {
    const process = props.process || [];

    return (
        <Select
            defaultValue={''}
            name="process"
            labelId="selectFunction-label"
            id="selectFunction"
            value={props.note.process}
            onChange={props.handleChange}
        >
            <MenuItem value=""> <em>None</em> </MenuItem>
            {
                process.map((e, i) => {
                    return (<MenuItem key={i} value={e} > {e} </MenuItem>)
                })
            }
        </Select>
    )
}