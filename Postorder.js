function PostorderIterator(root) {
    this.stack = [];
    this.root = root;

}

PostorderIterator.prototype = {
    constructor: PostorderIterator,
    first: function(){

    },
    isDone: function() {
        return this.stack.length===0;
    },
    _peek: function () {
        var stack = this.stack, length = stack.length;
        return stack[length - 1];
    },
    currentItem: function(){
        return this._peek();
    },
    next: function() {

    }
};

function Folder(data, children){
    this.data = data||0;
    this.children = children;
}
Folder.prototype = {
    constructor: Folder,
    isLeaf: function () {
        return false;
    }
};
function File(data){
    this.data = data||-1;
    this.children = [];
}
File.prototype = {
    constructor: File,
    isLeaf: function () {
        return true;
    }
};

var component7 = new File(7);
var component6 = new File(6);
var component5 = new File(5);
var component4 = new File(4);
var component3 = new Folder(3, [component4, component5]);
var component2 = new Folder(2, [component3, component6]);
var component1 = new Folder(1, [component2, component7]);
var component0 = new Folder(0, [null, component1]);
var iterator = new PostorderIterator(component0);
for(iterator.first(); !iterator.isDone(); iterator.next()){
    var child = iterator.currentItem();
    console.log('child: ' + child.data);
}

console.log('================');

var node1 = new File(1);
var node4 = new File(4);
var node7 = new File(7);
var node9 = new File(9);
var node13 = new File(13);
var node6 = new Folder(6, [node4, node7]);
var node3 = new Folder(3, [node1, node6]);
var node14 = new Folder(14, [node13, null]);
var node10 = new Folder(10, [node9, node14]);
var node8 = new Folder(8, [node3, node10]);
var iterator = new PostorderIterator(node8);
for(iterator.first(); !iterator.isDone(); iterator.next()){
    var child = iterator.currentItem();
    console.log('child: ' + child.data);
}