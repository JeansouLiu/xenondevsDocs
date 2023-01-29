## 如何兼容 ItemsAdder

要使 ItemsAdder 和 Nova 一起工作, 你需要这样做:

1. 在 ItemsAdder `config.yml` 中修改这些值:
    - 设置 `resource_pack.hosting.no-host.enabled` 为 `true` (所有有关 hosting 的选项都设为 `false`).
    - 设置 `resource_pack.zip.protect-file-from-unzip.enabled` 为 `false`
2. 将 ItemsAdder 的资源包作为配置文件中的[待合并资源包](../setup.md#_3).
3. 使用 `/nova resourcePack create` 指令重新生成 Nova 的资源包 (请先执行 `/iazip` 来确保资源包存在)

## 当为 ItemsAdder 添加新元素时

在新元素添加到 ItemsAdder 并执行 `/iazip` 后, 你还需执行 `/nova resourcePack create` 命令.

## 已知问题

* [ItemsAdder-2043](https://github.com/PluginBugs/Issues-ItemsAdder/issues/2043): ItemsAdder 干扰 Nova 的方块状态
  (这是 ItemsAdder 的问题, 请不要向我们反馈)