import _ from 'lodash';
import { Scroll } from 'qyrc';
import { Menu, Icon } from 'antd';
import { useObserver } from 'mobx-react-lite';
import React, { useState, useEffect } from 'react';

import scss from './index.module.scss';
import { useStore } from '../store'

const useStateHook = (props, store) => {
  const onClick = ({ key }) => {
    store.setNote(key);
  };
  return { onClick };
};

export default (props) => {
  const store = useStore();
  const state = useStateHook(props, store);
  return useObserver(() =>(
    <Scroll className={scss['list']}>
      <Menu
        theme="dark"
        mode="inline"
        inlineIndent={24}
        onClick={state.onClick}
        selectedKeys={[_.get(store, 'note.id')]}
        style={{ width: '100%', minHeight: '100%' }}
      >
        {store.noteList.map( v => (
          <Menu.Item key={v.id}>{v.name}</Menu.Item>
        ))}
      </Menu>
    </Scroll>
  ));
};
