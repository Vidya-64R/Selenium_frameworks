package StepDefinitions;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import POM.Myntra_login_page;
import generic.BrowserFactory;
import generic.FileManager;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Steps1 {
	WebDriver driver;
	FileManager fm=new FileManager();
	BrowserFactory bff=new BrowserFactory();
	Myntra_login_page lp;
	
	@Before(order=0) //global hooks
	public void Setup()
	{
		//driver=new BrowserFactory().getBrowser("chrome");
		driver=bff.getBrowser("chrome");
		driver.get(fm.getApplicationUrl());
		driver.manage().timeouts().implicitlyWait(fm.getImplicityWait(), TimeUnit.SECONDS);
		lp=new Myntra_login_page(driver);
	}
	
	@After(order=0)
	public void tearDown(Scenario scenario)
	{
		if(scenario.isFailed())
		{
			System.out.println();
			TakesScreenshot ts = (TakesScreenshot) driver;
			//System.out.println("take screenshot");
			byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
			
			scenario.embed(screenshot, "image/png", scenario.getName());
		}
		driver.quit();
	}
	
	@Before("@regression or @ft")
	public void mobileSetup()
	{
		System.out.println("excecute in mobile environment");
	}
	
	@After("@regression or @ft")
	public void mobiletearDown()
	{
		System.out.println("close the mobile environment");
	}
	@Given("user is on Login page")
	public void user_is_on_Login_page() {
	System.out.println("user is on ");	
	}
	
	@Given("clicks on Profile icon")
	public void clicks_on_Profile_icon() {
		//driver.findElement(By.xpath("//span[.='Profile']")).click();
		lp.clickprofile();
		}

	@When("user clicks on login button")
	public void user_clicks_on_login_button() throws InterruptedException {
		 //driver.findElement(By.xpath("//a[.='log in']")).click();
		 lp.clickloginbutton();
	}

	@When("user enters {string} and {string}")
	public void user_enters_and(String emailid, String password)  {
		//driver.findElement(By.xpath("//input[@class='login-user-input-email login-user-input']")).sendKeys(emailid);
    	//driver.findElement(By.xpath("//input[@class='login-user-input-password login-user-input']")).sendKeys(password);
        lp.setusername(emailid);
        lp.setpassword(password);
	}

	@When("clicks on login button")
	public void clicks_on_login_button() {
		//driver.findElement(By.xpath("//button[.='Log in']")).click();   
		lp.clicklogin();
		
	}

	@Then("verify home page is displayed {string}")
	public void verify_home_page_is_displayed(String expected_result)  {
		lp.verifyTitle(10, "Login");
		String atitle=driver.getTitle();
	    Assert.assertEquals(expected_result,atitle);
	    driver.close();
	}
	
	@When("user enters valid Email id {string} and valid Password {string}")
	public void user_enters_valid_Email_id_and_valid_Password(String email, String pwd) throws InterruptedException {
		//driver.findElement(By.xpath("//input[@class='login-user-input-email login-user-input']")).sendKeys(email);
    	//driver.findElement(By.xpath("//input[@class='login-user-input-password login-user-input']")).sendKeys(pwd);
   
    	lp.setusername(email);
    	lp.setpassword(pwd);
    	
	}

	@Then("home page should be displayed")
	public void home_page_should_be_displayed() {
		lp.verifyTitle(10, "1234");
	   String atitle=driver.getTitle();
	   Assert.assertEquals("Login",atitle);
	   driver.close();
	}

	@Given("user is on home page")
	public void user_is_on_home_page() {
	    System.out.println("user is on home page");
	}
	@When("user search for product")
	public void user_search_for_product(io.cucumber.datatable.DataTable dataTable) {
	    List<Map<String,String>> data=dataTable.asMaps(String.class, String.class);
	    String val=data.get(2).get("product");
	    String val1=data.get(2).get("quantity");
	    System.out.println(val+"-"+val1);
	}

	@Then("product page should be displayed")
	public void product_page_should_be_displayed() {
	   System.out.println("product page is displayed");
	}

	}



