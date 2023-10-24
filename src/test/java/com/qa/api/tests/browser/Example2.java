package com.qa.api.tests.browser;

import java.util.HashMap;
import java.util.Map;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import com.microsoft.playwright.options.ColorScheme;

public class Example2 {
  public static void main(String[] args) {
		Map<String,String> map = new HashMap();
        //跳过下载浏览器，因为公司是内网，这个配置很重要
        //map.put("PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD", "1");
        //跳过下载浏览器后配置浏览器位置
        //map.put("PLAYWRIGHT_BROWSERS_PATH", "D:\\pw-browsers\\ms-playwright");
        Playwright playwright = Playwright.create(new Playwright.CreateOptions().setEnv(map));
        Browser browser = playwright.chromium().launch(
                new BrowserType.LaunchOptions().setHeadless(false) //取消无头模式，我们才能看见浏览器操作
                        .setSlowMo(100) //减慢执行速度，以免太快
                        .setDevtools(true)); //打开浏览器开发者工具，默认不打开
//        Browser browser = playwright.chromium().launch();
        BrowserContext browserContext = browser.newContext(
                new Browser.NewContextOptions().setColorScheme(ColorScheme.DARK) //设置浏览器主题，chromium设置了dark好像没用
                .setViewportSize(1000, 500) //设置浏览器打开后窗口大小
        );
        Page page = browserContext.newPage();
        page.navigate("http://www.baidu.com");

        page.pause();//暂停脚本

  }
}
