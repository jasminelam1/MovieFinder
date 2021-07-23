const submitMovie = () =>{
    const name = document.querySelector("#name").value;
    const description = document.querySelector("#desc").value;
    const genre = document.querySelector("#genre").value;
    const rating = document.querySelector("#rating").value;

    console.log(name);
    console.log(description);
    console.log(genre);
    console.log(rating);

    firebase.database().ref("/movies").push({
        name: name,
        description: description,
        genre: genre,
        rating: rating
    });
    console.log("Pushed!")
}