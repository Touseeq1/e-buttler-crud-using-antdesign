export const addContact = (data) => {
    return {
        type: "ADDCONTACT",
        payload:data
    }
}

export const deleteContact = (id) => {
    return {
        type: "DELETECONTACT",
        payload:id
    }

}
export const updataContact = (data) => {
    return {
        type: "UPDATECONTACT",
        payload:data
    }

}