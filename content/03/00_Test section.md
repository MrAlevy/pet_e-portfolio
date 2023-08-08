# Paragraph example

TODO:

-   screen shrink headers adjustments
-   header anchors
-   navigation and/or current section indicator
-   collapse/expand sections?

</br>

Hello!
</br>

This is a paragraph. First line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A lot of text here. Second line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Third line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a paragraph. First line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A lot of text here. Second line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Third line. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
A lot of text here. Second line.
Third line.
This is a paragraph. First line.
A lot of text here. Second line.
Third line.
</br>

Something _important_ and **bold**.
</br>

# List and table examples

List

-   Item 1
-   Item 2
-   Item 3

</br>

Table
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1 | Cell 2 |
| Cell 3 | Cell 4 |

</br>

# Diagram and code examples

Mermaid diagram

<pre class="mermaid flex justify-center mb-5">
graph LR
  Start --> Stop
  Start --> A
  A --> B
  B --> Stop
  A --> C
  C --> Stop
</pre>

This is an inline code example. You can run `println!("Hello world!");` in Rust.
</br>

Fibonacci sequence

```typescript
function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

</br>

SQL query example

```sql
SELECT * FROM table
WHERE column_1 = 'value' AND column_2 = 'value2'
LIMIT 10;
```
