import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import MenuEquipType from './Menus/MenuEquipType';
import MenuProcess from './Menus/MenuProcess';
import MenuFunction from './Menus/MenuFunction';
import MenuStation from './Menus/MenuStation';
import MenuEquips from './Menus/MenuEquips';

import getUnique from '../services/getUnique';

// TODO:



import EquipDescService from '../services/EquipDescService';
import WorkplaceService from '../services/WorkplaceService';
// import { create } from 'domain';
import SupportNoteService from '../services/SupportNoteService';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: 20,
        marginTop: 20,
    },
    textfield: {
        width: '100%',
        color: theme.palette.text.secondary,
    },
    button: {
        width: '100%',
        color: 'white',
        background: 'linear-gradient(45deg, #3F51B5 1%, #3F51B5 100%)',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        fontWeight: '550',
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    // Criar uma instancia de uma API. e.g SupportNote, mas pode ser qualquer outra, seguindo este modelo
    const apiSupportNote = new SupportNoteService();    
    const [note, setNote] = React.useState({
        date: '',
        equipType: '1',
        description: 'Placa Ancoragem',
        activityDesc: 'TestePOST_VS',
        activityTime: 80,
        shortTermDesc: 'TestePOST_VS',
        correctionResp: 'SSBTEST',
        correctCallBit: 1,
        correctCallDesc: 'TestePOST_VS',
        areaResp: 'SSBTEST2',
        process: 'FA0',
        _function: 'FA0',
        station: '3',
    });

    const [workplaces, setWorkPlaces] = React.useState();
    const [equips, setEquips] = React.useState();

    // Quando uma propriedade qualquer do form é alterada, atribui o valor de "name" a propriedade, no caso da variavel "note"
    const handleChange = event => {
        const { name, value } = event.target;
        setNote({ ...note, [name]: value });
    };

    function dateTime() {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date+' '+time;
    }


    // Para quando carregar a página trazer todos os dados das apis
    React.useEffect(() => {
        // Busca os dados das APIs e salva nas variaveis. EXAMPLE: const results = api.getAll().then( data => console.log(data))
        const apiEquipDesc = new EquipDescService();
        const apiWorkplace = new WorkplaceService();

        async function getEquips() {
            let res = []
            for (let index = 1; index <= 14; index++) {
                res = [...res, await apiEquipDesc.getById(index)]
            }
            return res.flat();
        }

        apiWorkplace.getAll().then(data => setWorkPlaces(data));
        getEquips().then(data => setEquips(data));

        


    }, []);


    // Utilizar o metodo POST para enviar para o serviço ao Clicar no botão
    const submit = async () => {
        note.date = dateTime();
        // create(note);
        console.log(note);
        apiSupportNote.create(note);
        
    }

    return (
        <div>
            <div className={classes.root}>
                <Grid container justify="space-between" spacing={3} >
                    <Grid item sm={4}>
                        <FormControl className={classes.textfield}>
                            <InputLabel id="selectProcess-label" required >Processo </InputLabel>
                            <MenuProcess 
                                note={note} 
                                handleChange={handleChange} 
                                process={getUnique().process(workplaces)} />
                        </FormControl>
                    </Grid>
                    <Grid item sm={4}>
                        <FormControl className={classes.textfield} disabled={note.process === ""}>
                            <InputLabel id="selectFunction-label" required >Função</InputLabel>
                            <MenuFunction 
                                note={note} 
                                handleChange={handleChange} 
                                _function={getUnique().functions(workplaces, note.process)} />
                        </FormControl>
                    </Grid>
                    <Grid item sm={4}>
                        <FormControl className={classes.textfield} disabled={note._function === ""}>
                            <InputLabel id="selectStation-label" required >Posto</InputLabel>
                            <MenuStation 
                                note={note} 
                                handleChange={handleChange} 
                                station={getUnique().stations(workplaces, note._function)} />
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.root}>
                <Grid container justify="space-between" spacing={3} >
                    <Grid item sm={6}>
                        <FormControl className={classes.textfield}>
                            <InputLabel id="selectEquipType-label" required >Tipo de equipamento</InputLabel>           
                            <MenuEquipType 
                                note={note} 
                                handleChange={handleChange} />
                        </FormControl>
                    </Grid>
                    <Grid item sm={6}>
                        <FormControl className={classes.textfield} disabled={note.equipType === ""}>
                            <InputLabel id="selectEquipDesc-label" required >Descrição do equipamento</InputLabel>
                            <MenuEquips 
                                note={note} 
                                handleChange={handleChange} 
                                description={ getUnique().equips(equips, note._function, note.station, note.equipType) } />
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.root}>
                <Grid item sm={12}>
                    <TextField 
                        className={classes.textfield} 
                        name="activityDesc"
                        onChange={handleChange}
                        value={note.activityDesc}
                        required 
                        multiline 
                        label="Descrição da atividade" />
                </Grid>
            </div>
            <div className={classes.root}>
                <Grid container justify="space-between" spacing={3} >
                    <Grid item sm={6}>
                        <TextField 
                            className={classes.textfield} 
                            name="activityTime"
                            onChange={handleChange}
                            value={note.activityTime}
                            required 
                            type="number"
                            inputProps={{min: "0", step: 10}}
                            label="Tempo da Atividade (min)" />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField 
                            className={classes.textfield}
                            name="correctionResp"
                            onChange={handleChange}
                            value={note.correctionResp}
                            label="Responsável pela correção" />
                    </Grid>
                </Grid>
            </div>
            <div className={classes.root}>
                <Grid item sm={12}>
                    <TextField 
                        className={classes.textfield}
                        name="shortTermDesc"
                        onChange={handleChange}
                        value={note.shortTermDesc}
                        multiline 
                        label="Descrição do Short Term" />
                </Grid>
            </div>
            <div className={classes.root}>
                <Grid container justify="space-between" spacing={3} >
                    <Grid item sm={6}>
                        <FormControl className={classes.textfield}>
                            <InputLabel id="selectCorrectCall-label" required >Realmente era problema da nossa área?</InputLabel>
                            <Select
                                name="correctCallBit"
                                onChange={handleChange}
                                value={note.correctCallBit}
                                defaultValue={''}
                                labelId="selectCorrectCall-label"
                                id="selectCorrectCall"
                            >
                                <MenuItem value=""> <em>None</em> </MenuItem>
                                <MenuItem value={0}>Não</MenuItem>
                                <MenuItem value={1}>Sim</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sm={6}>
                        <TextField 
                        className={classes.textfield}
                        name="correctCallDesc"
                        onChange={handleChange}
                        value={note.correctCallDesc}
                        multiline 
                        label="Comentários em relação a chamada ter sido correta" />
                    </Grid>
                </Grid>
            </div>
            <div className={classes.root}>
                <Grid item sm={12}>
                    <TextField 
                    className={classes.textfield}
                    name="areaResp"
                    onChange={handleChange}
                    value={note.areaResp}
                    autoCapitalize="true"
                    autoComplete="true"
                    label="Responsável da área de suporte" />
                </Grid>
            </div>
            <div className={classes.root}>
                <Grid item sm={12}>
                    <Button 
                        className={classes.button} 
                        onClick={submit} >Concluido</Button>
                </Grid>
            </div>
        </div>
    );
}