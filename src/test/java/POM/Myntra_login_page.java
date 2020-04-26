package POM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import generic.Base_Page;

public class Myntra_login_page extends Base_Page {
	@FindBy(xpath="//span[.='Profile']")
	private WebElement profileicon;
	
	@FindBy(xpath="//a[.='log in']")
	private WebElement loginbutton;
	
	@FindBy(xpath="//input[@class='login-user-input-email login-user-input']")
    private WebElement email;
	
	@FindBy(xpath="//input[@class='login-user-input-password login-user-input']")
	private WebElement pwd;
	
	@FindBy(xpath="//button[.='Log in']")
	private WebElement log;
	
	public Myntra_login_page(WebDriver driver)
	{
		super(driver);
	}
	
	
	
	public void clickprofile()
	{
		profileicon.click();
	}
	public void clickloginbutton()
	{
		loginbutton.click();
	}
    public void setusername(String username)
    {
      email.sendKeys(username);	
      }
    
    public void setpassword(String password)
    {
      pwd.sendKeys(password);	
      }
    public void clicklogin()
    {
      log.click();	
      }
    public void verifyerrmsg()
    {
      log.click();	
      }
}

