



export const isACoincidenceSearch = (data = [], wordToSearch) => {
    console.log("dataSearch", data)
    for (let i = 0; i < data.length; i++) {
        if ((data[i]).toString().match(RegExp(wordToSearch, 'gi'))) return true;
    }
    return false;
}