## 如何兼容 Oraxen

要使 Oraxen 和 Nova 共同工作, 你需要完成一下步骤:

1. 在 Oraxen 的 `settings.yml` 修改以下设置:
    - 将 `Pack` > `upload` > `enabled` 设为 `false`
    - 将 `Pack`> `dispatch` 中的 `send_pack` 和 `send_on_reload` 设为 `false`
2. 在 Nova 的主配置文件中将 Oraxen 资源包设为[待合并资源包](../setup.md#_3).
3. 使用 `/nova resourcePack create` 指令重新生成 Nova 的资源包 (请先执行 `/o reload pack` 来确保资源包存在)

## 使用 Oraxen 的上传服务

你可以使用 Oraxen 的上传服务来自动上传资源包.  
[资源包托管 - 可用的上传服务](../setup.md#__tabbed_1_5)

## 已知问题

* 重复且错误的方块音效