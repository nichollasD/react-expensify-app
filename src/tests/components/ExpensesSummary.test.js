import React from 'react';
import {shallow} from 'enzyme';
import {expensesSummary} from '../../components/ExpensesSummary';

test('should correctly render ExpenseSumary white 1 expense', () =>{
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expeseTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSumary white multiple expense', () =>{
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expeseTotal={23512340987} />);
    expect(wrapper).toMatchSnapshot();
});