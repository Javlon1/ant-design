/*
 * debug: true
 */

import { Form, Input, Typography } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Form name="label-ellipsis" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
    <Form.Item
      label={
        <Typography.Text ellipsis>
          longtextlongtextlongtextlongtextlongtextlongtextlongtext
        </Typography.Text>
      }
      name="username"
    >
      <Input />
    </Form.Item>

    <Form.Item
      label={
        <Typography.Text ellipsis>
          longtext longtext longtext longtext longtext longtext longtext
        </Typography.Text>
      }
      name="password"
    >
      <Input.Password />
    </Form.Item>
  </Form>
);

export default App;
