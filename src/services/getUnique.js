const getUnique = function (param1, param2, param3, workplaces) {

    return {

        process(workplaces) {
            let process = [];
            let uniqueProcess = [];

            if (!workplaces) return;
            process = workplaces.map(x => x.process);
            uniqueProcess = process.filter((x, i, a) => a.indexOf(x) === i);
            return uniqueProcess;
        },

        functions(workplaces, process) {
            let uniqueFunction = [];

            if (!workplaces) return;
            uniqueFunction = workplaces.filter(workplace => (workplace.process === process))
                                      .map(workplace => workplace.function)
                                      .filter((_function, index, allFunctions) => allFunctions.indexOf(_function) === index);
            return uniqueFunction;
        },

        stations(workplaces, _function) {
            let uniqueStation = [];

            if (!workplaces) return;
            uniqueStation = workplaces.filter(workplace => (workplace.function === _function))
                                      .map(workplace => workplace.station)
                                      .filter((station, index, allStations) => allStations.indexOf(station) === index);
            return uniqueStation;
        },

        equips(equips, _function, station, equipType){
            let uniqueEquips = [];

            console.log(equipType)

            if (!equips) return;
            uniqueEquips = equips.filter(equips => (equips.function === _function 
                                                    && +equips.station === +station 
                                                    && +equips.equiptype === +equipType));            
            return uniqueEquips;
        },
    }
}

export default getUnique;