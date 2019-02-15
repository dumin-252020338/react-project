import React, { Component } from "react";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
} from "antd";

const { Option } = Select;

class Regist extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: []
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            console.log("表单信息如下: ", values);
        }
        });
    };

    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue("password")) {
            callback("两次输入的密码不一致!");
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(["confirm"], { force: true });
        }
        callback();
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
        autoCompleteResult = [".com", ".org", ".net"].map(
            domain => `${value}${domain}`
        );
        }
        this.setState({ autoCompleteResult });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 }
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 }
        }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                span: 24,
                offset: 0
                },
                sm: {
                span: 16,
                offset: 8
                }
            }
        };
        const prefixSelector = getFieldDecorator("prefix", {
            initialValue: "86"
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

    return (
        <Form onSubmit={this.handleSubmit}>
            {/* 手机号码 */}
            <Form.Item {...formItemLayout} label="手机号码">
                {getFieldDecorator("phone", {
                    rules: [
                        { required: true, message: "请输入你的手机号码!" }
                    ]
                })(<Input addonBefore={prefixSelector} style={{ width: "100%" }} />)}
            </Form.Item>
            {/* 昵称 */}
            <Form.Item {...formItemLayout} label={
                <span>昵称&nbsp;
                    <Tooltip title="你希望别人怎么称呼你?">
                        <Icon type="question-circle-o" />
                    </Tooltip>
                </span>}
            >
                {getFieldDecorator("nickname", {
                    rules: [
                        {
                            required: true,
                            message: "请输入你的昵称!",
                            whitespace: true
                        }
                    ]
                })(<Input />)}
            </Form.Item>
            {/* 密码 */}
            <Form.Item {...formItemLayout} label="输入密码">
                {getFieldDecorator("password", {
                    rules: [
                        {
                            required: true,
                            message: "请输入密码!"
                        },
                        {
                            validator: this.validateToNextPassword
                        }
                    ]
                })(<Input type="password" />)}
            </Form.Item>
            {/* 再次输入密码 */}
            <Form.Item {...formItemLayout} label="再次输入密码">
                {getFieldDecorator("confirm", {
                    rules: [
                        {
                            required: true,
                            message: "确认密码!"
                        },
                        {
                            validator: this.compareToFirstPassword
                        }
                    ]
                })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            {/* 验证码 */}
            <Form.Item {...formItemLayout} label="验证码" extra="我们必须确保你是一个人.">
            <Row gutter={8}>
                <Col span={12}>
                    {getFieldDecorator("captcha", {
                        rules: [
                        {
                            required: true,
                            message: "请输入验证码!"
                        }
                        ]
                    })(<Input />)}
                </Col>
                <Col span={12}>
                    <Button>获取验证码</Button>
                </Col>
            </Row>
            </Form.Item>
            {/* 协议 */}
            <Form.Item {...tailFormItemLayout}>
                {getFieldDecorator("agreement", {
                    valuePropName: "checked"
                })(
                    <Checkbox>
                        我同意协议
                    </Checkbox>
                )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    注册
                </Button>
            </Form.Item>
        </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(Regist);

export default WrappedRegistrationForm;
