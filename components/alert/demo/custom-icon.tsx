/*
 * debug: true
 */

import { SmileOutlined } from '@ant-design/icons';
import { Alert } from 'antd';
import React from 'react';

const icon = <SmileOutlined />;

const App: React.FC = () => (
  <>
    <Alert icon={icon} message="showIcon = false" type="success" />
    <Alert icon={icon} message="Success Tips" type="success" showIcon />
    <Alert icon={icon} message="Informational Notes" type="info" showIcon />
    <Alert icon={icon} message="Warning" type="warning" showIcon />
    <Alert icon={icon} message="Error" type="error" showIcon />
    <Alert
      icon={icon}
      message="Success Tips"
      description="Detailed description and advices about successful copywriting."
      type="success"
      showIcon
    />
    <Alert
      icon={icon}
      message="Informational Notes"
      description="Additional description and informations about copywriting."
      type="info"
      showIcon
    />
    <Alert
      icon={icon}
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
    />
    <Alert
      icon={icon}
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </>
);

export default App;
