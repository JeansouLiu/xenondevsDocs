# Nova 材料

``NovaMaterial`` 是 Nova 物品和方块的材料类 (material class).

## 通过名字获得 ``NovaMaterial``

要获得一个 ``NovaMaterial`` 首先需要使用[之前获取的 Nova 实例](../index.md)来取得 ``NovaMaterialRegistry``.

=== "Kotlin"

    ```kotlin
    val materialRegistry = Nova.materialRegistry
    ```

=== "Java"

    ```java
    NovaMaterialRegistry materialRegistry = nova.getMaterialRegistry(); // (1)!
    ```

    1. "nova" 是之前获取的 Nova 实例, 默认存储在一个字段或变量中.<br>你也可以调用 ``Nova.getNova().getMaterialRegistry()``

使用完此注册语句, 现在可以通过 ID 来获取一个 ``NovaMaterial``. ID 需要使用类似 ``namespace:name`` 的格式.

=== "Kotlin"

    ```kotlin
    val material = materialRegistry.get("nova:wrench") // (1)!
    ```

    1. 如果材料无法找到，将抛出一个异常. <del>上面的扳手一定是存在的啦.</del><br>如果你不确定或是在使用用户输入请使用 ``getOrNull``.

=== "Java"

    ```java
    NovaMaterial material = materialRegistry.get("nova:wrench"); // (1)!
    ```

    1. 如果材料无法找到，将抛出一个异常. <del>上面的扳手一定是存在的啦.</del><br>如果你不确定或是在使用用户输入请使用 ``getOrNull``.


!!! info "提示"

    该方法同样适用于从一组 ``ItemStack`` 中获取 ``NovaMaterial``.

如果你想要用某个名称来获取所有的材料而忽略材料的命名空间, 可以这样做:

=== "Kotlin"

    ```kotlin
    val materials = materialRegistry.getNonNamespaced("wrench")
    ```

=== "Java"

    ```java
    List<NovaMaterial> materials = materialRegistry.getNonNamespaced("wrench");
    ```

## 获取一个材料的 ID

``nova:wrench`` 的一个示例:

=== "Kotlin"

    ```kotlin
    val id = material.id
    
    val namespace = id.namespace // "nova"
    val name = id.name // "wrench"
    val idString = id.toString() // "nova:wrench"
    ```

=== "Java"

    ```java
    NamespacedId id = material.getId();

    String namespace = id.getNamespace(); // "nova"
    String name = id.getName(); // "wrench"
    String idString = id.toString(); // "nova:wrench"
    ```

## 获取材料的翻译名

Nova 使用资源包来提供客户端物品翻译. 但是, 如果你仍然需要获得材料的翻译名, 
你可以使用 ``NovaMaterial.getLocalizedName(locale)``. locale 是你想获得的翻译的语言代码.
语言代码可在此处查找: [语言](https://wiki.biligame.com/mc/%E8%AF%AD%E8%A8%80).

!!! info "提示"

    如果指定的语言代码不存在或无效, 则将返回该材料的英语名称.

``nova:wrench`` 的示例:

=== "Kotlin"

    ```kotlin
    val name = material.getLocalizedName("de_de") // "Schraubenschlüssel"
    ```

=== "Java"

    ```java
    String name = material.getLocalizedName("de_de"); // "Schraubenschlüssel"
    ```