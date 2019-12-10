//Importar o que foi selecionado do serviço

// const _functionList = [
//     {
//         name: '0',
//         value: 'FA0'
//     },
//     {
//         name: '1.1',
//         value: 'FA1.1'
//     },
//     {
//         name: '1.2',
//         value: 'FA1.2'
//     },
//     {
//         name: '2',
//         value: 'FA2'
//     },
//     {
//         name: '3.1',
//         value: 'FA3.1'
//     },
//     {
//         name: '3.2',
//         value: 'FA3.2'
//     },
//     {
//         name: '4',
//         value: 'FA4'
//     },
//     {
//         name: '5',
//         value: 'FA5'
//     },
//     {
//         name: 'MO1',
//         value: 'MO1'
//     },
//     {
//         name: 'MO2',
//         value: 'MO2'
//     },
//     {
//         name: 'MO3',
//         value: 'MO3'
//     },
//     {
//         name: 'MO4',
//         value: 'MO4'
//     },
//     {
//         name: 'PM - MEDIA',
//         value: 'PMMD'
//     },
//     {
//         name: 'PM Tanque de AR',
//         value: 'PMTQ'
//     },
//     {
//         name: 'PM2 - Silencioso (Bus)',
//         value: 'PMSB'
//     },
//     {
//         name: 'PM3 - Radiador (Bus)',
//         value: 'PMRB'
//     },
//     {
//         name: 'PM4 - Radiador (Truck)',
//         value: 'PMRT'
//     },
//     {
//         name: 'PM5 - Cx Baterias (Truck)',
//         value: 'PMCXBT'
//     },
//     {
//         name: 'PM6 - Eixo Traseiro (Truck)',
//         value: 'PMETT'
//     },
//     {
//         name: 'PM7 - Eixo Dianteiro (Truck)',
//         value: 'PMEDT'
//     },
//     {
//         name: 'PM8 - Front (Bus)',
//         value: 'PMFRB'
//     },

// ];

// PEGAR O SERVIÇO GET DO PROCESSO (Precisa de props!)
// export default function _functionListFilter(props) {
//     switch (serviçogetPROCESSO) { //Colocar a variavel do serviço
//         case "TRUCK":
//             _functionList = [
//                 {
//                     name: '1.1',
//                     value: 'FA1.1'
//                 },
//                 {
//                     name: '1.2',
//                     value: 'FA1.2'
//                 },
//                 {
//                     name: '2',
//                     value: 'FA2'
//                 },
//                 {
//                     name: '3.1',
//                     value: 'FA3.1'
//                 },
//                 {
//                     name: '3.2',
//                     value: 'FA3.2'
//                 },
//                 {
//                     name: '4',
//                     value: 'FA4'
//                 },
//                 {
//                     name: '5',
//                     value: 'FA5'
//                 },
//             ];
//             break;

//         case "FA0":
//             _functionList = [
//                 {
//                     name: '0',
//                     value: 'FA0'
//                 },
//             ];
//             break;

//         case "BUS":
//             _functionList = [
//                 {
//                     name: 'MO1',
//                     value: 'MO1'
//                 },
//                 {
//                     name: 'MO2',
//                     value: 'MO2'
//                 },
//                 {
//                     name: 'MO3',
//                     value: 'MO3'
//                 },
//                 {
//                     name: 'MO4',
//                     value: 'MO4'
//                 },
//             ];
//             break;

//         case "PMCXBT":
//             _functionList = [
//                 {
//                     name: 'PM5 - Cx Baterias (Truck)',
//                     value: 'PMCXBT'
//                 },
//             ];
//             break;

//         case "PMETT":
//             _functionList = [
//                 {
//                     name: 'PM6 - Eixo Traseiro (Truck)',
//                     value: 'PMETT'
//                 },
//             ];
//             break;

//         case "PMMD":
//             _functionList = [
//                 {
//                     name: 'PM - MEDIA',
//                     value: 'PMMD'
//                 },
//             ];
//             break;

//         case "PMRT":
//             _functionList = [
//                 {
//                     name: 'PM4 - Radiador (Truck)',
//                     value: 'PMRT'
//                 },
//             ];
//             break;

//         case "PMSB":
//             _functionList = [
//                 {
//                     name: 'PM2 - Silencioso (Bus)',
//                     value: 'PMSB'
//                 },
//             ];
//             break;

//         case "PMTQ":
//             _functionList = [
//                 {
//                     name: 'PM Tanque de AR',
//                     value: 'PMTQ'
//                 },
//             ];
//             break;

//         default:
//             _functionList = ["Insira um Processo!"];
//             break;
//     }
//     return _functionList;
// }

// export default _functionList;