import React, { Component } from 'react';
import './Tabs.scss';

// предотвратить ре-рендер так же можно при наследовании (extends) от PureComponent (он сравнивает все элементы в стейте, есть ли в них изменения)
export default class Tabs extends Component {
  state = {
    activeTabIdx: 0,
  };

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  //   предотвращаю лишний ре-рендер при кликах в текущий таб
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeTabIdx !== this.state.activeTabIdx;
  }

  render() {
    console.log(`Re-render @ ${Date.now()}`);
    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <>
        <div>
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIdx(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}
