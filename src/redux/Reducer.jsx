const initialState = [
    {
        id: 1,
        building: "AmirBuild",
        countries: "pakistan",
        status: "marrid"
    }, {
        id: 2,
        building: "AmmadBuild",
        countries: "england",
        status: "single"
    }, {
        id: 3,
        building: "AkrmBuild",
        countries: "england",
        status: "single"
    }]
const Reduce = (state = initialState, action) => {
    switch (action.type) {

        case "ADDCONTACT":
            state = [...state, action.payload]
            console.log("AAddcontac", state)
            return state;
        case "DELETECONTACT":
            const deletee = state.filter((item) => item.id !== action.payload)
            state = deletee;
            return state
        case "UPDATECONTACT":
            const data= action.payload
            console.log("Reducedata", data)
            // const copydata =[...data, data]
            // console.log("CopyData", copydata)
            const updatestate = state.map((change) => change.id === data.id ? data : change)
            state = updatestate;
            console.log("State", state)
            return state
        default: return state
    }
}

export default Reduce