package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"C:/Users/hp/eclipse-workspace/CucumberBDDBasics/src/main/java/Features/loginExampleskeyword.feature"},
	//	glue= {"C:\\Users\\hp\\eclipse-workspace\\CucumberBDDBasics\\src\\main\\java\\stepDefinition\\LoginStepDefinition.java"},
		glue= {"stepDefinition"},
		dryRun=false,
		monochrome=true,
		strict=true,
		plugin= {"pretty","html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"})

public class TestRunner {
	

}

