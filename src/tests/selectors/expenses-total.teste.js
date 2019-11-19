import selectExpensesTotal from '../../selectors/expenses_total';
import expenses from '../fixtures/expenses';

test('should return 9 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correcly add a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('should correcly add a multiple expense', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195);
});