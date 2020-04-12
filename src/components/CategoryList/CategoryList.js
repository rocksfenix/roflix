import React, { Component } from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from './CategoryListLayout';
import EmptyMessage from '../EmptyMessage';
import HorizontalSeparator from '../HorizontalSeparator';
import Category from './Category';

class CategoryList extends Component {
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
    const { categories } = this.props;

    return (
      <Layout title="Categories">
        <List
          horizontal
          data={categories}
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
  categories: propTypes.arrayOf(propTypes.object),
};

CategoryList.defaultProps = {
  categories: [],
};

const List = styled.FlatList``;

const mapStateToProps = (state) => ({
  categories: state.videos.categories,
});

export default connect(mapStateToProps)(CategoryList);
