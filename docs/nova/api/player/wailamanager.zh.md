# Waila 管理器

Waila 管理器用于控制玩家高亮信息显示的开/关.

=== "Kotlin"

    ```kotlin
    // 获取当前状态
    val enabled = wailaManager.getState(player)

    // 启用高亮信息显示
    wailaManager.setState(player, true)
    // 关闭高亮信息显示
    wailaManager.setState(player, false)
    ```

=== "Java"

    ```java
    // 获取当前状态
    boolean enabled = wailaManager.getState(player);

    // 启用高亮信息显示
    wailaManager.setState(player, true);
    // 关闭高亮信息显示
    wailaManager.setState(player, false);
    ```