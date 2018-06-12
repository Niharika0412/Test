package stepdefs;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class Login {



	@Given("^User is on Home Page$")
	public void userIsOnHomePage() throws Throwable {
		System.out.println("In Given");
	}
	
	@When("^User navigates to Login Page$")
	public void userNavigatesToLoginPage() throws Throwable {
		System.out.println("In When");
	}
	
	@And("^Enters Valid credentials$")
	public void entersValidCredentials() throws Throwable {
		System.out.println("In And");
	}

	@Then("^User navigates to landing page$")
	public void userNavigatesToLandingPage() throws Throwable {
		System.out.println("In Then");
	}
	
	@And("^welcome message displayed$")
	public void welcomeMessageDisplayed() throws Throwable {

		System.out.println("In AND");
	}

}
