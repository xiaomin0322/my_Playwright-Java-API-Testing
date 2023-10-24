package com.qa.api.tests.browser;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class PlaywrightExample {
	public static void main(String[] args) {
		try (Playwright playwright = Playwright.create()) {
			Browser browser = playwright.chromium().launch();
			BrowserContext context = browser.newContext();
			Page page = context.newPage();

			// 执行JavaScript代码
			Object o = page.evaluate("console.log('Hello, Playwright!')");
           System.out.println(o);    
           o = page.evaluate("var a = 222; return a;");
           System.out.println(o);   
			// 关闭Page、BrowserContext和Playwright实例
			page.close();
			context.close();
			browser.close();
		}
	}
}
