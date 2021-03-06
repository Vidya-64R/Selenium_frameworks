package generic;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;



public abstract class Base_Page {
	public WebDriver driver;
	
	public Base_Page(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}

	public void verifyTitle(int seconds,String title)
	{
		WebDriverWait wait=new WebDriverWait(driver, seconds);
		
		try
		{
			wait.until(ExpectedConditions.titleContains(title));
			//Reporter.log("title displayed",true);
			System.out.println("title displayed");
		}
		catch(Exception e)
		{
			System.out.println("title displayed");
		  Assert.fail();
		}
	}
	
	public void verifyElement(int seconds,WebElement element)
	{
		WebDriverWait wait=new WebDriverWait(driver, seconds);
		
		try
		{
			wait.until(ExpectedConditions.visibilityOf(element));
			//Reporter.log("Element found",true);
			System.out.println("Element found");
		}
		catch(Exception e)
		{
			System.out.println("Element found");
		Assert.fail();
		}
	}
	

	
}
