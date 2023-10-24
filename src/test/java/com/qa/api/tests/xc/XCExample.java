package com.qa.api.tests.xc;

import java.nio.file.Path;
import java.nio.file.Paths;

import com.microsoft.playwright.APIRequest;
import com.microsoft.playwright.APIRequestContext;
import com.microsoft.playwright.APIResponse;
import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import com.microsoft.playwright.Route;
import com.microsoft.playwright.options.RequestOptions;

public class XCExample {
	public static void main(String[] args) {
	  req();
	}
	
	public static void execute() {
		try (Playwright playwright = Playwright.create()) {
			Browser browser = playwright.chromium().launch();
			Page page = browser.newPage();
			page.waitForTimeout(60000);
			// 设置路由处理程序
			//page.route("**/js/chunk-10192a00.243cb8b7.js",
			//page.route("/js/chunk-10192a00.243cb8b7.js",
			//https://spa2.scrape.center/js/chunk-10192a00.243cb8b7.js
			//https://bd-s.tripcdn.cn/modules/flight/swift-taro/_next/static/chunks/8046-c5f7704af0423ae4.js
			page.route("**/flight/swift-taro/_next/static/chunks/8046-c5f7704af0423ae4.js",
			//page.route("**/*",	
					route -> {
				// 获取请求的URL
				String url = route.request().url();
				System.out.println("load url : " +url);
				// 如果是要替换的JS文件，则重定向到本地文件
				if (url.contains("8046-c5f7704af0423ae4.js")) {
					//String filePath = Paths.get("js/movie.js").toUri().toString();
					try {
						//byte[] fileContent = Files.readAllBytes(Paths.get(filePath));
						//route.fulfill(new Route.FulfillOptions().setBodyBytes(fileContent));
						Path fileContent=Paths.get("js/xc/rs.js");
						route.fulfill(new Route.FulfillOptions().setPath(fileContent));
						System.out.println(url+" is FulfillOptions>>>>>>>>>>");
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			});
			page.navigate("https://m.ctrip.com/html5/flight/taro/first?from=inner");
			System.out.println(page.title());
			System.out.println("token==="+getToken(page));
			//req(page, playwright);
		   
		}
	}
	
	public static void req() {
		    Playwright playwright;
		    APIRequest request;
		    APIRequestContext requestContext;
		    
		    playwright = Playwright.create();
	        request =  playwright.request();
	        requestContext = request.newContext();
		    // APIRequest request =  playwright.request();
			// APIRequestContext newContext = request.newContext();
			// String token = getToken(page);
			 String url="https://m.ctrip.com/restapi/soa2/14488/flightList?subEnv=fat128";
			 String data = "{\"data\":\"{\\\"searchParameter\\\":{\\\"searchFlightItems\\\":[{\\\"departureCode\\\":\\\"BJS\\\",\\\"arrivalCode\\\":\\\"SHA\\\",\\\"departureDate\\\":\\\"2023-10-24\\\"}],\\\"tripType\\\":\\\"ONE_WAY\\\",\\\"regionType\\\":\\\"DOMESTIC\\\",\\\"passengers\\\":{\\\"ADULT\\\":1,\\\"CHILD\\\":0,\\\"INFANT\\\":0}}}\",\"head\":{\"cid\":\"09031078115557524768\",\"ctok\":\"\",\"cver\":\"\",\"syscode\":\"09\",\"sid\":\"8888\",\"lang\":\"01\",\"auth\":\"\",\"extension\":[{\"name\":\"Flt_SubChannel\",\"value\":\"\"},{\"name\":\"mystery\",\"value\":\"MDkwMzEwNzgxMTU1NTc1MjQ3NjgueyJzZWFyY2hQYXJhbWV0ZXIiOnsic2VhcmNo\"},{\"name\":\"sessionId\",\"value\":\"525a386-e028-480c-8449-72987a153ca6\"},{\"name\":\"pageName\",\"value\":\"FIRST\"},{\"name\":\"aId\",\"value\":\"4897\"},{\"name\":\"sId\",\"value\":\"353693\"},{\"name\":\"ouId\",\"value\":\"\"},{\"name\":\"sourceId\",\"value\":\"55551825\"},{\"name\":\"exmktID\",\"value\":\"\"},{\"name\":\"env\",\"value\":\"h5\"},{\"name\":\"version\",\"value\":\"2023.08.24\"},{\"name\":\"platform.source\",\"value\":\"H5\"},{\"name\":\"flt_app_session_transactionId\",\"value\":\"ecea22c8-51c3-4e20-ac47-0336dc2912c6\"},{\"name\":\"aid\",\"value\":\"4897\"},{\"name\":\"sid\",\"value\":\"353693\"},{\"name\":\"protocal\",\"value\":\"https\"}]}}";
			 APIResponse apiResponse = requestContext.post("https://m.ctrip.com/restapi/soa2/14488/flightList?subEnv=fat128",
					    RequestOptions.create()
					        .setHeader("authority", "m.ctrip.com")
					        .setHeader("accept", "*/*")
					        .setHeader("accept-language", "zh-CN,zh;q=0.9")
					        .setHeader("content-type", "application/json")
					        .setHeader("cookie", "_abtest_userid=4a0d74ea-de52-43f1-bf11-4d5525d601ed; GUID=09031078115557524768; UBT_VID=1698114910438.115tdcv; _RF1=180.167.93.237; _RSG=NTqSIfAV2j3Hu5CoXjN7tA; _RDG=285402c97fa6b62d723dbbbe6f6bd79036; _RGUID=3b427caa-5273-4757-adc7-5ed872305e11; Union=OUID=index&AllianceID=4897&SID=155952&SourceID=&createtime=1698138670&Expires=1698743469848; MKT_OrderClick=ASID=4897155952&AID=4897&CSID=155952&OUID=index&CT=1698138669851&CURL=https%3A%2F%2Fwww.ctrip.com%2F%3Fsid%3D155952%26allianceid%3D4897%26ouid%3Dindex&VAL={}; MKT_CKID=1698138673194.4gb19.kbk2; MKT_CKID_LMT=1698138673195; _jzqco=%7C%7C%7C%7C1698138673399%7C1.846355870.1698138673182.1698138673182.1698138673183.1698138673182.1698138673183.0.0.0.1.1; _bfaStatusPVSend=1; MKT_Pagesource=PC; _bfi=p1%3D102001%26p2%3D0%26v1%3D1%26v2%3D0; _bfaStatus=success; _ubtstatus=%7B%22vid%22%3A%221698114910438.115tdcv%22%2C%22sid%22%3A2%2C%22pvid%22%3A3%2C%22pid%22%3A%22101023%22%7D; nfes_isSupportWebP=1; FlightIntl=Search=[%22ACX|%E5%85%B4%E4%B9%89(ACX)|1139|ACX|480%22%2C%22ZUH|%E7%8F%A0%E6%B5%B7(ZUH)|31|ZUH|480%22%2C%222023-10-28%22]; _bfa=1.1698114910438.115tdcv.1.1698139784725.1698141098047.2.17.10320643125")
					        .setHeader("origin", "https://m.ctrip.com")
					        .setHeader("referer", "https://m.ctrip.com/html5/flight/taro/first?from=inner")
					        .setHeader("sec-ch-ua", "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"")
					        .setHeader("sec-ch-ua-mobile", "?0")
					        .setHeader("sec-ch-ua-platform", "\"Windows\"")
					        .setHeader("sec-fetch-dest", "empty")
					        .setHeader("sec-fetch-mode", "cors")
					        .setHeader("sec-fetch-site", "same-origin")
					       // .setHeader("token", "1001-h5common-blFxLHJDlYdFyldWscRM1KgkycAykbvszwfswnmjhtJL6wbmRlBjH8xH0ydMwQaw4giH3Y97WL4EHAjQ6JFaiGQJtUygFvMhjTpv0dRsNydNIm0yF3wgYBdWPLW00xhdRcSw5PvO6jNfRZ5ELtRG6E9AYOQiHmYGNj9dEcJHOic1KAYhcW3TwbdR8QwsgIXzY5Y3bJFQeQmJLQRQlw15vmsjFpRDtR0hE4ZvbzR0qWfoEa4ipnjHBI0PRc6RbSJsbjg6yMbwGUxf3R1lIXlwqYUMrlwLHKAdwOQR4cwU6v8Zyazyk5E8gRbpen1vo8ilLEd6E5HeO9EbawTovO6JQse7kEqgv4NycOEgnelFRbXvclWkcigmy3dEUZEp1JsUjMUvOHJ8zJsLx6GrcOJpY61ymzYaSJ0Lr9miFlrdbeZpWzFWcOE4crQOJP7ILqWdrPyckvU3e5ZYT8yoOi1HK4OyOrAQWs9w8rXaRpSW5HIdhWl1KqrSovh9ePkY06wLUE9FKTr1OesZwdLEoj8rHaYD7ETgE5sWNfjDqvtpjH1JH0eoAeAUjnArtfJqFinmymcI5hidTwUrDyMheQPvqAwLlrhnIbbKtrN1WFAeD3r1GjTrPsjZdjT6wm0rs8imjor3gEF5KTtw7Li8ARhGjq1rfgRO5Rs7wAUITUW3gIagWZ3I0mWLrtFJq8EQgvo4EFpwLaecfrbkJzbihXyQfI35ibzwfBJsEdOWMYUDwkfiGcW6QwkLEcQYTLwGhEO0JfsY9zwNzWHXY4LyPYA7KSOR5Sv7cYTZEfTePhiUhenYFMwq7j1bxNHvzse5UYb0iSQY4hKUorFQrcYokezpxSsj1Be7FEbfjdtW7Be46Isnj0YMtRDdR7AWc8rMHKZbeaPEPmWoDyXhy76RbY8drkTEZOYTqROUisNwcawX8eTmy3sw1DjdsR01RX8yLYdJP3RblEh4RtpimZw7PwA3ec4yBZYa7jUkjzcefD")
					        .setHeader("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36")
					        .setData(data)
					        );
			 
			 System.out.println("url>>>>>>>>:"+url);
			 System.out.println(apiResponse.status());
			 System.out.println(apiResponse.text());
		
	}
	
	public static String  getToken(Page page) {
		
		String r = "{\r\n" + 
				"    \"data\": \"{\\\"searchParameter\\\":{\\\"searchFlightItems\\\":[{\\\"departureCode\\\":\\\"BJS\\\",\\\"arrivalCode\\\":\\\"SHA\\\",\\\"departureDate\\\":\\\"2023-10-25\\\"}],\\\"tripType\\\":\\\"ONE_WAY\\\",\\\"regionType\\\":\\\"DOMESTIC\\\",\\\"passengers\\\":{\\\"ADULT\\\":1,\\\"CHILD\\\":0,\\\"INFANT\\\":0}}}\",\r\n" + 
				"    \"head\": {\r\n" + 
				"        \"auth\": \"\",\r\n" + 
				"        \"cver\": \"\",\r\n" + 
				"        \"extension\": [\r\n" + 
				"            {\r\n" + 
				"                \"name\": \"Flt_SubChannel\",\r\n" + 
				"                \"value\": \"\"\r\n" + 
				"            },\r\n" + 
				"            {\r\n" + 
				"                \"name\": \"mystery\",\r\n" + 
				"                \"value\": \"MDkwMzEwNzgxMTU1NTc1MjQ3NjgueyJzZWFyY2hQYXJhbWV0ZXIiOnsic2VhcmNo\"\r\n" + 
				"            },\r\n" + 
				"            {\r\n" + 
				"                \"name\": \"sessionId\",\r\n" + 
				"                \"value\": \"525a386-e028-480c-8449-72987a153ca6\"\r\n" + 
				"            },\r\n" + 
				"            {\r\n" + 
				"                \"name\": \"pageName\",\r\n" + 
				"                \"value\": \"FIRST\"\r\n" + 
				"            },\r\n" + 
				"            {\r\n" + 
				"                \"name\": \"aId\",\r\n" + 
				"                \"value\": \"4897\"\r\n" + 
				"            },\r\n" + 
				"            {\r\n" + 
				"                \"name\": \"sId\",\r\n" + 
				"                \"value\": \"353693\"\r\n" + 
				"            },\r\n" + 
				"            {\r\n" + 
				"                \"name\": \"ouId\",\r\n" + 
				"                \"value\": \"\"\r\n" + 
				"            },\r\n" + 
				"            {\r\n" + 
				"                \"name\": \"sourceId\",\r\n" + 
				"                \"value\": \"55551825\"\r\n" + 
				"            },\r\n" + 
				"            {\r\n" + 
				"                \"name\": \"exmktID\",\r\n" + 
				"                \"value\": \"\"\r\n" + 
				"            },\r\n" + 
				"            {\r\n" + 
				"                \"name\": \"env\",\r\n" + 
				"                \"value\": \"h5\"\r\n" + 
				"            },\r\n" + 
				"            {\r\n" + 
				"                \"name\": \"version\",\r\n" + 
				"                \"value\": \"2023.08.24\"\r\n" + 
				"            },\r\n" + 
				"            {\r\n" + 
				"                \"name\": \"platform.source\",\r\n" + 
				"                \"value\": \"H5\"\r\n" + 
				"            },\r\n" + 
				"            {\r\n" + 
				"                \"name\": \"flt_app_session_transactionId\",\r\n" + 
				"                \"value\": \"ecea22c8-51c3-4e20-ac47-0336dc2912c6\"\r\n" + 
				"            }\r\n" + 
				"        ]\r\n" + 
				"    }\r\n" + 
				"}";
		
		long s = System.currentTimeMillis();
		Object result = page.evaluate("() => { return window.encrypt("+r+")}");
		long e = System.currentTimeMillis();
		System.out.println("getToken time>>>>>>>>>>>>>>>>>"+(e-s));
		return (String)result;
	}
}
