``NovaItem`` 代表物品类型. 它与 Bukkit 中的 ``Material`` 相似, 但是只可用于物品.

## 通过名称获取 ``NovaItem``

要获得 ``NovaItem`` 首先需要通过使用[之前获取的 Nova 实例](../index.md) 来获得 ``NovaItemRegistry``.

=== "Kotlin"

    ```kotlin
    val itemRegistry = Nova.itemRegistry
    ```

=== "Java"

    ```java
    NovaItemRegistry itemRegistry = nova.getItemRegistry(); // (1)!
    ```

    1. "nova" 是之前获取的 Nova 实例, 通常存储在一个字段或变量中.<br>也可以使用 ``Nova.getNova().getItemRegistry()`` 来调用

通过使用这个注册表, 可以获得 ID 对应的 ``NovaItem``. 格式如下: ``namespace:name``.

=== "Kotlin"

    ```kotlin
    val item = itemRegistry.get("nova:wrench") // (1)!
    ```

    1. 如果该物品不存在，将会抛出报错. 当然, 此示例中的扳手肯定是存在的.<br>如果你不确定或者在使用用户输入，则应该使用 ``getOrNull``.

=== "Java"

    ```java
    NovaItem item = itemRegistry.get("nova:wrench"); // (1)!
    ```

    1. 如果该物品不存在，将会抛出报错. 当然, 此示例中的扳手肯定是存在的.<br>如果你不确定或者在使用用户输入，则应该使用 ``getOrNull``.


!!! info "提示"

    该方法同样适用于从 ``ItemStack`` 中获取 ``NovaItem``.

如果你要使用名称来检索所有物品而忽略命名空间, 可以这样做:

=== "Kotlin"

    ```kotlin
    val items = itemRegistry.getNonNamespaced("wrench")
    ```

=== "Java"

    ```java
    List<NovaItem> items = itemRegistry.getNonNamespaced("wrench");
    ```

## 获取物品 ID

``nova:wrench`` 的例子:

=== "Kotlin"

    ```kotlin
    val id = item.id
    
    val namespace = id.namespace // "nova"
    val name = id.name // "wrench"
    val idString = id.toString() // "nova:wrench"
    ```

=== "Java"

    ```java
    NamespacedId id = item.getId();

    String namespace = id.getNamespace(); // "nova"
    String name = id.getName(); // "wrench"
    String idString = id.toString(); // "nova:wrench"
    ```

## 获取物品的本土化名称

Nova 使用资源包来为客户端提供翻译. 如果你需要获取一个物品的本土化名称, 可以使用 ``NovaItem.getLocalizedName(locale)``. 将 locale 替换为你想要获取的本土化名称的语言代码.
语言代码可在这里查找：[语言](https://wiki.biligame.com/mc/%E8%AF%AD%E8%A8%80).

!!! info "提示"

    如果给定的语言代码不存在或无效, 将会返回物品的英语名称.

``nova:wrench`` 的示例:

=== "Kotlin"

    ```kotlin
    val name = item.getLocalizedName("de_de") // "Schraubenschlüssel"
    ```

=== "Java"

    ```java
    String name = item.getLocalizedName("de_de"); // "Schraubenschlüssel"
    ```