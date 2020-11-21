import React, { useState } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const FormItem = Form.Item;
class CustomForm extends React.Component {

    render() {
        return (
            <div>
                <Form layout="vertical">
                    <Form.Item label="Title" required>
                        <Input placeholder="input title : " />
                    </Form.Item>
                    <Form.Item label="Upload Video" required>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        </Dragger>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary"   htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
};
export default CustomForm;


