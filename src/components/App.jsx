import React from 'react';
import { Component } from 'react';
import { FetchImages } from './API/API';
import { Main } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchQuery: '',
    imageList: [],
    isLoading: 'false',
    error: '',
  };

  onSubmit = async ({ query }) => {
    try {
      this.setState({ isLoading: 'true' });
      const imageList = await FetchImages(query);
      const {
        data: { hits },
      } = imageList;
      this.setState({
        searchQuery: query,
        imageList: hits,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: 'false' });
    }
  };
  render() {
    const { imageList } = this.state;
    return (
      <Main>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.isLoading === 'true' && <Loader />}
        {imageList.length > 0 && <ImageGallery itemList={imageList} />}
      </Main>
    );
  }
}
