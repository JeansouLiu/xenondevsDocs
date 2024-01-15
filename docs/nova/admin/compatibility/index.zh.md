## 兼容的服务端

Nova 是一个 Paper 插件，建议在 Paper 服务端或基于 Paper 的服务端上运行. 目前支持的服务端有:

* [x] [Paper](https://github.com/PaperMC/Paper) (推荐)
* [x] [Purpur](https://github.com/PurpurMC/Purpur)
* [x] [Pufferfish](https://github.com/pufferfish-gg/Pufferfish)

其它服务端都或多或少与 Nova 不兼容.

我们正在计划兼容以下服务端:

* [Folia](https://github.com/PaperMC/Folia)

## 插件兼容性

### 自定义物品插件

打勾的插件为完全兼容的插件 (它们的物品可以被用在配方中, 它们的方块可被机器破坏等)  
未打勾的插件为部分兼容, 某些功能可能不会正常工作.

- [x] [ItemsAdder](itemsadder.md) | [已知问题](itemsadder.md#known-issues)
- [x] [Oraxen](oraxen.md) | [已知问题](oraxen.md#known-issues)
- [ ] MMOItems

即将兼容:

* [粘液科技](utp.md)
* [Space](utp.md)

!!! warning "警告"

    这里的大多数插件都需要[合并资源包](../setup.md#_3).  
    你可能也需要阅读[疑难解答页面](troubleshooting.md).

### 保护类插件

以下插件已经完全兼容, 插件开发者可以参考[这个 API](../../api/protection/protectionintegration.md) 来让自己的插件兼容 Nova.

- [x] WorldGuard
- [x] GriefPrevention
- [x] PlotSquared
- [x] Towny
- [x] ProtectionStones
- [x] QuickShop
- [x] Residence