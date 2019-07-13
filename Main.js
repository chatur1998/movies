import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchmovies } from '../actions';

class Main extends Component {
  componentDidMount() {
    fetchmovies();
  }

  renderMovies() {
    return this.props.data.map(movie =>
    <Card
      key={movie.original_title}
      title={movie.original_title}
      image={{ uri: movie.poster_path }}
    />
  );
}

  render() {
    return (
      <ScrollView>
        {this.renderMovies()}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.movie.movies };
};

export default connect(mapStateToProps, { fetchmovies })(Main);
