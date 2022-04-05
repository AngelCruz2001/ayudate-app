



export const isACoincidenceSearch = (data = [], wordToSearch) => {
    for (let i = 0; i < data.length; i++) {
        if ((data[i]).toString().match(RegExp(wordToSearch, 'gi'))) return true;
    }
    return false;
}