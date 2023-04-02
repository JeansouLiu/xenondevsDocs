# TileEntityBreakBlockEvent

``TileEntityBreakBlockEvent`` 事件会在方块实体破坏方块时被调用. 该事件可用于控制被破坏方块的掉落物.

!!! warning "注意"

    此事件不可被取消. 详见[保护](../protection/protectionintegration.md)章节.

## 属性

### 方块实体

破坏方块的 ``TileEntity``.

### 方块

被破坏的 ``Block``.

### 掉落物

放进方块实体背包中的一个 ``MutableList`` of ``ItemStacks`` (如果背包满了则在地面生成掉落物). 通过编辑此列表来修改掉落物.

## 示例

### 泥土掉落燧石

用方块实体破坏泥土方块时有 25% 的概率掉落一个燧石.

=== "Kotlin"

    ```kotlin
    @EventHandler
    fun handleBlockBreak(event: TileEntityBreakBlockEvent) {
        if (event.block.type == Material.DIRT
            && Random.nextInt(0, 100) <= 25  // 25% 的概率
        ) {
            event.drops.add(ItemStack(Material.FLINT, 1)) // 在掉落物中添加燧石
        }
    }
    ```

=== "Java"

    ```java
    @EventHandler
    public void handleBlockBreak(TileEntityBreakBlockEvent event) {
        if (event.getBlock().getType() == Material.DIRT
            && random.nextInt(100) <= 25 // 25% 的概率
        ) {
            List<ItemStack> drops = event.getDrops();
            drops.add(new ItemStack(Material.FLINT, 1)); // 在掉落物中添加燧石
            event.setDrops(drops);
        }
    }
    ```