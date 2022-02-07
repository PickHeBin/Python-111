使用 Pyppeteer 针对之前的 Selenium 案例做一次改写，来体会一下二者的不同之处，同时也加强一下对 Pyppeteer 的理解和掌握情况。

还是 Selenium 的那个案例，地址为：https://dynamic2.scrape.cuiqingcai.com/

爬取目标和那一节也是一样的：

- 遍历每一页列表页，然后获取每部电影详情页的 URL。
- 爬取每部电影的详情页，然后提取其名称、评分、类别、封面、简介等信息。
- 爬取到的数据存为 JSON 文件。

要求和之前也是一样的，只不过我们这里的实现就全用 Pyppeteer 来做了。

- 安装好 Python （最低为 Python 3.6）版本，并能成功运行 Python 程序。
- 安装好 Pyppeteer 并能成功运行示例。

其他的浏览器、驱动配置就不需要了，这也是相比 Selenium 更加方便的地方。

页面分析在这里就不多介绍了，还是列表页 + 详情页的结构，具体可以参考 Selenium 那一课时的内容。

## 爬取列表页

首先我们先做一些准备工作，定义一些基础的配置，包括日志定义、变量等等并引入一些必要的包，代码如下：

```python
import logging
logging.basicConfig(level=logging.INFO,
                   format='%(asctime)s - %(levelname)s: %(message)s')
INDEX_URL = 'https://dynamic2.scrape.cuiqingcai.com/page/{page}'
TIMEOUT = 10
TOTAL_PAGE = 10
WINDOW_WIDTH, WINDOW_HEIGHT = 1366, 768
HEADLESS = False
```

这里大多数的配置和之前是一样的，不过这里我们额外定义了窗口的宽高信息，这里定义为 1366 x 768，你也可以随意指定适合自己屏幕的宽高信息。另外这里定义了一个变量 HEADLESS，用来指定是否启用 Pyppeteer 的无头模式，如果为 False，那么启动 Pyppeteer 的时候就会弹出一个 Chromium 浏览器窗口。

接着我们再定义一个初始化 Pyppeteer 的方法，包括启动 Pyppeteer，新建一个页面选项卡，设置窗口大小等操作，代码实现如下：

```python
from pyppeteer import launch
browser, tab = None, None
async def init():
   global browser, tab
   browser = await launch(headless=HEADLESS,
                          args=['--disable-infobars',
                                f'--window-size={WINDOW_WIDTH},{WINDOW_HEIGHT}'])
   tab = await browser.newPage()
   await tab.setViewport({'width': WINDOW_WIDTH, 'height': WINDOW_HEIGHT})
```

在这里我们先声明了一个 browser 对象，代表 Pyppeteer 所用的浏览器对象，tab 代表新建的页面选项卡，这里把两项设置为全局变量，方便其他的方法调用。

另外定义了一个 init 方法，调用了 Pyppeteer 的 launch 方法，传入了 headless 为 HEADLESS，将其设置为非无头模式，另外还通过 args 指定了隐藏提示条并设定了窗口的宽高。

接下来我们像之前一样，定义一个通用的爬取方法，代码如下：

```python
from pyppeteer.errors import TimeoutError
async def scrape_page(url, selector):
   logging.info('scraping %s', url)
   try:
       await tab.goto(url)
       await tab.waitForSelector(selector, options={
           'timeout': TIMEOUT * 1000
       })
   except TimeoutError:
       logging.error('error occurred while scraping %s', url, exc_info=True)
```

这里我们定义了一个 scrape_page 方法，它接收两个参数，一个是 url，代表要爬取的链接，使用 goto 方法调用即可；另外一个是 selector，即要等待渲染出的节点对应的 CSS 选择器，这里我们使用 waitForSelector 方法并传入了 selector，并通过 options 指定了最长等待时间。

这样的话在运行时页面会首先访问这个 URL，然后等待某个符合 selector 的节点加载出来，最长等待 10 秒，如果 10 秒内加载出来了，那就接着往下执行，否则抛出异常，捕获 TimeoutError 并输出错误日志。

接下来，我们就实现一下爬取列表页的方法，代码实现如下：

```python
async def scrape_index(page):
   url = INDEX_URL.format(page=page)
   await scrape_page(url, '.item .name')
```

这里我们定义了 scrape_index 方法来爬取页面，其接受一个参数 page，代表要爬取的页码，这里我们首先通过 INDEX_URL 构造了列表页的 URL，然后调用 scrape_page 方法传入了 url 和要等待加载的选择器。

好，接下来我们可以再定义一个解析列表页的方法，提取出每部电影的详情页 URL，定义如下：

```python
async def parse_index():
   return await tab.querySelectorAllEval('.item .name', 'nodes => nodes.map(node => node.href)')
```

这里我们调用了 querySelectorAllEval 方法，它接收两个参数，第一个参数是 selector，代表要选择的节点对应的 CSS 选择器；第二个参数是 pageFunction，代表的是要执行的 JavaScript 方法，这里需要传入的是一段 JavaScript 字符串，整个方法的作用是选择 selector 对应的节点，然后对这些节点通过 pageFunction 定义的逻辑抽取出对应的结果并返回。

所以这里第一个参数 selector 就传入电影名称对应的节点，其实是超链接 a 节点。由于提取结果有多个，所以这里 JavaScript 对应的 pageFunction 输入参数就是 nodes，输出结果是调用了 map 方法得到每个 node，然后调用 node 的 href 属性即可。这样返回结果就是当前列表页的所有电影的详情页 URL 组成的列表了。

好，接下来我们来串联调用一下看看，代码实现如下：

```python
import asyncio
async def main():
   await init()
   try:
       for page in range(1, TOTAL_PAGE + 1):
           await scrape_index(page)
           detail_urls = await parse_index()
           logging.info('detail_urls %s', detail_urls)
   finally:
       await browser.close()
if __name__ == '__main__':
   asyncio.get_event_loop().run_until_complete(main())
```

## 爬取详情页

拿到详情页的 URL 之后，下一步就是爬取每一个详情页然后提取信息了，首先我们定义一个爬取详情页的方法，代码如下：

```python
async def scrape_detail(url):
   await scrape_page(url, 'h2')
```

如果顺利运行，那么当前 Pyppeteer 就已经成功加载出详情页了，下一步就是提取里面的信息了。

接下来我们再定义一个提取详情信息的方法，代码如下：

```python
async def parse_detail():
   url = tab.url
   name = await tab.querySelectorEval('h2', 'node => node.innerText')
   categories = await tab.querySelectorAllEval('.categories button span', 'nodes => nodes.map(node => node.innerText)')
   cover = await tab.querySelectorEval('.cover', 'node => node.src')
   score = await tab.querySelectorEval('.score', 'node => node.innerText')
   drama = await tab.querySelectorEval('.drama p', 'node => node.innerText')
   return {
       'url': url,
       'name': name,
       'categories': categories,
       'cover': cover,
       'score': score,
       'drama': drama
   }
```

这里我们定义了一个 parse_detail 方法，提取了 URL、名称、类别、封面、分数、简介等内容，提取方式如下：

- URL：直接调用 tab 对象的 url 属性即可获取当前页面的 URL。
- 名称：由于名称只有一个节点，所以这里我们调用了 querySelectorEval 方法来提取，而不是querySelectorAllEval，第一个参数传入 h2，提取到了名称对应的节点，然后第二个参数传入提取的 pageFunction，调用了 node 的 innerText 属性提取了文本值，即电影名称。
- 类别：类别有多个，所以我们这里调用了 querySelectorAllEval 方法来提取，其对应的 CSS 选择器为 .categories button span，可以选中多个类别节点。接下来还是像之前提取详情页 URL 一样，pageFunction 使用 nodes 参数，然后调用 map 方法提取 node 的 innerText 就得到所有类别结果了。
- 封面：同样地，可以使用 CSS 选择器 .cover 直接获取封面对应的节点，但是由于其封面的 URL 对应的是 src 这个属性，所以这里提取的是 src 属性。
- 分数：分数对应的 CSS 选择器为 .score ，类似的原理，提取 node 的 innerText 即可。
- 简介：同样可以使用 CSS 选择器 .drama p 直接获取简介对应的节点，然后调用 innerText 属性提取文本即可。

最后我们将提取结果汇总成一个字典然后返回即可。

接下来 main 方法里面，我们增加 scrape_detail 和 parse_detail 方法的调用，main 方法改写如下：

```python
async def main():
   await init()
   try:
       for page in range(1, TOTAL_PAGE + 1):
           await scrape_index(page)
           detail_urls = await parse_index()
           for detail_url in detail_urls:
               await scrape_detail(detail_url)
               detail_data = await parse_detail()
               logging.info('data %s', detail_data)
   finally:
       await browser.close()
```

## 数据存储

最后，我们再像之前一样添加一个数据存储的方法，为了方便，这里还是保存为 JSON 文本文件，实现如下：

```python
import json
from os import makedirs
from os.path import exists
RESULTS_DIR = 'results'
exists(RESULTS_DIR) or makedirs(RESULTS_DIR)
async def save_data(data):
   name = data.get('name')
   data_path = f'{RESULTS_DIR}/{name}.json'
   json.dump(data, open(data_path, 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
```

## 问题排查

在运行过程中，由于 Pyppeteer 本身实现的原因，可能连续运行 20 秒之后控制台就会出现如下错误：

```python
pyppeteer.errors.NetworkError: Protocol Error (Runtime.evaluate): Session closed. Most likely the page has been closed.
```

## 无头模式

最后如果代码能稳定运行了，我们可以将其改为无头模式，将 HEADLESS 修改为 True 即可，这样在运行的时候就不会弹出浏览器窗口了。