# BriefLog
## 写作背景
其实我之前一直都是做的android开发的，在android开发中，我自己封装了一套日志组件，主要实现当我是在开发的时候，需要打印日志，而一旦部署到线上的时候，则不能打印日志，这个时候如果部署的时候，又删除日志语句的话，太麻烦，并且工作量较大；基于这个我进行了一次封装，实现只需要更改一个地方就实现开发的时候打印日志，打包的apk不打印日志。<br>
现在由于公司需求，我慢慢的开始接触到前端，做前端页面的时候，有时候我也需要实现，开发的时候，打印日志而部署到线上的时候不打印日志，所以我对于console进行了一次简单的封装，实现只需要更改一个地方，来进行日志模式切换。
## 简单使用
```javascript
  // 构造日志
  var briefLog = new BriefLog(true, "d");
  var briefLog = new BriefLog(true);
  var briefLog = new BriefLog("d");
  var briefLog = new BriefLog();
  // 写日志
  briefLog.logs("log");
  briefLog.warns("warn");
  briefLog.errors("error");
  briefLog.debugs("debug");
  briefLog.info("info");
  var obj = {"type" : "json"};
  briefLog.logs(obj);
  briefLog.logs(document.getElementById("btn"));
```
在构造日志中有两个参数：<br>
第一个参数：boolean类型的数据,true写日志，false不写日志<br>
第二个参数：字符类型的参数，在写日志的时候，会一起写入日志中，方便调试的时候，进行filter筛选。<br><br>
**部署上线的时候，只需要修改`BriefLog.js`文件中的变量`allowDebugState=false`这样不管页面怎么传递参数将都不会打印日志。**
