import React from 'react';
import { useObserver } from "mobx-react-lite";

import { Modal } from 'qyrc';
import { useStore } from '@store';
import scss from './index.module.scss';

export default () => useObserver(() => {
  const store = useStore();
  return (
    <div className={scss['app-block']}>
      {store.app.list.map(v => {
        const { component: Component, isMin, url, modalProps } = v;
        return (
          <Modal
            key={url}
            isMin={isMin}
            onClose={store.app.close.bind(null, v)}
            onMin={store.app.minimize.bind(null, v)}
            onMouseDown={store.app.toggle.bind(null, v)}
            minParams={{ width: 0, height: 0, offsetX: 0, offsetY: 0 }}
            {...modalProps}
          >
            <Component />
          </Modal>
        );
      })}
    </div>
  );
});
