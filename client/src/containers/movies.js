import { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../store/actions";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.props.fetchMovies(this.props.type);
    }
    render() {
        return this.props.children(this.props.movies);
    }
}

const mapStateToProps = state => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    fetchMovies: async (type) => {
        dispatch(await fetchMovies(type));
        console.log('test');
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);