module.exports = function() {
    return {
        visitor: {
            Literal: function(path) {
                if (path.node.type !== 'BooleanLiteral') {
                    return;
                }
                console.log(path.node);
                if (path.node.value === true) {
                    path.node.value = false;
                }
            }
        }
    };
};
