/* eslint class-methods-use-this: 0 */
import Singleton from './singleton';
import checkNewsAction from '../scripts/actions/checkNewsAction';

let store;

class Command {
    doCommand() {
        throw new Error('Not Emplemented');
    }
    undoCommand() {
        throw new Error('Not Emplemented');
    }
}

class CheckCommand extends Command {
    constructor(commandName, ...args) {
        super();
        this.commandName = commandName;
        this.args = args;
    }

    doCommand() {
        switch (this.commandName) {
        case 'check':
            store.dispatch(checkNewsAction(this.args[0]));
            break;
        default:
            throw new Error(`Unexpected command ${this.commandName}`);
        }
    }

    undoCommand() {
        switch (this.commandName) {
        case 'check':
            store.dispatch(checkNewsAction(this.args[0]));
            break;
        default:
            throw new Error('Smth went wrong');
        }
    }
}

class User {
    constructor() {
        this.commands = [];
        this.position = 0;
        store = new Singleton().store;
    }

    compute(commandName, ...args) {
        const command = new CheckCommand(commandName, ...args);
        command.doCommand();
        this.commands.splice(this.position);
        this.commands.push(command);
        this.position += 1;
    }

    redo() {
        if (this.commands.length > this.position) {
            this.commands[this.position].doCommand();
            this.position += 1;
        }
    }

    undo() {
        if (this.position) {
            this.commands[this.position - 1].undoCommand();
            this.position -= 1;
        }
    }
}

export default User;
