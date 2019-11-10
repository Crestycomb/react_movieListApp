import React, {Component} from 'react';
import {getMovies} from "../../services/fakeMovieService";
import './movies.css';

class Movies extends Component {
    state = {
        movies: getMovies()
    };

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies})
        // this.setState({movies: movies}) would be the usual syntax but if
        // the key and value is the same, we dont need the second movies
    };

    things() {
        Object.keys(this.state.movies).map(key => {
            console.log("keyname = ", key);

            // console.log(this.state.movies[key]);

            Object.keys(this.state.movies[key]).map(key2 => {
                console.log("key2 = ", key2);

                console.log(this.state.movies[key][key2]);


            })


        })
    }


    render() {
        const {length: count} = this.state.movies;

        if (count === 0)
            return <h2> there are no movies </h2>

        return (
            <div className="container-fluid">
                <h2>showing {count} movies in the database</h2>
                <div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.movies.map(movie => (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <button onClick={() => this.handleDelete(movie)}
                                                className="btn btn-danger btn-sm">Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Movies;


/*

good so far... just need to figure out how to iterate through  the genre property (theres 2 values there)
things() {
    Object.keys(this.state.movies).map(key => {
        console.log("keyname = ", key);

        // console.log(this.state.movies[key]);

        Object.keys(this.state.movies[key]).map(key2 => {
            console.log(this.state.movies[key][key2]);

        })
    })
}

 */