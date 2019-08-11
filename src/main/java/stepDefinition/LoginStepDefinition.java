package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDefinition {

	WebDriver driver;

	@Given("^user is already on login page$")
	public void user_is_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver",
				"D:\\seleniumtrainingbyJitendra\\downloads\\java11\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://linkedin.com");
	}
	
	@When("^title of login page is LinkedIn$")
	public void title_of_login_page_is_LinkedIn() {
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("LinkedIn: Log In or Sign Up", title);
	}
//	@Then("^user enters user name and password$")
//	public void user_enters_user_name_and_password() {
//		driver.findElement(By.xpath("//input[@aria-label='Type your email or phone number']"))
//		.sendKeys("murali.p83@gmail.com");
//		driver.findElement(By.xpath("//input[@type='password']")).sendKeys("Kanathil@123");
//	}

	@Then("^user enters \"(.*)\" and \"(.*)\"")
	public void user_enters_user_name_and_password(String username,String password) {
//		driver.findElement(By.xpath("//input[@aria-label='Type your email or phone number']"))
//		.sendKeys("murali.p83@gmail.com");
		driver.findElement(By.xpath("//input[@aria-label='Type your email or phone number']"))
		.sendKeys(username);
//		driver.findElement(By.xpath("//input[@type='password']")).sendKeys("Kanathil@123");
		driver.findElement(By.xpath("//input[@type='password']")).sendKeys(password);
	}
	
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button()  {
		driver.findElement(By.xpath("//button[@data-tracking-control-name='guest_homepage-basic_sign-in-submit-btn']")).click();
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page()  {
		String title2= driver.getTitle();
		System.out.println("the title is " +title2);
		Assert.assertEquals("(1) LinkedIn", title2);
	}
	

}
