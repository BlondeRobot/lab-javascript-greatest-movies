// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    const director = movies.map(movie => {return movie.director});
    return director;
};
console.log (getAllDirectors(movies));


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// function howManyMovies(movies) {
//     return movies.filter((movie) => {
//     return movies.director === "Steven Spielberg" && movies.genre.includes('Drama')}).lenght;
    
// }
// console.log (howManyMovies(movies));



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.lenght === 0) {return 0;}
     else {
         const sumOfRates = movies.reduce((acc, movie) => {
             if(movie.rate === "" || movie.rate === undefined)
            {return acc;} 
            return acc + parseFloat(movie.rate);},0);
        const numOfRates = movies.lenght;
        return parseFloat((sumOfRates / numOfRates).toFixed(2));    
     }
    
}

console.log (ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
 const dramaMovies = movies.filter((movie) => {
     return movie.genre.includes('Drama')});
     return ratesAverage(dramaMovies);
 }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const sortedMovies = movies.map((movie) => movie); // make a copy of the original array
    return sortedMovies.sort((a, b) => {
        if (a.year - b.year === 0){
            return a.title.localeCompare(b.title);
        } else { }
        return a.year - b.year || a.title.localeCompare(b.title);
    });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
