**此教程对新手并不友好! 制作 Nova 扩展需要很多 Kotlin、Spigot API、Maven 以及 Gradle 相关的知识.**

## 准备工作

### IntelliJ

虽然 Eclipse 可以通过安装插件来支持 Kotlin, 但是我们还是建议使用 [IntelliJ](https://www.jetbrains.com/idea/) 来制作扩展.

### GitHub

此教程使用了一个 GitHub 仓库模板，因此建议你有一个 GitHub 账号。如果你不想使用 git 指令的话，可以安装 [GitHub 桌面版](https://desktop.github.com/).

### 代码样式

你可以在[这里](https://github.com/xenondevs/Nova/blob/main/codestyle.xml)找到 xenondevs 的代码样式文件. 打开 Intellij 设置并参考下图导入代码样式文件:

![导入代码样式](https://pic.ziyuan.wang/user/guest/2024/01/Snipaste_2024-01-15_17-51-07_6dc736f44ac47.png)

## 创建项目

使用[这里](https://github.com/xenondevs/Nova-Addon-Template/generate)扩展模板创建一个新仓库.
创建完成后, 修改以下文件:

### src/main/kotlin

设置你自己的包名.

### settings.gradle.kts

修改 `rootProject.name` 为你的扩展 ID.

### build.gradle.kts

修改 `group` 为你的团队名称.  
修改 `version` 为你的版本号.

在 `addon` 中, 设置 `main` 中的主类名称.

## 添加依赖

如果你的扩展需要其它依赖项，请使用 `nova` 语句配置:

```kotlin title="build.gradle.kts dependencies { }"
nova("commons-net:commons-net:3.8.0")
```

## 编译

运行以下代码来编译：
```bash title="使用 Gradle 编译"
gradlew addonJar -PoutDir="<扩展目录路径>"
```
如果你用的是 mojang-mapped 服务端, 使用以下指令：
```bash title="使用 Gradle 编译"
gradlew addonJar -PoutDir="<扩展目录路径>" -Pmojang-mapped
```

## 启用开发模式

添加 `-DNovaDev` 命令即可启用开发模式.  
此模式会关闭一些限制, 比如阻止重载、服务器启动时的加入事件、或是使用版本不匹配的扩展.

## KDoc

Nova 的 KDoc 可在[这里](https://nova.dokka.xenondevs.xyz/)查看.