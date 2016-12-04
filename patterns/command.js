/* eslint class-methods-use-this: 0 */
class Command {
    doCommand() {
        throw new Error('Not Emplemented');
    }
    undoCommand() {
        throw new Error('Not Emplemented');
    }
}

class ArrayCommand extends Command {
    constructor(array, commandName, ...args) {
        super();
        this.array = array;
        this.commandName = commandName;
        this.args = args;
    }

    doCommand() {
        switch (this.commandName) {
        case 'push':
            this.array.push(...this.args);
            break;
        default:
            throw new Error(`Unexpected command ${this.commandName}`);
        }
    }

    undoCommand() {
        switch (this.commandName) {
        case 'push':
            this.args.forEach([].pop.bind(this.array));
            break;
        default:
            throw new Error('Smth went wrong');
        }
    }
}

class User {
    constructor(array) {
        this.array = array;
        this.commands = [];
        this.position = 0;
    }

    compute(commandName, ...args) {
        const command = new ArrayCommand(this.array, commandName, ...args);
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
