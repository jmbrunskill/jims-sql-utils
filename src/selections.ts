import { window, Selection, Position } from 'vscode';

export function getSelectedString() {
    const editor = window.activeTextEditor;

    if (!editor) { return; }

    const document = editor.document;
    const selection = editor.selection;

    return document.getText(selection);
}


export function replaceSelectedString(updatedString: string) {
    const editor = window.activeTextEditor;

    if (!editor) { return; }

    const document = editor.document;
    const selection = editor.selection;

    editor.edit(editBuilder => {
        editBuilder.replace(selection, updatedString);
    });
}


export function getWholeFile() {
    const editor = window.activeTextEditor;

    if (!editor) { return; }

    const document = editor.document;

    return document.getText();
}


export function replaceWholeFile(updatedString: string) {
    const editor = window.activeTextEditor;

    if (!editor) { return; }

    const document = editor.document;
    let lastLine = document.lineCount - 1;
    if (lastLine < 0) {
        lastLine = 0;
    }
    var lastChar = document.lineAt(lastLine).text.length;
    if (lastChar <= 0) {
        lastChar = 1;
    }
    let selection = new Selection(new Position(0, 0), new Position(lastLine, lastChar));

    editor.edit(editBuilder => {
        editBuilder.replace(selection, updatedString);
    });
}