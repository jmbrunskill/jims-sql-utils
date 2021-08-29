import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import {createInClauseString} from '../../inClause';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('spacesep_Ints', () => {
		let input = '1 2 3 4 ';
		let expected = '1,2,3,4';
		let result:string = createInClauseString(input)!;

		assert.strictEqual(result,expected);
	});
	test('linesep_Ints', () => {
		let input = `1
2
3
4 `;
		let expected = '1,2,3,4';
		let result:string = createInClauseString(input)!;

		assert.strictEqual(result,expected);
	});
	test('linesep_floats', () => {
		let input = `1.1
2.1
3.1
4.1`;
		let expected = '1.1,2.1,3.1,4.1';
		let result:string = createInClauseString(input)!;

		assert.strictEqual(result,expected);
	});
	test('linesep_strings', () => {
		let input = `This is a line
Heres's another line`;

		let expected = "'This is a line','Heres''s another line'";
		let result:string = createInClauseString(input)!;

		assert.strictEqual(result,expected);
	});
	test('tabsep_strings', () => {
		let input = `Col1	Column 2`;

		let expected = "'Col1','Column 2'";
		let result:string = createInClauseString(input)!;

		assert.strictEqual(result,expected);
	});
	test('tabsep_ints', () => {
		let input = `1	2	3	4`;

		let expected = "1,2,3,4";
		let result:string = createInClauseString(input)!;

		assert.strictEqual(result,expected);
	});
	test('linesep_blank_line', () => {
		let input = `abc

efg`;

		let expected = "'abc','efg'";
		let result:string = createInClauseString(input)!;

		assert.strictEqual(result,expected);
	});
});
