/**
 * Created by haoran.shu on 2015/12/7.
 * 在实际开发中经常会遇到，在开发(调试的时候)打印日志信息，
 * 而当我们部署上线的时候，则不打印日志信息
 * 下面就是我对于这种情况做的一个简单的封装
 */
var BriefLog = function(){
    this.key = "BriefLog"; // debug时的筛选标签
    this.debug = true; // 默认处于debug状态,如果处于debug状态则打印日志信息
    /* 发布到线上的时候,把allowDebugState置为false就行了 */
    var allowDebugState = true; // 是否允许传值修改debug状态
    // 获取传递的参数数量
    var argumentsLength = arguments.length;
    // 遍历参数
    for(var i = 0; i < argumentsLength; i++){
        var arg = arguments[i];
        if(typeof(arg) == "boolean"){
            if(allowDebugState){ // 如果允许传值修改debug状态,则根据修改的值更改debug状态
                this.debug = arg;
            }
        }else if(typeof(arg) == "string" && arg){
            this.key = arg;
        }
    }
}

// 定义方法
BriefLog.prototype = {
    /**
     * 打印log日志[只打印debug模式的日志]
     * @param obj 需要打印的信息
     */
    logs : function(obj){
        // 如果是debug模式，则打印日志信息
        if(this.debug){
            if(this.key){
                console.log(this.key + " --> ", obj);
            }else{
                console.log(obj);
            }
        }
    },
    /**
     * 打印warn日志[只打印debug模式的日志]
     * @param obj 需要打印的信息
     */
    warns : function(obj){
        // 如果是debug模式，则打印日志信息
        if(this.debug){
            if(this.key){
                console.warn(this.key + " --> ", obj);
            }else{
                console.warn(obj);
            }
        }
    },
    /**
     * 打印error日志,不管是不是debug模式,error日志都会打印
     * @param obj
     */
    errors : function(obj){
        if(this.key){
            console.error(this.key + " --> ", obj);
        }else{
            console.error(obj);
        }
    },
    /**
     * 打印debug日志[只打印debug模式的日志]
     * @param obj 需要打印的信息
     */
    debugs : function(obj){
        // 如果是debug模式，则打印日志信息
        if(this.debug){
            if(this.key){
                console.debug(this.key + " --> ", obj);
            }else{
                console.debug(obj);
            }
        }
    },
    /**
     * 打印info日志[只打印debug模式的日志]
     * @param obj 需要打印的信息
     */
    info : function(obj){
        // 如果是debug模式，则打印日志信息
        if(this.debug){
            if(this.key){
                console.debug(this.key + " --> ", obj);
            }else{
                console.debug(obj);
            }
        }
    }
}
