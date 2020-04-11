import React, { Component } from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';
import Layout from '../components/SuggestionListLayout';
import EmptyMessage from '../components/EmptyMessage';
import Separator from '../components/VerticalSeparator';
import Suggestion from '../components/Suggestion';

export default class SuggestionList extends Component {
  EmptyMessage = <EmptyMessage text="No hay Sugerencias :(" />

  Separator = () => <Separator color="#282828" />

  Item = ({ item }) => (
    <Suggestion
      genres={item.genres}
      title={item.title}
      year={item.year}
      rating={item.rating}
      backgroundImage={item.background_image}
    />
  )

  itemKey = (item) => item.key

  render() {
    const { list } = this.props;
    return (
      <Layout title="Recomendations for you">
        <List
          data={list}
          keyExtractor={this.ItemKey}
          ListEmptyComponent={this.EmptyMessage}
          ItemSeparatorComponent={this.Separator}
          renderItem={this.Item}
        />
      </Layout>
    );
  }
}

SuggestionList.propTypes = {
  list: propTypes.arrayOf(propTypes.object).isRequired,
};


const List = styled.FlatList``;
