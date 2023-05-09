import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    hits: '',
  };

  onInputChange = e => {
    e.preventDefault();
    this.setState({ hits: e.currentTarget.value.toLowerCase() });
  };

  handleInputSubmit = e => {
    e.preventDefault();
    if (this.state.hits.trim() === '') {
      toast.error('Введите имя картинки!');
      return;
    }

    this.props.onSubmit(this.state.hits);
    this.setState({ hits: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleInputSubmit}>
          <button type="submit" className={css.searchForm__button}>
            <ImSearch style={{ marginLeft: 8, marginTop: 7 }} />
            <span className={css.searchForm__button__label}></span>
          </button>

          <input
            name="input"
            className={css.searchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.hits}
            onInput={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}
