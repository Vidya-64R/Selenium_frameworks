package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

	@RunWith(Cucumber.class)
	@CucumberOptions(features="src/test/resources/Login_myntra.feature",
	glue= {"StepDefinitions"},
	tags= {"@smoke"},
	strict=true,
	dryRun=false,
	monochrome=true,
	plugin= {"pretty","de.monochromata.cucumber.report.PrettyReports:target/cucumber"})
	//plugin= {"pretty","html:reports/test-report"})
	public class TestRunner 
	{
	}

