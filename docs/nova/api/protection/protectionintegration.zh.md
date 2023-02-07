# 保护

如果想要让一个插件提供自定义保护功能, 则可以通过实现 
``ProtectionIntegration`` 接口来完成. 此接口提供了几个被
``ProtectionManager`` 调用的方法.

如果你需要一些使用此接口的示例, 可以看一下我们的
[内置保护支持](https://github.com/xenondevs/Nova/tree/main/nova/src/main/kotlin/xyz/xenondevs/nova/integration/protection/plugin).

一旦实现了该接口, 则可以使用 ``Nova.registerProtectionIntegration(ProtectionIntegration)`` 来注册它.
