/**
 * Created by CaoLijuan on 2016/1/8.
 */
function LeafIterator(_root){
    this._root = _root;
    this.done = false;
}
LeafIterator.prototype = {
    constructor: LeafIterator,
    first: function(){},
    next: function(){
        this.done = true;
    },
    isDone: function(){
        return this.done;
    },
    currentItem: function(){
        return this._root;
    }
};
module.exports = LeafIterator;

