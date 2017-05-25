/**
 * Created by ZJ on 2017/2/19.
 */
define(['c'], function(isArr) {
    function add(arr){
        if(!isArr(arr)){
            return '不是数组！';
        }
        arr.sort(function(a,b){
            return a-b;
        });
        return arr;
    }
    return add;
})