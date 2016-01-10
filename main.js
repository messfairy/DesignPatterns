/**
 * Created by CaoLijuan on 2016/1/8.
 */
var Component = require('./Component');
var Folder = Component.Folder;
var File = Component.File;
var component7 = new File(7);
var component6 = new File(6);
var component5 = new File(5);
var component4 = new File(4);
var component3 = new Folder(3, [component4, component5]);
var component2 = new Folder(2, [component3, component6]);
var component1 = new Folder(1, [component2, component7]);
var component0 = new Folder(0, [component1]);
var iterator = component0.createIterator();
for(iterator.first(); !iterator.isDone(); iterator.next()){
    var child = iterator.currentItem();
    console.log('child: ' + child.data);
}
