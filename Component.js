/**
 * Created by CaoLijuan on 2016/1/8.
 */
var PreorderIterator = require('./PreorderIterator');
var LeafIterator = require('./LeafIterator');
var NullIterator = require('./NullIterator');
function Folder(data, files){
    this.files = files;
    this.data = data||-1;
    this.index = 0;
}
Folder.prototype = {
    constructor: Folder,
    isLeaf: function () {
        return false;
    },
    createIterator: function (){
        if(this.index===this.files.length) return null;
        var files = this.files;
        var file = files[this.index++];
        if(file.isLeaf()){
            return new LeafIterator(file);
        }else{
            return new PreorderIterator(file);
        }
    }
};
function File(data){
    this.data = data||-1;
}
File.prototype = {
    constructor: File,
    isLeaf: function () {
        return true;
    },
    createIterator: function (){
        return new NullIterator();
    }
};
exports.Folder = Folder;
exports.File = File;