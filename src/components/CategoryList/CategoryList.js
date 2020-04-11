import React, { Component } from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';
import Layout from './CategoryListLayout';
import EmptyMessage from '../EmptyMessage';
import HorizontalSeparator from '../HorizontalSeparator';
import Category from './Category';

export default class CategoryList extends Component {
  EmptyMessage = <EmptyMessage text={'There aren\'t suggestions :('} />

  Separator = () => (
    <HorizontalSeparator color="yellow" />
  )

  Item = ({ item }) => (
    <Category
      backgroundImage={item.background_image}
      genres={item.genres}
    />
  )

  itemKey = (item) => item.key

  render() {
    const { list } = this.props;

    return (
      <Layout title="Categories">
        <List
          horizontal
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

CategoryList.propTypes = {
  list: propTypes.arrayOf(propTypes.object).isRequired,
};

const List = styled.FlatList``;
