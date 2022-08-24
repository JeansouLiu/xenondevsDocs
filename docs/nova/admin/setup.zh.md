# 安装 Nova

## 步骤 1: 安装插件

* 与其他插件一样, 从 [SpigotMC](https://www.spigotmc.org/resources/93648/) 或 [Discord](https://discord.gg/hnEknVWvUe) 上下载的插件 jar 文件只需放在 ``plugins/`` 文件夹中即可.
* 启动服务器并等待 Nova 完成加载. (控制台消息 `[Nova] Done loading`). 此时后面会用到的配置文件及目录就创建好了.
* 关闭服务器.

!!! 警告

    Nova v0.9 于早期版本的 Nova 并不兼容. 如果你是从早期版本升级, 请确保删除了 ``plugins/Nova`` 目录并从世界中移除了所有 Nova 物品.

## 步骤 2: 上传资源包

根据自定义资源包的工作原理, 你需要将资源包上传才能提供给其他玩家使用.  
你可以手动或是自动完成这一步骤.

### 手动上传资源包

如果要手动上传资源包, 将 ``plugins/Nova/resource_pack/ResourcePack.zip`` 文件上传至云端.
之后将资源包的**直链**链接填入 ``plugins/Nova/configs/config.yml`` 中的 ``resource_pack.url``:

```yaml title="plugins/Nova/configs/config.yml"
resource_pack:
  url: https://example.com/resource_pack.zip
```

!!! 警告

    该链接必须为 **直链** 下载链接.

### 资源包自动上传

你也可以使用 Nova 内置的上传功能来自动上传资源包.  
你可以在 ``plugins/Nova/configs/config.yml`` 文件中的 ``resource_pack.auto_upload`` 项中设置自动上传.

目前有三种方式来配置自动上传:

!!! 关于 "可用的上传服务"

    === "Patreon 上传服务"
    
        [Patrons](https://www.patreon.com/xenondevs) 可以将资源包上传到我们的服务器上.
        由于服务器费用以及防止滥用, 此服务仅对 Patrons 开放.
    
        示例配置:
        ```yaml title="plugins/Nova/configs/config.yml"
        resource_pack:
          auto_upload:
            enabled: true
            service: xenondevs
            key: "" # 你的 Patreon-Uploader 密钥
        ```
    
    === "自行搭建 Web 服务"
    
        除非你能够在您的服务器上开放一个 Web 端口, 否则请忽略此方法.
        Nova 将启动一个 Web 服务器来提供资源包的下载.
    
        示例配置:
        ```yaml title="plugins/Nova/configs/config.yml"
        resource_pack:
          auto_upload:
            enabled: true
            service: SelfHost
            port: 12345 # Web 服务的端口
        ```
    
        !!! 关于 "'host' 参数"
    
            你可以使用 `host` 参数来设置服务器的主机名. 如果没有设置, 将会使用您服务器的公网 IP.
            如果你的服务器仅对局域网开放, 你需要设为 `host: 127.0.0.1`
    
        !!! 警告 "'portNeeded' 参数"
    
            当 `host` 被设置时, Nova 会认为端口不必再被加入主机名末尾.
            如果这不是你需要的情况, 设置 `portNeeded: true`.
    
    === "使用 Multipart Request (高级)"
    
        对于高级用户, Nova 可以发送请求至你的服务器并解析服务器回应.
    
        对于 [这个 php 脚本](https://gist.github.com/ByteZ1337/6582b8c31789602119c55770cb095455), 在 Nova 的配置文件中应这样配置:
        ```yaml title="plugins/Nova/configs/config.yml"
        resource_pack:
          auto_upload:
            enabled: true
            service: CustomMultiPart
            url: https://example.com/upload.php
            filePartName: pack
            extraparams:
              key: "" # 此密钥需要与上方提及的 php 脚本中的密钥一致
        ```
    
        如果你的上传服务返回的数据是另一种格式如 JSON, 你将需要设置 ``urlRegex`` 参数来匹配数据中的 url.
        例如, 如果服务器返回数据如下:
        ```json
        {
          "state": "success",
          "url": "https://example.com/ResourcePack.zip"
        }
        ```
        那么正则表达式可以为 ``"url": "([\w:/\.]*)``.

## Step 3: 安装扩展

如何安装一个扩展:

* 关闭服务器
* 将扩展放至 ``plugins/Nova/addons/`` 目录内
* 启动服务器

新的资源包将会自动生成.

!!! 注意

    某些扩展可能会依赖其它扩展. 如果此情况存在, 控制台中的报错信息会提示你缺少的扩展: `Failed to initialize <扩展名>: Missing addon(s): <缺失的扩展>`

## (可选) 资源包合并

**此步骤仅在你的服务器已经有一个自定义资源包时需要.**

由于 Minecraft 的机制, 一个服务器只能提供一个资源包. 为了解决这个问题, Nova 可以自动合并已经存在的资源包.  

目前, 有两种方法定义原资源包:  

=== "使用配置文件"

    * 确保你关闭了另一个提供资源包的插件的资源包发送功能
    * 在 Nova 配置文件中的 ``resource_pack.base_packs`` 设置原资源包路径

    示例:
    ```yaml title="plugins/Nova/configs/config.yml"
    resource_pack:
      base_packs:
        - plugins/ItemsAdder/data/resource_pack/pack.zip
    ```

    !!! 注释
    
        你可以添加更多资源包.
    
        **注意:** 在用 Nova 生成资源包之前, 确保列表中的资源包已被正确生成.
        例如, ItemsAdder 插件需要使用 ``/iazip`` 指令来生成资源包.

=== "使用文件夹"

    * 确保你关闭了另一个提供资源包的插件的资源包发送功能
    * 将资源包复制到 `plugins/Nova/resource_pack/base_packs/`

        !!! 注释
    
            你可以添加更多资源包.