for (i = 1000; i >= 0; i -= 2) {
    console.log(i);
}
for (i = 0; i <= 10000; i++) {
    if (i === 2500) {
        alert('A quarter of the way there!');
    } else if (i === 5000) {
        alert('Halfway there!');
    } else if (i === 10000) {
        alert('The loop is done!');
    }
}
const favoriteShows = ['The 100', 'The Blacklist', 'Supernatural', 'The Big Bang Theory', 'Shameless'];
for (i = 0; i < favoriteShows.length; i++) {
    console.log('My favorite TV show is ' + favoriteShows[i]);
}

