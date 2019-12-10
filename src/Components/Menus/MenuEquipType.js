import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import equipTypeList from '../../data/equipDescList';


export default function MenuEquipType(props) {
    return (
        <Select
            defaultValue={''}
            name="equipType"
            labelId="selectEquipType-label"
            id="selectEquipType"
            value={props.note.equipType}
            onChange={props.handleChange}
        >
            <MenuItem value=""> <em>None</em> </MenuItem>
            {
                equipTypeList.map((e, i) => {
                    return (<MenuItem key={i} value={e.value} > {e.name} </MenuItem>)
                })
            }
        </Select>
    )
}