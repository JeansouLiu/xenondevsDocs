# 安装 Nova

## 步骤 1: 安装插件

* 与其他插件一样, 从 [Hangar](https://hangar.papermc.io/xenondevs/Nova), [Modrinth](https://modrinth.com/plugin/nova-framework), [GitHub](https://github.com/xenondevs/Nova) 或 [Discord](https://discord.gg/hnEknVWvUe) 上下载的插件 jar 文件只需放在 ``plugins/`` 文件夹中即可.
* 启动服务器并等待 Nova 完成加载. (控制台消息 `[Nova] Done loading`). 此时后面会用到的配置文件及目录就创建好了.
* 关闭服务器.

!!! bug "**不要将扩展放在 plugins 文件夹下**"

    Nova 扩展与插件有着很大的不同，无法在 `plugins/` 目录下正常工作.  
    安装扩展的步骤见步骤 2.

## 步骤 2: 安装扩展

要安装一个扩展:

* 关闭服务器
* 将扩展 jar 文件放进 ``plugins/Nova/addons/``
* 启动服务器

新资源包将会自动生成, 但是暂时还没法发送给玩家.  
请使用步骤 3 提供的方法配置资源包托管源.

!!! info "注意"

    某些扩展可能会依赖于其他扩展。如果这种情况发生，插件会在控制台输出所缺的扩展: `Failed to initialize <扩展名>: Missing addon(s): <缺失的扩展>`

## 步骤 3: 配置资源包托管源

根据多人游戏资源包的工作原理，资源包必须先被上传至一个网站服务器才能发送给玩家.  
这可以自动完成也可以手动完成.

=== "资源包自动上传 (推荐)"

    当资源包改变时自动上传.
    你可以在 `plugins/Nova/configs/config.yml` 文件中的 `resource_pack` > `auto_upload` 设置项中进行配置.
    
    !!! info "可用的上传服务"
    
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
                service: self_host
                port: 12345 # Web 服务的端口
            ```
        
            !!! info "`host` 参数"
        
                你可以使用 `host` 参数来设置服务器的主机名. 如果没有设置, 将会使用您服务器的公网 IP.
                如果你的服务器仅对本机开放, 你需要设为 `host: 127.0.0.1`
        
            !!! warning "`append_port` 参数"
        
                当 `host` 被设置时, Nova 会认为端口不必再被加入主机名末尾.
                如果这不是你需要的情况, 设置 `append_port: true`.
    
        === "使用 Multipart 请求"
        
            对于高级用户, Nova 可以发送请求至你的服务器并解析服务器回应.
 
            示例: [php 上传脚本](https://gist.github.com/ByteZ1337/6582b8c31789602119c55770cb095455)
    
            ```yaml title="plugins/Nova/configs/config.yml"
            resource_pack:
              auto_upload:
                enabled: true
                service: custom_multi_part
                url: https://example.com/upload.php
                filePartName: pack
                extraParams:
                  key: "" # 此密钥需要与上方提及的 php 脚本中的密钥一致
            ```
        
        === "Amazon S3"
    
            如果你使用的是 Amazon S3, 你可以使用 S3 服务来上传资源包. **你需要开放 S3 容器的公开网络访问权限.**
    
            示例配置:
            
            ```yaml title="plugins/Nova/configs/config.yml"
            resource_pack:
              auto_upload:
                enabled: true
                service: amazon_s3
                endpoint: s3.amazonaws.com # 你的 S3 服务的 endpoint
                region: eu-central-1 # 你的 S3 服务的 endpoint 区域
                bucket: examplebucket # 你的 S3 容器的名称
                key_id: "" # 你的 S3 key id
                key_secret: "" # 你的 S3 key secret
            ```
    
        === "Oraxen"
    
            如果你的服务器安装了 Oraxen 插件, 你也可以使用 [Oraxen 插件配置文件中配置的](https://docs.oraxen.com/configuration/plugin-settings#upload) PolyMath 服务.
    
            示例配置:
            
            ```yaml title="plugins/Nova/configs/config.yml"
            resource_pack:
              auto_upload:
                enabled: true
                service: oraxen
            ```

=== "手动上传资源包"

    要手动上传资源包, 只需上传 ``plugins/Nova/resource_pack/ResourcePack.zip`` 即可.
    上传完后，在主配置文件 ``plugins/Nova/configs/config.yml`` 中的 ``resource_pack.url`` 下填写资源包链接即可:
    
    ```yaml title="plugins/Nova/configs/config.yml"
    resource_pack:
      url: https://example.com/resource_pack.zip
    ```
    
    !!! warning "请确保你填写的下载链接是**直链**"

        理论上链接应以 `.zip` 结尾，请确保不是各大网盘的分享链接.

    !!! bug "优先选择资源包自动上传"
    
        如果你选择手动上传资源包，你将需要在每次更新 Nova 及其扩展或是修改影响资源包生成的配置时重新上传资源包.
        **这也是为什么你应该优先选择资源包自动上传.**


## (可选) 资源包合并

此步骤仅在你的服务器同时存在其它资源包时进行.

由于 Minecraft 的限制, 一个服务器只能设置一个资源包.
但这个限制可以通过合并资源包来解决，而 Nova 就可以将自己的资源包和其他资源包进行合并.
另外, Nova 还会分析这些资源包并修改自身数据从而避免冲突.
**不要手动合并资源包或是使用其他插件的合并服务.**

插件提供了两种方法来指定要合并的资源包:  

=== "使用配置文件"

    1. 确保你关闭了另一个提供资源包的插件的资源包发送功能。
    2. 在 Nova 配置文件中的 `resource_pack` > `generation` > `base_packs` 设置待合并资源包路径。

        ```yaml title="plugins/Nova/configs/config.yml"
        resource_pack:
          generation:
            base_packs:
              - plugins/ItemsAdder/output/generated.zip
        ```

    3. 确保列出的资源包都已经被正确生成. (例如, ItemsAdder 需要使用 ``/iazip`` 指令来生成资源包.)
    4. 使用 `/nova reload configs` 指令重载配置或重启服务器.
    5. 使用 `/nova resourcePack create` 指令重新生成资源包.

=== "使用文件夹"

    1. 确保你关闭了另一个提供资源包的插件的资源包发送功能
    2. 将资源包复制到 `plugins/Nova/resource_pack/base_packs/`
    3. 使用 `/nova resourcePack create` 指令重新生成资源包.

!!! info "理论上你可以添加无限多的资源包."
