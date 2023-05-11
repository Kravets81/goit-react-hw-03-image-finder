import React, { Component } from 'react';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';
import { fatchImages } from './Fetch';
import { Button } from './Button/Button';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    hits: [],
    page: 1,
    loading: false,
    error: null,
    emptyResults: false,
  };

  handleFormSubmit = async searchQuery => {
    this.setState({ loading: true, searchQuery });

    try {
      const response = await fatchImages(searchQuery);
      if (response.length === 0) {
        this.setState({ emptyResults: true });
        toast.error('No results found!');
      } else {
        this.setState({ hits: response, emptyResults: false });
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleLoadMoreButtonClick = async () => {
    const { page, searchQuery } = this.state;

    this.setState({
      loading: true,
      page: page + 1,
    });

    try {
      const response = await fatchImages(searchQuery, page + 1);
      this.setState(prevState => ({
        hits: [...prevState.hits, ...response],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading, error, hits } = this.state;

    return (
      <div>
        {error && <p>Упс, что-то пошло не так: {error.message}</p>}
        <Searchbar onSubmit={this.handleFormSubmit} />

        {loading && <Loader />}

        <ImageGallery imageHits={hits} />
        {hits.length > 11 && (
          <Button onClick={this.handleLoadMoreButtonClick} />
        )}

        <ToastContainer autoClose={2500} theme="colored" />
      </div>
    );
  }
}
