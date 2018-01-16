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
        return this.props.component(this.props.movies[this.props.type]);
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    fetchMovies: async (type, page=1) => {
        dispatch(await fetchMovies(type, page));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);