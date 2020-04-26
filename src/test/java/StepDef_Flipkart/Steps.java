package StepDef_Flipkart;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Steps {
	WebDriver driver;
	
	@Given("user is on Login page")
	public void user_is_on_Login_page() {
	    System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.get("https://www.flipkart.com");
	}
	@Given("user clicks on Login button1")
	public void user_clicks_on_Login_button1() {
	    driver.findElement(By.xpath("//a[.='Login']"));
	}

	    @When("user enters valid Username {string} and password {string}")
	    public void user_enters_valid_Username_and_password(String email, String password) throws InterruptedException {
	    	System.out.println(email+" "+password);
	    	driver.findElement(By.xpath("//input[@class='_2zrpKA _1dBPDZ']")).sendKeys(email);
	    	driver.findElement(By.xpath("//input[@class='_2zrpKA _3v41xv _1dBPDZ']")).sendKeys(password);
	    	Thread.sleep(2000);
	    	
	    }

	        @When("clicks on Login button2")
	        public void clicks_on_Login_button2() {
	            driver.findElement(By.xpath("//button[@class='_2AkmmA _1LctnI _7UHT_c']")).click();
	}

	

	@Then("message displayed login successfully")
	public void message_displayed_login_successfully() throws InterruptedException {
	    Thread.sleep(2000);
	    System.out.println(driver.getTitle());
	    driver.close();
	}
	
	@When("user enters invalid Username {string} and password {string}")
	public void user_enters_invalid_Username_and_password(String email, String password) {
		driver.findElement(By.xpath("//input[@class='_2zrpKA _1dBPDZ']")).sendKeys(email);
    	driver.findElement(By.xpath("//input[@class='_2zrpKA _3v41xv _1dBPDZ']")).sendKeys(password);  
	}

	@Then("error message should be dispalyed")
	public void error_message_should_be_dispalyed() throws InterruptedException {
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("(//span[.=\"Please enter valid Email ID/Mobile number\"])[1]")).isDisplayed();
	    driver.close();
	}


}
