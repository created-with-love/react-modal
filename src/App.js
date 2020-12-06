import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal';
import Clock from './components/Clock';
import Tabs from './components/Tabs';
import tabsData from './data/tabs.json';
import IconButton from './components/IconButton';
import { ReactComponent as CloseIcon } from './icons/close.svg';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Это контент для модалки, как children</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            {/* <button
              type="button"
              onClick={this.toggleModal}
              className="Modal__close"
            >
              Закрыть
            </button> */}
            <IconButton className="Modal__close">
              <CloseIcon
                width="32"
                height="32"
                fill="#black"
                onClick={this.toggleModal}
              />
            </IconButton>
          </Modal>
        )}

        <Clock />
        <Tabs items={tabsData} />
      </>
    );
  }
}

export default App;
