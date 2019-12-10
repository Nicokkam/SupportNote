// import React from 'react';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import _function from '../../data/functionList';


// export default function MenuFunction(props) {
//     return (
//         <Select
//             name="_function"
//             labelId="demo-controlled-open-select-label"
//             id="demo-controlled-open-select"
//             value={props.note._function}
//             onChange={props.handleChange}
//         >
//             <MenuItem value=""> <em>None</em> </MenuItem>
//             {
//                 _function.map((e, i) => {
//                     return (<MenuItem key={i} value={e.value} > {e.name} </MenuItem>)
//                 })
//             }
//         </Select>
//     )
// }