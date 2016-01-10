/**
 * Created by CaoLijuan on 2016/1/8.
 */
function PreorderIterator(_root){
    this._root = _root;
}
PreorderIterator.prototype = {
    constructor: PreorderIterator,
    first: function(){
        var iterator = this._root.createIterator();
        if(iterator){
            iterator.first();
            this._iterators = [];
            this._iterators.push(iterator);
        }
    },
    currentItem: function(){
        var _iterators = this._iterators;
        return _iterators.length>0?_iterators[_iterators.length-1].currentItem():this._root;
    },
    next: function(){
        var _iterators = this._iterators;
        var iterator = this.currentItem().createIterator();
        if(iterator){
            iterator.first();
            _iterators.push(iterator);
        }
        while(_iterators.length>0&&_iterators[_iterators.length-1].isDone()){
            _iterators.pop();
            if(_iterators.length>0){
                _iterators[_iterators.length-1].next();
            }else{
                this.next();
            }
        }
    },
    isDone: function(){
        var _iterators = this._iterators, length = _iterators.length;
        if(length===0){
            return true;
        }else{
            return _iterators.every(function(_iterator){
                return _iterator.isDone();
            });
        }
    }
};
module.exports = PreorderIterator;