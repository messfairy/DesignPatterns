/**
 * Created by CaoLijuan on 2016/1/8.
 */
function NullIterator(){}
NullIterator.prototype = {
    constructor: NullIterator,
    first: function(){},
    next: function(){},
    isDone: function(){
        return true;
    },
    currentItem: function(){
        return null;
    }
};
module.exports = NullIterator;