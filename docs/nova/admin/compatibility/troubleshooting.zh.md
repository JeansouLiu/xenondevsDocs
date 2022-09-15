# 疑难解答

## 固体方块

如果你服务器上有其他插件在提供非基于盔甲架的方块 (如音符盒、蘑菇), 它们或许会与 Nova 冲突. 如果你是这种情况, 你可能需要禁用 Nova 的固体方块.

### 禁用固体方块

1. 将 `plugins/Nova/configs/config.yml` 中的 `use_solid_blocks` 设为 `false`
2. 重载配置或重启服务器
3. 使用 `/nova resourcePack create` 指令重新生成资源包
4. 重启服务器

### 重新启用固体方块

1. 将 `plugins/Nova/configs/config.yml` 中的 `use_solid_blocks` 设为 `true`
2. 重载配置或重启服务器
3. 使用 `/nova resourcePack create` 指令重新生成资源包
4. 执行 `/nova debug updateChunkSearchId` 指令
5. 重启服务器

### 为什么最好不要禁用固体方块?

固体方块相比盔甲架方块更节约服务器资源, 且客户端可以将它们渲染为方块而不是实体. 这应该被列为解决问题的最后方案.