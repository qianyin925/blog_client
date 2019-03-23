import React from 'react';
import { Card } from 'antd';
import { withRouter } from 'react-router-dom';
import { FontIcon } from '@components';
import { update } from '@server/article';

const useStateHook = (props) => {

  // 取消
  const onCancel = () => {
    console.log('---------- 取消 ----------');
  }

  // 保存
  const onSave = () => {
    const { articleId } = props.match.params;
    props.form.validateFieldsAndScroll((errors, values) => {
      !errors && update({ body: values, ids: [articleId] });
    });
  }

  // 发布
  const onPublish = () => {
    props.form.validateFieldsAndScroll((errors, values) => {
      console.log('----- 发布 -----', values);
    });
  }
  return { onCancel, onSave, onPublish };
}

export default withRouter((props) => {
  const { onCancel, onSave, onPublish } = useStateHook(props);
  return (
    <Card
      title="操作按钮" 
      className="block_fourth"
      bodyStyle={{padding: '0'}}
      actions={[
        <FontIcon 
          size="18px"
          label="取消"
          onClick = {onCancel}
          icon="#icon-quxiao" 
        />,
        <FontIcon 
          size="18px"
          label="保存"
          onClick = {onSave}
          icon="#icon-baocun" 
        />,
        <FontIcon 
          size="18px"
          label="发布"
          icon="#icon-fabu" 
          onClick = {onPublish}
        />,
      ]}
    />
  );
});
