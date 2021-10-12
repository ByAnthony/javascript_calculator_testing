import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add 1 to 4 and get 5', () => {
    const button1 = container.find('#number1');
    button1.simulate('click');
    const operatorAdd = container.find('#operator_add');
    operatorAdd.simulate('click');
    const button4 = container.find('#number4');
    button4.simulate('click');
    const operatorEquals = container.find('#operator-equals');
    operatorEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should be able to subtract 4 from 7 and get 3', () => {
    const button7 = container.find('#number7');
    button7.simulate('click');
    const operatorSubtract = container.find('#operator-subtract');
    operatorSubtract.simulate('click');
    const button4 = container.find('#number4');
    button4.simulate('click');
    const operatorEquals = container.find('#operator-equals');
    operatorEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to multiply 3 by 5 and get 15', () => {
    const button3 = container.find('#number3');
    button3.simulate('click');
    const operatorMultiply = container.find('#operator-multiply');
    operatorMultiply.simulate('click');
    const button5 = container.find('#number5');
    button5.simulate('click');
    const operatorEquals = container.find('#operator-equals');
    operatorEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should be able to divide 21 by 7 and get 3', () => {
    const button2 = container.find('#number2');
    button2.simulate('click');
    const button1 = container.find('#number1');
    button1.simulate('click');
    const operatorDivide = container.find('#operator-divide');
    operatorDivide.simulate('click');
    const button7 = container.find('#number7');
    button7.simulate('click');
    const operatorEquals = container.find('#operator-equals');
    operatorEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to concatenate multiple number button clicks', () => {
    const button1 = container.find('#number1');
    button1.simulate('click');
    const button2 = container.find('#number2');
    button2.simulate('click');
    const button5 = container.find('#number5');
    button5.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('125');
  })

  it('should be able to chain multiple operations together', () => {
    const button8 = container.find('#number8');
    button8.simulate('click');
    const operatorAdd = container.find('#operator_add');
    operatorAdd.simulate('click');
    const button6 = container.find('#number6');
    button6.simulate('click');
    const operatorMultiply = container.find('#operator-multiply');
    operatorMultiply.simulate('click');
    const button2 = container.find('#number2');
    button2.simulate('click');
    const operatorEquals = container.find('#operator-equals');
    operatorEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('28');
  })

})

