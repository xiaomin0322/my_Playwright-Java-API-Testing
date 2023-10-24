package com.qa.api.tests.browser;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import com.microsoft.playwright.*;

public class MovieExample {
	public static void main(String[] args) {
		try (Playwright playwright = Playwright.create()) {
			Browser browser = playwright.chromium().launch();
			Page page = browser.newPage();
			page.waitForTimeout(60000);
			// 设置路由处理程序
			//page.route("**/js/chunk-10192a00.243cb8b7.js",
			//page.route("/js/chunk-10192a00.243cb8b7.js",
			//https://spa2.scrape.center/js/chunk-10192a00.243cb8b7.js
			page.route("**/js/chunk-10192a00.243cb8b7.js",
			//page.route("**/*",	
					route -> {
				// 获取请求的URL
				String url = route.request().url();
				System.out.println("load url : " +url);
				// 如果是要替换的JS文件，则重定向到本地文件
				if (url.contains("chunk-10192a00.243cb8b7.js")) {
					//String filePath = Paths.get("js/movie.js").toUri().toString();
					try {
						//byte[] fileContent = Files.readAllBytes(Paths.get(filePath));
						//route.fulfill(new Route.FulfillOptions().setBodyBytes(fileContent));
						Path fileContent=Paths.get("js/movie.js");
						route.fulfill(new Route.FulfillOptions().setPath(fileContent));
						System.out.println(url+" is FulfillOptions>>>>>>>>>>");
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			});
			page.navigate("https://spa2.scrape.center/page/1");
			System.out.println(page.title());
			System.out.println(getToken(page, 3));
			req(page, playwright);
		   
		}
	}
	
	public static void req(Page page,Playwright playwright) {
		 int maxPage = 5;
		 int LIMIT = 10;
		 APIRequest request =  playwright.request();
		 for(int i=0;i<=maxPage;i++) {
			 int offset = i * LIMIT;
			 APIRequestContext newContext = request.newContext();
			 String token = getToken(page, offset);
			 String url="https://spa2.scrape.center/api/movie/?limit="+LIMIT+"&offset="+offset+"&token="+token;
			 APIResponse apiResponse =  newContext.get(url);
			 System.out.println("url>>>>>>>>:"+url);
			 System.out.println(apiResponse.status());
			 System.out.println(apiResponse.text());
			 try {
				Thread.sleep(100);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		 }
		
	}
	
	public static String  getToken(Page page,int offset) {
		long s = System.currentTimeMillis();
		Object result = page.evaluate("() => { return window.encrypt('/api/movie',"+offset+")}");
		long e = System.currentTimeMillis();
		System.out.println("getToken time>>>>>>>>>>>>>>>>>"+(e-s));
		return (String)result;
	}
}
