如果你对逆向有所涉猎的话，可能听说过 Hook，利用 Hook 技术我们可以在某一逻辑的前后加入自定义的逻辑处理代码，几乎可以实现任意逻辑的修改。

在前面的 [JavaScript](https://so.csdn.net/so/search?from=pc_blog_highlight&q=JavaScript) 逆向实战课时我们也初步体会了 Hook 的功效，如果你对 Hook 的概念还不太了解，可以搜索一下“Hook 技术”相关的内容来了解下。

对于 App 来说，Hook 技术应用非常广泛。比如朋友圈微信步数的修改，其实就是通过 Hook 数据发送的方式实现步数的修改。比如处理安卓的 SSL Pining，用 Hook 技术也可以修改 SSL 证书校验结果，实现校验的绕过。对于 App 爬虫来说，我们也可以使用 Hook 一些关键的方法获取方法执行前后的结果，从而实现数据的截获。

那这些技术怎么来实现呢？这里就不得不提一个框架，叫作 Xposed。

## 1.Xposed 介绍

Xposed 框架（Xposed Framework）是一套开源的，在 Android 高权限模式下运行的框架服务，可以在不修改 App 源码的情况下影响程序运行（修改系统）的框架服务，基于它可以制作出许多功能强大的模块，且在功能不冲突的情况下同时运作。

Xposed 框架的原理是通过替换系统级别的 /system/bin/app_process 程序控制 zygote 进程，使得app_process 在启动过程中会加载 XposedBridge.jar 这个 jar 包，这个 jar 包里面定义了对系统方法、属性的一系列 Hook 操作，同时还提供了几个 Hook API 供我们编写 Xposed 模块来使用。我们编写一个 Xposed 模块时，引用 Xposed 提供的几个 Hook 方法就可以实现对系统级别任意方法和属性的修改了。

这么说可能有点抽象，下面我们来编写一个 Xposed 模块带你体会一下 Xposed 的用法，最后再使用 Xposed 来实现一个真实 App 执行逻辑的修改。

## 2.本节要求

由于 Xposed 是运行在 Android 平台上的，所以本节我们的环境就和 Android 相关。

开始学习本节课之前，需要做如下准备工作：

配置好 Android 开发环境，开发环境的搭建流程可以参考下面的几个链接：

- https://juejin.im/post/5d255101e51d4556d86c7b4f
- https://juejin.im/post/5d5eb3ed5188252ae10be138

准备一个已经 ROOT 的安卓设备并连接好 PC，可以使用虚拟机或真机，比如我使用的是虚拟机网易 Mumu，已经自带了 ROOT 功能，当然如果你有已经 ROOT 的真机也是可以的。

安装好 jadx、jadx-gui，这是一款用来反编译 apk 的软件，安装参考链接见：https://github.com/skylot/jadx。

准备好了如上环境之后，我们就开始 Xposed 模块的编写吧。

## 3.Xposed Installer 安装

有了如上的环境后，首先我们需要先安装 Xposed。

要安装 Xposed 我们需要借助于一个叫作 Xposed Installer 的 App，它就是用来安装 Xposed 框架的，利用它我们可以下载和安装 Xposed 框架，同时还能查看和管理 Xposed 模块，还能查看一些 Xposed 框架输出的日志信息等。

**怎么安装呢？**

我们可以先打开 Xposed 的官网 https://repo.xposed.info/module/de.robv.android.xposed.installer，然后就可以看到一些有关 Xposed 的提示信息。

这里提示了这么一条重要信息：

> For Android 5.0 or higher (Lollipop/Marshmallow), these versions don’t
> work! Use this instead:
> http://forum.xda-developers.com/showthread.php?t=3034811

很明显，如果你的手机安卓版本在 5.0 以下，可以直接点击首页下方的 apk 下载，如果是 5.0 或更高版本，那么就到 http://forum.xda-developers.com/showthread.php?t=3034811 这个链接下载，后者的下载的真实链接是 https://forum.xda-developers.com/attachment.php?attachmentid=4393082&d=1516301692，可以直接点击下载。

注意：由于时间上的变化，下载地址以官方介绍为准。

下载完成之后会得到一个 apk 文件，我们可以直接在真机或模拟机上安装。
安装完成之后便会出现这样的一个图标：

![2 (2)](img/2 (2).png)

这就代表 Xposed Installer 已经安装成功了。

下面我们打开它，它可能会提示需要 ROOT 权限，授予即可。

其实本质上来说，它就是一个安卓 App，开发一个 Xposed 模块其实流程上就和开发一个安卓 App 差不多，只不过相比 App 开发来说多了下面四个步骤：

- 这个 App 里面要加上一些标识，标明这个 App 是一个 Xposed 模块，以便安装之后 Xposed 框架可以识别出来。
- 这个 App 里面需要引入 Xposed 的 jar 包，从而能实现 Hook 操作。
- App 里面定义一些 Hook 操作，可以对本 App 或其他的 App 的逻辑进行修改。
- 定义完这些 Hook 操作逻辑之后，还需要告诉 Xposed 框架哪些是我们自己定义的 Hook 操作逻辑，以便 Xposed 执行这些 Hook 逻辑。
  就这么四步，这四步这么来实现呢，下面我们来一步步实现。

具体操作看视频讲解