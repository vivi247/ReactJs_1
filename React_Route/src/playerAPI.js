const PlayerAPI = {
    players: [
        { number: 1, name: "Rohit Sharma", position: "Opener" },
        { number: 2, name: "Shikhar Dhawan", position: "Opener" },
        { number: 3, name: "Virat Kohli", position: "One Down" },
        { number: 4, name: "M S Dhoni", position: "Keeper" },
        { number: 5, name: "Kedar Jadhav", position: "All rounder" },
        { number: 6, name: "Hardik Pandya", position: "All rounder" },
        { number: 7, name: "Ravindra Jadeja", position: "All rounder" },
        { number: 8, name: "Yajuvendra Chahal", position: "Spinner" },
        { number: 9, name: "Kuldeep Yadav", position: "Spinner" },
        { number: 10, name: "Jaspritt Bumrah", position: "Fast Bowler" },
        { number: 11, name: "Umesh Yadav", position: "Fast Bowler" }        
    ],
    all: function () { return this.players },
    get: function (id) {
        const isPlayer = p => p.number === id
        return this.players.find(isPlayer)
    }
}

export default PlayerAPI;
