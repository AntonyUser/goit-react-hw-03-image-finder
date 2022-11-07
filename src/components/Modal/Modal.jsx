import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseByEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseByEscape);
  }
  onCloseByEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  onClosebyBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const {
      img: { largeImageURL, user },
      closeModal,
    } = this.props;
    return (
      <div className={css.Overlay} onClick={this.onClosebyBackdrop}>
        <div className={css.Modal}>
          <button className={css.Btn} onClick={closeModal}>
            Close
          </button>
          <img src={largeImageURL} alt={user} width="900"></img>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  img: PropTypes.shape({
    largeImageURL: PropTypes.string,
    user: PropTypes.string,
  }),
  closeModal: PropTypes.func,
};
