import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function MenuFunction(props) {
    const _function = props._function || [];

    return (
        <Select
            defaultValue={''}
            name="_function"
            labelId="selectFunction-label"
            id="selectFunction"
            value={props.note._function}
            onChange={props.handleChange}
        >
            <MenuItem value=""> <em>None</em> </MenuItem>
            {
                _function.map((e, i) => {
                    return (<MenuItem key={i} value={e} > {e} </MenuItem>)
                })
            }
        </Select>
    )
}