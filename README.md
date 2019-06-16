
# Test Overview 
**You will have 48 hours after you fork this repo to complete the assessment. Although this should be easy to accomplish for any senior developer, a timeline is implemented to assess your time management skills. If you need more time please reach out to me at +1 (303) 513-5571 at your convenience.**

As you are well aware, while working remote, the expectation would be for you to code based on our experiences and ideas. This is not an easy task to accomplish. To begin, it is necessary to evaluate if you have the ability to take our ideas and put them into best coding practices. 

This is a test to determine how well you can create code from a concept. **Utilize whatever free tier technologies you wish, but please ensure the same technologies will be applied on the larger project. Any JavaScript written should utilize ES6+ features**. Please be aware of licensing terms if using npm packages, this is simply best practice for any developer.   


## Core Task Overviews
### Auth Task Overview
For this task, you are to give the web app the ability to sign up users using either their Google account or creating one from a manual entry form. We want you to create a basic landing page with a working authentication. It is recommended to use OAuth 2.0 as we will be working with Google API's in the long run for this app and want to make sure you have a working knowledge of how to integrate tokens and sessions into the architecture. Create a new Gmail account for this task with John/Jane Doe information. This is to protect your privacy.
### API Task Overview
Another key point to this test, is for you to demonstrate the ability to create API routes that retrieve, push, and manipulate data from an http or preferably https address via that specific API call. This API does not require security for this test, just an open channel to grab generic information. The information that must be returned from the API call to the DB are name, DOB, email, and last login. Once the data is returned, either render the information or log it in the console.

### Bonus Reporting Task
If you completed the tasks described in this assessment and still have some spare time before the deadline, please try to utilize the included sales_data.csv to be entered into your DB. The real task will be to run reports on this data to see if you have an effective way to grab and process data from DB call.

# Guidelines
Once again, you may use whatever stack of free tier technologies you wish in conjunction with React to complete this test, but the stack must be what you will use to work on the larger project.

**Do not build an easy app just to satisfy the needs of this simple app. 
Think about the app we discussed, and try to create this app in a similar environment.**
### Test Guidelines: Auth Task
 You may use create-react-app or self made templates at your disposal to complete this task. 
 **No purchased templates will be allowed.**
   * You must be able to create, sign in, and sign out an account.
  * You must be able to create 2 accounts to push to your DB: 
    * One user-created with Google sign up.
    * Another user-created from the manual entry form with a non-Gmail address.
  * Once successfully logged in you should have a generic page indicating a successful log in and "console.log('Auth Task Complete');" in your code.
  * Next, you should be able to click a sign out button/link to end the user session, returning the user to the landing page. 
  * That is all that is needed for this task.
 
### Test Guidelines: API Task
 This task is to make sure you have a solid background in API construction.
  
  * Have an API call to handle a GET request for all the consumers you signed up in your DB earlier. It needs to return the name, DOB, email, and last login.
  * The returned results need to be console logged or displayed on a web page.
  * Address should be something intuitive like https://{yourHostedAddress}/api/consumers/all.
  * The next step will be to have an API call to get one of the user's information using URL parameters.
  * Address should be something intuitive like https://{yourHostedAddress}/api/consumers/${id}.
  * That is all that is needed for this task.
 
### Test Guidelines: Bonus Reporting Task
  This task is to show an understanding of reporting functions using DB information.

 * Upload sample data from CVS into your desired DB of choice.
 * Create simple buttons on a page for each report that runs the reporting script onclick. Results can be console logged.
 * Run a report to find who the largest buyer is based off of total invoice price with the result being similar to an array of client objects. In descending order, include the client name and totalPriceInvoiced.
 * Run a report to find who the largest buyer is based off of total sent units with the result being similar to an array of client objects. In descending order, include the client name and totalUnitsInvoiced.
 * That is all that is needed for this task.
### Test Guidelines: Completion
* Your completed code should be pushed up to a personal repo and inside a properly labeled branch.   Example: CIS_Test_-_Development
* Your code should also be hosted somewhere even if it is on its own github page, but the code must be hosted.
* If you are unable to host your own demo website, please contact me as there are a number of ways to do this for free.
* Once everything is completed, please inform me via email you have completed the assessment, along with all URL's for both the API and hosted website.

# Reminders
Do not worry about writing perfect code (if such a thing exists) this test is more to see what coding practices you normally use while dealing with a deadline and a given concept.

We are looking for React knowledge and skills of the senior level. If possible, we want to see the use of the new webhooks and/or the use of Redux for state management, if applicable. With this project we expect the developer to have a handle on new styling trends such as sidebar navigation or infinity scroll. Please put your best foot forward as you approach this assessment.

Once we have reviewed your code, we will contact you regarding feedback and next steps. If you do not hear from us within one to two business days, please reach out to confirm we have received your completed assessment.