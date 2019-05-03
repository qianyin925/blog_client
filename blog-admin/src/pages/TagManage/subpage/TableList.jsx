import _ from 'lodash';
import React, { Fragment } from 'react';
import { removeTagByIds } from '@server';
import { Spin, FontIcon } from '@components';
import { Card, Table, Popconfirm } from 'antd';
import { OPERATING_TYPE } from '@config/conts';
import handler, { tagColumnModel } from '@config/columns';

const useStateHook = ({listHook, modalHook}) => {

  // 分页器 onChange 事件
  const onChange = (page = 1, pageSize = 10) => {
    listHook.setPage({ page, pageSize });
  };

  // 编辑(打开弹窗)
  const onEdit = (record) => {
    modalHook.openModal({
      title: '修改标签',
      current: record ||  {},
      type: OPERATING_TYPE.EDIT.VALUE,
    });
  };

  // 删除
  const onDelete = (record) => {
    listHook.setPage({ page: 1 });
    removeTagByIds({id: record.id});
  };

  // 创建(打开弹窗)
  const createTag = () => {
    modalHook.openModal({
      current: null,
      title: '新增标签', 
      type: OPERATING_TYPE.CREATE.VALUE, 
    });
  };
  return { onChange, onEdit, onDelete, createTag };
}

export default (props) => {
  const { onChange, onEdit, onDelete, createTag } = useStateHook(props);

  // 新增按钮
  const extra = (
    <FontIcon
      onClick={createTag}
      icon="#icon-xinzeng"
      className="cp f22 linkp"
    />
  );

  // 表格操作
  const Operate = ( text, record ) => (
    <Fragment>
      <FontIcon
        icon="#icon-editor"
        className="cp f22 mrm linkp"
        onClick={onEdit.bind(null, record)}
      />
      <Popconfirm 
        okText="确定" 
        cancelText="取消"
        title="确定要删除该条记录?" 
        onConfirm={onDelete.bind(null, record)} 
      >
        <FontIcon icon="#icon-shanchu" className="cp f22 linkd" />
      </Popconfirm>
    </Fragment>
  );

  const columns = handler(tagColumnModel)([{
    title: '操作',
    key: 'operate',
    dataIndex: 'operate',
    render: Operate
  }]);

  return (
    <Spin>
      <Card title="列表数据" className="block_second" extra={ extra } >
        <Table 
          columns={columns} 
          dataSource={props.listHook.data.list}
          rowKey={(record, index) => (record.id || index)}
          pagination={{
            onChange: onChange,
            showQuickJumper: true,
            total: props.listHook.data.stats.total,
            current: props.listHook.params.page.page,
            pageSize: props.listHook.params.page.pageSize,
            showTotal: (total, range) => `当前 ${range[0]} - ${range[1]} 页 总计 ${total} 页`,
          }} 
        />
      </Card>
    </Spin>
  );
}