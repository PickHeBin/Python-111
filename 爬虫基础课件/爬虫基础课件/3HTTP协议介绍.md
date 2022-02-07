# HTTP协议介绍

设计HTTP(HyperText Transfer Protocol)是为了提供一种发布和接收HTML(HyperText Markup Language)页面的方法。

## Http组成

由两部分组成：请求与响应

![img](https://piaosanlang.gitbooks.io/spiders/content/photos/02_http_pro.jpg)

### 客户端请求消息

客户端发送一个HTTP请求到服务器的请求消息包括以下格式：请求行（request line）、请求头部（header）、空行和请求数据四个部分组成，下图给出了请求报文的一般格式。

![img](https://piaosanlang.gitbooks.io/spiders/content/photos/01_request.png)

### 服务器响应消息

HTTP响应也由四个部分组成，分别是：状态行、消息报头、空行和响应正文。

![img](https://piaosanlang.gitbooks.io/spiders/content/photos/01_response.jpg)

------

先看Request 消息的结构, Request 消息分为3部分，第一部分叫Request line, 第二部分叫Request header, 第三部分是body. header和body之间有个空行， 结构如下图

![img](https://piaosanlang.gitbooks.io/spiders/content/assets/import765.png)

抽象的东西，难以理解，老感觉是虚的， 所谓眼见为实, 实际见到的东西，我们才能理解和记忆。 我们今天用Fiddler，实际的看看Request和Response.



我们再看Response消息的结构, 和Request消息的结构基本一样。 同样也分为三部分,第一部分叫Response line, 第二部分叫Response header，第三部分是body. header和body之间也有个空行, 结构如下图

![img](https://piaosanlang.gitbooks.io/spiders/content/assets/import675.png)

HTTP/version-number表示HTTP协议的版本号， status-code 和message 

我们用Fiddler 捕捉一个博客园首页的Response然后分析下它的结构, 在Inspectors tab下以Raw的方式可以看到完整的Response的消息， 如下图

![img](https://piaosanlang.gitbooks.io/spiders/content/assets/import875.png)

------

### 提出一个问题

服务器和客户端的交互仅限于请求/响应过程，结束之后便断开，
在下一次请求服务器会认为新的客户端;

为了维护他们之间的链接，让服务器知道这是前一个用户发送的请求，必须在一个地方保存客户端的信息，

1. Cookie通过在客户端记录信息确定用户身份
2. Session通过在服务器端记录信息确定用户身份



# HTTP 请求

![img](https://piaosanlang.gitbooks.io/spiders/content/photos/01_request.png)

------

- 请求方法

根据HTTP标准，HTTP请求可以使用多种请求方法。

HTTP1.0定义了三种请求方法： GET, POST 和 HEAD方法。

HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法。

| 序号 | 方法    | 描述                                                         |
| ---- | ------- | ------------------------------------------------------------ |
| 1    | GET     | 请求指定的页面信息，并返回实体主体。                         |
| 2    | HEAD    | 类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头 |
| 3    | POST    | 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。 |
| 4    | PUT     | 从客户端向服务器传送的数据取代指定的文档的内容。             |
| 5    | DELETE  | 请求服务器删除指定的页面。                                   |
| 6    | CONNECT | HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。     |
| 7    | OPTIONS | 允许客户端查看服务器的性能。                                 |
| 8    | TRACE   | 回显服务器收到的请求，主要用于测试或诊断。                   |

GET和POST方法区别归纳如下几点：

- GET是从服务器上获取数据，POST是向服务器传送数据。
- GET请求参数显示，都显示在浏览器网址上,POST请求参数在请求体当中,消息长度没有限制而且以隐式的方式进行发送
- 尽量避免使用Get方式提交表单，因为有可能会导致安全问题。 比如说在登陆表单中用Get方式，用户输入的用户名和密码将在地址栏中暴露无遗。 但是在分页程序中，用Get方式就比用Post好。

Http协议定义了很多与服务器交互的方法，最基本的有4种，分别是GET,POST,PUT,DELETE. 一个URL地址用于描述一个网络上的资源，而HTTP中的GET, POST, PUT, DELETE就对应着对这个资源的查，改，增，删4个操作。 我们最常见的就是GET和POST了。GET一般用于获取/查询资源信息，而POST一般用于更新资源信息.

> 我们看看GET和POST的区别
>
> 1. GET提交的数据会放在URL之后，以?分割URL和传输数据，参数之间以&相连，如EditPosts.aspx?name=test1&id=123456. POST方法是把提交的数据放在HTTP包的Body中.
> 2. GET提交的数据大小有限制（因为浏览器对URL的长度有限制），而POST方法提交的数据没有限制.
> 3. GET方式需要使用Request.QueryString来取得变量的值，而POST方式通过Request.Form来获取变量的值。
> 4. GET方式提交数据，会带来安全问题，比如一个登录页面，通过GET方式提交数据时，用户名和密码将出现在URL上，如果页面可以被缓存或者其他人可以访问这台机器，就可以从历史记录获得该用户的账号和密码.

------

#### URL概述

统一资源定位符（URL，英语 Uniform / Universal Resource Locator的缩写）是用于完整地描述Internet上网页和其他资源的地址的一种标识方法。

URL格式：

基本格式如下
schema://host[:port#]/path/…/[?query-string][#anchor]

![img](https://piaosanlang.gitbooks.io/spiders/content/photos/01-httpstruct.jpg)

- schema 协议(例如：http, https, ftp)
- host 服务器的IP地址或者域名
- port# 服务器的端口（如果是走协议默认端口，缺省端口80）
- path 访问资源的路径
- query-string 参数，发送给http服务器的数据
- anchor- 锚（跳转到网页的指定锚点位置）

例子:

1. http://www.sina.com.cn/
2. http://192.168.0.116:8080/index.jsp
3. http://item.jd.com/11052214.html#product-detail
4. http://www.website.com/test/test.aspx?name=sv&x=true#stuff

一个URL的请求过程：

当你在浏览器输入URL [http://www.website.com](http://www.website.com/) 的时候，浏览器发送一个Request去获取 [http://www](http://www/). website.com的html. 服务器把Response发送回给浏览器.
浏览器分析Response中的 HTML，发现其中引用了很多其他文件，比如图片，CSS文件，JS文件。
浏览器会自动再次发送Request去获取图片，CSS文件，或者JS文件。
当所有的文件都下载成功后， 网页就被显示出来了。

## 常用的请求报头

- Host

  Host初始URL中的主机和端口,用于指定被请求资源的Internet主机和端口号，它通常从HTTP URL中提取出来的

- Connection

  表示客户端与服务连接类型；

  1. client 发起一个包含Connection:keep-alive的请求

  1. server收到请求后，如果server支持keepalive，回复一个包含Connection:keep-alive的响应，不关闭连接，否则回复一个包含Connection:close的响应，关闭连接。
  2. 如果client收到包含Connection:keep-alive的响应，向同一个连接发送下一个请求，直到一方主动关闭连接。
     Keep-alive在很多情况下能够重用连接，减少资源消耗，缩短响应时间HTTP

- Accept

  表示浏览器支持的 MIME 类型

  MIME的英文全称是 Multipurpose Internet Mail Extensions（多用途互联网邮件扩展）

  ```
    eg：
    Accept：image/gif，表明客户端希望接受GIF图象格式的资源；
    Accept：text/html，表明客户端希望接受html文本。
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
    意思：浏览器支持的 MIME 类型分别是 text/html、application/xhtml+xml、application/xml 和 */*，优先顺序是它们从左到右的排列顺序。
  
    Text：用于标准化地表示的文本信息，文本消息可以是多种字符集和或者多种格式的；
    Application：用于传输应用程序数据或者二进制数据；
  ```

  设定某种扩展名的文件用一种应用程序来打开的方式类型，当该扩展名文件被访问的时候，浏览器会自动使用指定应用程序来打开

| Mime类型                 |                            扩展名                            |
| ------------------------ | :----------------------------------------------------------: |
| text/html                |                     *.htm* .html *.shtml                     |
| text/plain               | text/html是以html的形式输出，比如`<input type="text"/>`就会在页面上显示一个文本框，而以plain形式就会在页面上原样显示这段代码 |
| application/xhtml+xml    |                        *.xhtml* .xml                         |
| text/css                 |                            *.css                             |
| application/msexcel      |                         *.xls* .xla                          |
| application/msword       |                         *.doc* .dot                          |
| application/octet-stream |                            *.exe                             |
| application/pdf          |                            *.pdf                             |
| .....                    |                            .....                             |

q是权重系数，范围 0 =< q <= 1，q 值越大，请求越倾向于获得其“;”之前的类型表示的内容，若没有指定 q 值越大，请求越倾向于获得其“，则默认为1，若被赋值为0，则用于提醒服务器哪些是浏览器不接受的内容类型。

- Content-Type

  POST 提交，application/x-www-form-urlencoded
  提交的数据按照 key1=val1&key2=val2 的方式进行编码，key 和 val 都进行了 URL 转码。

- User-Agent

  浏览器类型

- Referer

  请求来自哪个页面，用户是从该 Referer URL页面访问当前请求的页面。

- Accept-Encoding

  浏览器支持的压缩编码类型，比如gzip,支持gzip的浏览器返回经gzip编码的HTML页面。

  许多情形下这可以减少5到10倍的下载时间

  ```
    eg：
    Accept-Encoding:gzip;q=1.0, identity; q=0.5, *;q=0 // 按顺序支持 gzip , identity
    如果有多个Encoding同时匹配, 按照q值顺序排列
  ```

  如果请求消息中没有设置这个域服务器假定客户端对各种内容编码都可以接受。

- Accept-Language

  浏览器所希望的语言种类，当服务器能够提供一种以上的语言版本时要用到。

  ```
    eg：
    Accept-Language:zh-cn
  ```

  如果请求消息中没有设置这个报头域，服务器假定客户端对各种语言都可以接受。

- Accept-Charset

  浏览器可接受的字符集,用于指定客户端接受的字符集

  ```
    eg：
    Accept-Charset:iso-8859-1,gb2312
    ISO8859-1，通常叫做Latin-1。Latin-1包括了书写所有西方欧洲语言不可缺少的附加字符;
    gb2312是标准中文字符集;
    UTF-8 是 UNICODE 的一种变长字符编码，可以解决多种语言文本显示问题，从而实现应用国际化和本地化。
    如果在请求消息中没有设置这个域，缺省是任何字符集都可以接受。
  ```

# HTTP 响应

### 学习目的

掌握常用的响应状态码

![img](https://piaosanlang.gitbooks.io/spiders/content/photos/01_response.jpg)

- 响应状态码

响应状态代码有三位数字组成，第一个数字定义了响应的类别，且有五种可能取值：

# 状态码

Response 消息中的第一行叫做状态行，由HTTP协议版本号， 状态码， 状态消息 三部分组成。

> 状态码用来告诉HTTP客户端,HTTP服务器是否产生了预期的Response.
>
> HTTP/1.1中定义了5类状态码， 状态码由三位数字组成，第一个数字定义了响应的类别
>
> 1XX 提示信息 - 表示请求已被成功接收，继续处理
>
> 2XX 成功 - 表示请求已被成功接收，理解，接受
>
> 3XX 重定向 - 要完成请求必须进行更进一步的处理
>
> 4XX 客户端错误 - 请求有语法错误或请求无法实现
>
> 5XX 服务器端错误 - 服务器未能实现合法的请求

| 分类 |                    分类描述                    |
| ---- | :--------------------------------------------: |
| 1**  |  信息，服务器收到请求，需要请求者继续执行操作  |
| 2**  |           成功，操作被成功接收并处理           |
| 3**  |       重定向，需要进一步的操作以完成请求       |
| 4**  |   客户端错误，请求包含语法错误或无法完成请求   |
| 5**  | 服务器错误，服务器在处理请求的过程中发生了错误 |

- 最常用的响应状态码

  ◆200 (OK): 找到了该资源，并且一切正常。

  ◆301(Moved Permanently): 客户请求的文档在其他地方，新的URL在Location头中给出，浏览器应该自动地访问新的URL。

  ◆302 (Found): 类似于301，但新的URL应该被视为临时性的替代，而不是永久性的。

  ◆304 (NOT MODIFIED): 该资源在上次请求之后没有任何修改。这通常用于浏览器的缓存机制。

  ◆400 (Bad Request): 请求出现语法错误。

  ◆403 (FORBIDDEN): 客户端未能获得授权。这通常是在401之后输入了不正确的用户名或密码。

  ◆404 (NOT FOUND): 在指定的位置不存在所申请的资源。

  ◆500 (Internal Server Error): 服务器遇到了意料不到的情况，不能完成客户的请求

  ◆503 (Service Unavailable): 服务器由于维护或者负载过重未能应答。例如，Servlet可能在数据库连接池已满的情况下返回503。服务器返回503时可以提供一个Retry-After头

------

看看一些常见的状态码

200 OK

最常见的就是成功响应状态码200了， 这表明该请求被成功地完成，所请求的资源发送回客户端

如下图， 打开博客园首页

![img](https://piaosanlang.gitbooks.io/spiders/content/assets/import001.png)

##### 302 Found

重定向，新的URL会在response 中的Location中返回，浏览器将会自动使用新的URL发出新的Request

例如在IE中输入， [http://www.google.com](http://www.google.com/). HTTP服务器会返回302， IE取到Response中Location header的新URL, 又重新发送了一个Request.

##### 304 Not Modified

代表上次的文档已经被缓存了， 还可以继续使用，

例如打开博客园首页, 发现很多Response 的status code 都是304

![img](https://piaosanlang.gitbooks.io/spiders/content/assets/import004.png)

提示：　如果你不想使用本地缓存可以用Ctrl+F5 强制刷新页面

400 Bad Request 客户端请求与语法错误，不能被服务器所理解

403 Forbidden 服务器收到请求，但是拒绝提供服务

404 Not Found

请求资源不存在（输错了URL）

比如在IE中输入一个错误的URL， http://www.cnblogs.com/tesdf.aspx

![img](https://piaosanlang.gitbooks.io/spiders/content/assets/import005.png)

500 Internal Server Error 服务器发生了不可预期的错误

503 Server Unavailable 服务器当前不能处理客户端的请求，一段时间后可能恢复正常

------

## **HTTP Request header**

使用Fiddler 能很方便的查看Reques header, 点击Inspectors tab ->Request tab-> headers 如下图所示

![img](https://piaosanlang.gitbooks.io/spiders/content/assets/import006.png)

header 有很多，比较难以记忆，我们也按照Fiddler那样把header 进行分类，这样比较清晰也容易记忆。

\>>>

------

#### Cache 头域

- If-Modified-Since

> 作用： 把浏览器端缓存页面的最后修改时间发送到服务器去，服务器会把这个时间与服务器上实际文件的最后修改时间进行对比。如果时间一致，那么返回304，客户端就直接使用本地缓存文件。如果时间不一致，就会返回200和新的文件内容。客户端接到之后，会丢弃旧文件，把新文件缓存起来，并显示在浏览器中.
>
> 例如：If-Modified-Since: Thu, 09 Feb 2012 09:07:57 GMT

实例如下图

![img](https://piaosanlang.gitbooks.io/spiders/content/assets/import007.png)

- If-None-Match

> 作用: If-None-Match和ETag一起工作，工作原理是在HTTP Response中添加ETag信息。 当用户再次请求该资源时，将在HTTP Request 中加入If-None-Match信息(ETag的值)。如果服务器验证资源的ETag没有改变（该资源没有更新），将返回一个304状态告诉客户端使用本地缓存文件。否则将返回200状态和新的资源和Etag. 使用这样的机制将提高网站的性能
>
> 例如: If-None-Match: "03f2b33c0bfcc1:0"

实例如下图

![img](https://piaosanlang.gitbooks.io/spiders/content/assets/import009.png)

- Pragma

> 作用： 防止页面被缓存， 在HTTP/1.1版本中，它和Cache-Control:no-cache作用一模一样
>
> Pargma只有一个用法， 例如： Pragma: no-cache
>
> 注意: 在HTTP/1.0版本中，只实现了Pragema:no-cache, 没有实现Cache-Control

- Cache-Control

> 作用: 这个是非常重要的规则。 这个用来指定Response-Request遵循的缓存机制。各个指令含义如下
>
> Cache-Control:Public 可以被任何缓存所缓存（）
>
> Cache-Control:Private 内容只缓存到私有缓存中
>
> Cache-Control:no-cache 所有内容都不会被缓存

还有其他的一些用法， 我没搞懂其中的意思， 请大家参考其他的资料

#### Client 头域

![img](https://piaosanlang.gitbooks.io/spiders/content/assets/import0011.png)

- Accept

> ##### 作用： 浏览器端可以接受的媒体类型,
>
> 例如： Accept: text/html 代表浏览器可以接受服务器回发的类型为 text/html 也就是我们常说的html文档,
>
> 如果服务器无法返回text/html类型的数据,服务器应该返回一个406错误(non acceptable)
>
> 通配符 * 代表任意类型
>
> 例如 Accept: */* 代表浏览器可以处理所有类型,(一般浏览器发给服务器都是发这个)

- Accept-Encoding：

> 作用： 浏览器申明自己接收的编码方法，通常指定压缩方法，是否支持压缩，支持什么压缩方法（gzip，deflate），（注意：这不是只字符编码）;
>
> 例如： Accept-Encoding: gzip, deflate

- Accept-Language

> 作用： 浏览器申明自己接收的语言。
>
> 语言跟字符集的区别：中文是语言，中文有多种字符集，比如big5，gb2312，gbk等等；
>
> 例如： Accept-Language: en-us

- User-Agent

> 作用：告诉HTTP服务器， 客户端使用的操作系统和浏览器的名称和版本.
>
> 我们上网登陆论坛的时候，往往会看到一些欢迎信息，其中列出了你的操作系统的名称和版本，你所使用的浏览器的名称和版本，这往往让很多人感到很神奇，实际上，服务器应用程序就是从User-Agent这个请求报头域中获取到这些信息User-Agent请求报头域允许客户端将它的操作系统、浏览器和其它属性告诉服务器。
>
> 例如：User-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; CIBA; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET4.0C; InfoPath.2; .NET4.0E)

- Accept-Charset

> 作用：浏览器申明自己接收的字符集，这就是本文前面介绍的各种字符集和字符编码，如gb2312，utf-8（通常我们说Charset包括了相应的字符编码方案）

------

#### Cookie/Login 头域

Cookie:

作用： 最重要的header, 将cookie的值发送给HTTP 服务器

------

#### Entity头域

- Content-Length

> 作用：发送给HTTP服务器数据的长度。
>
> 例如： Content-Length: 38

- Content-Type

> 作用：
>
> 例如：Content-Type: application/x-www-form-urlencoded

------

#### Miscellaneous 头域

- Referer:

> 作用： 提供了Request的上下文信息的服务器，告诉服务器我是从哪个链接过来的，比如从我主页上链接到一个朋友那里，他的服务器就能够从HTTP Referer中统计出每天有多少用户点击我主页上的链接访问他的网站。
>
> 例如: Referer:http://translate.google.cn/?hl=zh-cn&tab=wT

------

#### Transport 头域

- Connection

> 例如：　Connection: keep-alive 当一个网页打开完成后，客户端和服务器之间用于传输HTTP数据的TCP连接不会关闭，如果客户端再次访问这个服务器上的网页，会继续使用这一条已经建立的连接
>
> 例如： Connection: close 代表一个Request完成后，客户端和服务器之间用于传输HTTP数据的TCP连接会关闭， 当客户端再次发送Request，需要重新建立TCP连接。

- Host（发送请求时，该报头域是必需的）

> 作用: 请求报头域主要用于指定被请求资源的Internet主机和端口号，它通常从HTTP URL中提取出来的
>
> 例如: 我们在浏览器中输入：http://www.guet.edu.cn/index.html
>
> 浏览器发送的请求消息中，就会包含Host请求报头域，如下：Host：[http://www.guet.edu.cn](http://www.guet.edu.cn/) 此处使用缺省端口号80，若指定了端口号，则变成：Host：指定端口号

------

## HTTP Response header

同样使用Fiddler 查看Response header, 点击Inspectors tab ->Response tab-> headers 如下图所示

![img](https://piaosanlang.gitbooks.io/spiders/content/assets/import0012.png)

我们也按照Fiddler那样把header 进行分类，这样比较清晰也容易记忆。

#### Cache头域

- Date

> 作用: 生成消息的具体时间和日期
>
> 例如：　Date: Sat, 11 Feb 2012 11:35:14 GMT

- Expires

> 作用: 浏览器会在指定过期时间内使用本地缓存
>
> 例如: Expires: Tue, 08 Feb 2022 11:35:14 GMT

- Vary

> 作用：要了解 Vary 的作用，先得了解 HTTP 的内容协商机制。有时候，同一个 URL 可以提供多份不同的文档，这就要求服务端和客户端之间有一个选择最合适版本的机制，这就是内容协商。
>
> 例如: Vary: Accept-Encoding

#### Cookie/Login 头域

- P3P

> 作用: 用于跨域设置Cookie, 这样可以解决iframe跨域访问cookie的问题
>
> 例如: P3P: CP=CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR

- Set-Cookie

> 作用： 非常重要的header, 用于把cookie 发送到客户端浏览器， 每一个写入cookie都会生成一个Set-Cookie.
>
> 例如: Set-Cookie: sc=4c31523a; path=/; domain=.acookie.taobao.com

![img](https://piaosanlang.gitbooks.io/spiders/content/assets/import0013.png)

#### Entity头域

- ETag

> 作用: 和If-None-Match 配合使用。 （实例请看上节中If-None-Match的实例）
>
> 例如: ETag: "03f2b33c0bfcc1:0"

- Last-Modified:

> 作用： 用于指示资源的最后修改日期和时间。（实例请看上节的If-Modified-Since的实例）
>
> 例如: Last-Modified: Wed, 21 Dec 2011 09:09:10 GMT

- Content-Type

> 作用：WEB服务器告诉浏览器自己响应的对象的类型和字符集,
>
> 例如:
>
> Content-Type: text/html; charset=utf-8
>
> Content-Type:text/html;charset=GB2312
>
> Content-Type: image/jpeg

- Content-Length

> 指明实体正文的长度，以字节方式存储的十进制数字来表示。在数据下行的过程中，Content-Length的方式要预先在服务器中缓存所有数据，然后所有数据再一股脑儿地发给客户端。
>
> 例如: Content-Length: 19847

- Content-Encoding

> WEB服务器表明自己使用了什么压缩方法（gzip，deflate）压缩响应中的对象。
>
> 例如：Content-Encoding：gzip

- Content-Language

> 作用： WEB服务器告诉浏览器自己响应的对象的语言者
>
> 例如： Content-Language:da

#### Miscellaneous 头域

- Server:

> 作用：指明HTTP服务器的软件信息
>
> 例如:Server: Microsoft-IIS/7.5

- X-AspNet-Version:

> 作用：如果网站是用ASP.NET开发的，这个header用来表示ASP.NET的版本
>
> 例如: X-AspNet-Version: 4.0.30319

- X-Powered-By:

> 作用：表示网站是用什么技术开发的
>
> 例如： X-Powered-By: ASP.NET

#### Transport头域

- Connection

> 例如：　Connection: keep-alive 当一个网页打开完成后，客户端和服务器之间用于传输HTTP数据的TCP连接不会关闭，如果客户端再次访问这个服务器上的网页，会继续使用这一条已经建立的连接
>
> 例如： Connection: close 代表一个Request完成后，客户端和服务器之间用于传输HTTP数据的TCP连接会关闭， 当客户端再次发送Request，需要重新建立TCP连接。

#### Location头域

- Location

> 作用： 用于重定向一个新的位置, 包含新的URL地址
>
> 实例请看304状态实例

------

## HTTP协议是无状态的和Connection: keep-alive的区别

无状态是指协议对于事务处理没有记忆能力，服务器不知道客户端是什么状态。从另一方面讲，打开一个服务器上的网页和你之前打开这个服务器上的网页之间没有任何联系

HTTP是一个无状态的面向连接的协议，无状态不代表HTTP不能保持TCP连接，更不能代表HTTP使用的是UDP协议（无连接）

从HTTP/1.1起，默认都开启了Keep-Alive，保持连接特性，简单地说，当一个网页打开完成后，客户端和服务器之间用于传输HTTP数据的TCP连接不会关闭，如果客户端再次访问这个服务器上的网页，会继续使用这一条已经建立的连接

Keep-Alive不会永久保持连接，它有一个保持时间，可以在不同的服务器软件（如Apache）中设定这个时间