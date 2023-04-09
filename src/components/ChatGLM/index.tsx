import React, { useState } from "react";
import {
    Button,
    Slider,
    Layout,
    Input,
    Row,
    Col,
    Checkbox,
    Space,
    Typography as AntTypography,
    Tabs,
    List,
    Upload,
} from "antd";
import 'antd/dist/reset.css';
import styles from "./ChatGLM.module.scss";

const { Header, Content } = Layout;
const { Title } = AntTypography;
const { TabPane } = Tabs;
const { Dragger } = Upload;

const ChatGLM: React.FC = () => {
    const [inputMessage, setInputMessage] = useState("");
    const [messages, setMessages] = useState<
        Array<{ role: "user" | "bot"; text: string }>
    >([]);

    const handleSubmit = () => {
        // Send message to server, handle response
        // ...
        setMessages([...messages, { role: "user", text: inputMessage }]);
    };

    return (
        <Layout className={styles.chatcontainer} style={{ minHeight: "100vh" }}>
            <Header className="chat-header">
                <Title level={2} style={{ color: "white" }}>
                    ChatGLM WebUI
                </Title>
            </Header>
            <Content style={{ padding: "1rem" }} >
                <Tabs>
                    <TabPane tab="Chat" key="1">
                        <Row gutter={[16, 24]}>
                            <Col span={24}>
                                <div className="bar-content">
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={messages}
                                        renderItem={(item) => (
                                            <List.Item >
                                                <List.Item.Meta
                                                    title={item.role === "user" ? "You" : "Chatbot"}
                                                    description={item.text}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </div>
                                <Row gutter={16} className="chat-input">
                                    <Col span={20}>
                                        <Input
                                            id="chatInput"
                                            placeholder="Type your message here..."
                                            value={inputMessage}
                                            onChange={(e) => setInputMessage(e.target.value)}
                                            onPressEnter={handleSubmit}
                                        />
                                    </Col>
                                    <Col span={4}>
                                        <Button
                                            type="primary"
                                            onClick={handleSubmit}
                                            style={{ width: "100%", height: "100%" }}
                                        >
                                            Send
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </TabPane>
                    <TabPane tab="Settings" key="2">
                        <Row>
                            <Col span={6}>
                                <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                                    <Title level={4}>Settings</Title>
                                    <div>
                                        <span>Max Length: </span>
                                        <Slider
                                            defaultValue={2048}
                                            min={4}
                                            max={4096}
                                            step={4}
                                            marks={{ 4: "4", 4096: "4096" }}
                                        />
                                    </div>
                                    <div>
                                        <span>Top P: </span>
                                        <Slider
                                            defaultValue={0.7}
                                            min={0.01}
                                            max={1}
                                            step={0.01}
                                            marks={{ 0.01: "0.01", 1: "1" }}
                                        />
                                    </div>
                                    <div>
                                        <span>Temperature: </span>
                                        <Slider
                                            defaultValue={0.95}
                                            min={0.01}
                                            max={1}
                                            step={0.01}
                                            marks={{ 0.01: "0.01", 1: "1" }}
                                        />
                                    </div>
                                    <div>
                                        <span>Max Rounds: </span>
                                        <Slider
                                            defaultValue={20}
                                            min={1}
                                            max={100}
                                            step={1}
                                            marks={{ 1: "1", 100: "100" }}
                                        />
                                    </div>
                                    <Checkbox defaultChecked>Use Stream Chat</Checkbox>
                                </Space>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </Content>
        </Layout>
    );
};

export default ChatGLM;