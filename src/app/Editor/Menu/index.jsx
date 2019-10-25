import React, {
  useState,
  Fragment,
  useEffect, 
} from 'react';
import { Menu } from 'antd';
import { Icon, Scroll } from 'qyrc';
import { useObserver } from 'mobx-react-lite';

import MenuTitle from './MenuTitle';
import { useStore } from '../store';
import scss from './index.module.scss';

const useStateHook = (props, store) => {

  // 初始化数据
  const initData = () => {
    store.tag.getTags();
  }

  // 渲染菜单列表
  const renderMenuList = () => {
    const recursion = (item, index) => {
      return item.type === 'tag' ? 
        <Menu.SubMenu 
          key={item.id} 
          title={<MenuTitle data={item} type="subMenu"/>}>
          {item.children.length !== 0 ? 
            item.children.map(v => (recursion(v, index + 1))) : 
            <Menu.Item className={scss['menu-item-empty']} key={`${item.id}-empty`} />
          }
          <div className={scss['menu-dividing']} style={{ left: `${index * 24 + 12}px` }} />
        </Menu.SubMenu> :
        <Menu.Item key={item.id}>
          <MenuTitle data={item} type="item"/>
        </Menu.Item>;
    }
    return store.menu.list.map(v => (recursion(v, 1)))
  }

  // 选择项时
  const onSelect = (args) => {
    console.log('==>>> args', args);
  }

  useEffect(() => {
    initData();
  }, []);

  return { renderMenuList, onSelect };
}

export default (props) => {
  const store = useStore();
  const state = useStateHook(props, store);

  return useObserver(() => (
    <div className={scss['menu']}>
      <Scroll className={scss['menu-middle']}>
        <Menu
          mode="inline"
          inlineCollapsed={false}
          onSelect={state.onSelect}>
          {state.renderMenuList()}
        </Menu>
      </Scroll>
    </div>
  ));
}
