let index = 1;
const shows = [ 
    {
        id: 1,
        title: "House M.D.",
        numSeasons: 8,
        desc: "Show about Hugh Laurie being a badass doctor!"
    }
]

const getShows = () => {
    return shows;
}

const createShow = (show) => {
    show.id = ++index;
    shows.push(show);
    return shows[shows.length - 1];
}

const deleteShow = (id) => {
    const foundIndex = shows.findIndex(element => element.id == id);
    let result;
    if(foundIndex === - 1){
        result = { error: "ID not found" };
    }else {
        result = shows[foundIndex];
        shows.splice(foundIndex, 1);
    }
    return result;
}

module.exports = {
    getShows,
    createShow,
    deleteShow
};