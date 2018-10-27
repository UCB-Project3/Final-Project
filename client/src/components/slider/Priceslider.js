import React from "react";
import "./Priceslider.css";
import { Slider, InputNumber, Row, Col } from "antd";

export class Priceslider extends React.Component {
  state = {
    inputValue: 1
  };

  onChange = value => {
    this.setState({
      inputValue: value
    });
    this.props.handlePriceChange(value);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={200}
            onChange={this.onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            className="price_input slider_value"
            min={1}
            max={200}
            style={{ marginLeft: 16 }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}
