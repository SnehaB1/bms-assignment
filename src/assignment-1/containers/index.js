import React from "react";
import { connect } from "react-redux";
import { Card, Form, Button, Input, Icon, Row, Col } from "antd";
import "../style.css";
import { updateList } from "../../actions/assignment-1";


class Assignment1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayList: [],
      duplicateValues: [],
      uniqueValues: []
    }
  }

  componentDidMount() {
    this.init();
    // console.log(arrayList, tempArray)

  }

  init = () => {
    const { numberList } = this.props;
    const tempArray = [];

    Object.keys(numberList).map(function (key) {
      return tempArray.push(numberList[key]);
    })
    this.setState({ arrayList: tempArray });
  }

  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  updateArrayList = () => {
    const { arrayList, duplicateValues, uniqueValues } = this.state;

    duplicateValues.map((item) => {
      return this.deleteValueFromArray(arrayList, item)
    })

    uniqueValues.map((item) => {
      return this.addValueToArray(arrayList, item)
    })

  }

  appendValuesBetweenRange = (array, range) => {
    const splitRange = range.split("-");
    const a = parseInt(splitRange[0]);
    const b = parseInt(splitRange[1]);

    if (b >= a) {
      let i = a;
      for (i = a; i <= b; ++i) {
        array.push(parseInt(i));
      }
    }

    return array;
  }

  deleteValueFromArray = (array, value) => {
    let index = array.indexOf(value);

    if (index > -1) {
      array.splice(index, 1);
    }

    return array.sort(function(a, b){return a - b});
  }

  addValueToArray = (array, value) => {
    array.push(value);
    return array.sort(function(a, b){return a - b});
  }

  handleSubmit = e => {
    e.preventDefault();
    const { updateList } = this.props;
    const { arrayList } = this.state;

    Array.prototype.diff = function (a) {
      return this.filter(function (i) { return a.indexOf(i) < 0; });
    };

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const splittedValues = values.inputNumber.split(", ");

        splittedValues.map((item) => {
          if (item.includes("-")) {
            this.appendValuesBetweenRange(splittedValues, item);
            this.deleteValueFromArray(splittedValues, item);
            // return true
          }
          return true
        });

        let j = 0;
        for(j=0; j<splittedValues.length; j++) { splittedValues[j] = +splittedValues[j]; } 
        splittedValues.filter(function(item, pos){
          return splittedValues.indexOf(item)== pos; 
        });
        console.log(splittedValues)
        // console.log(splittedValues, arrayList)
        let duplicateValues = arrayList.filter((item) => { return splittedValues.indexOf(item) !== -1; })
        let uniqueValues = splittedValues.diff(duplicateValues)

        this.setState({
          duplicateValues,
          uniqueValues
        });

        uniqueValues.map((item) => {
          return this.addValueToArray(arrayList, item)
        })

        updateList(arrayList);

      }

    });
  };

  render() {
    const { arrayList, duplicateValues, uniqueValues } = this.state;
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    // Only show error after a fi eld is touched.
    const inputNumberError = isFieldTouched('inputNumber') && getFieldError('inputNumber');

    return (
      <div>
        <Row>
          <Col>
            <h2 className="heading">Assignment #1</h2>
          </Col>
        </Row>
        <Row align="middle" className="form-container">
          <Col span={12} offset={6} >
            <Card className="card-container">
              <Form layout="inline" onSubmit={this.handleSubmit} className="form">
                <Form.Item validateStatus={inputNumberError ? 'error' : ''} help={inputNumberError || 'E.g. 67, 78, 98-103'}>
                  {getFieldDecorator('inputNumber', {
                    rules: [{ required: true, message: 'Please input numbers!' }],
                  })(
                    <Input
                      prefix={<Icon type="number" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Input Numbers"

                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())}>
                    GO
                    <Icon type="right" />
                  </Button>
                </Form.Item>
              </Form>

              <Row>
                <Col>
                  {
                    duplicateValues.length > 0 &&
                    <p>
                      <b style={{ color: "#ff0000" }}>Duplicate Values: </b>
                      {duplicateValues.join(", ")}
                    </p>
                  }
                  {
                    uniqueValues.length > 0 &&
                    <p>
                      <b style={{ color: "#4BB543" }}>Unique Values(added to list): </b>
                      {uniqueValues.join(", ")}
                    </p>
                  }
                  <p>
                    <b style={{ color: "#1890ff" }}>Current List: </b>
                    {arrayList.join(", ")}
                  </p>
                </Col>
              </Row>

            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { assignment1 } = state;
  // console.log(state);
  return {
    numberList: assignment1
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    updateList: (list) => dispatch(updateList(list))
  };
};

const AssignmentForm1 = Form.create({ name: 'assgn1' })(Assignment1);

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentForm1);