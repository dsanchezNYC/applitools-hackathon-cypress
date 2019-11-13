# Applitools Hackathon - Cypress Tests 

Cypress tests created for the Applitools Visual AI Rockstar Hackthon 11/2019. [See full details at here](https://applitools.com/hackathon-instructions).

***

# Table of Contents

* [Getting Started](#getting-started)
* [Pre-Requisites](#pre-req)
* [Installing & Running Tests](#install)
* [Built With](#built)
* [Author](#author)
* [Acknowledgements](#ack)

***

## <a name="getting-started"></a>Getting Started

This test suite is split in to two test files:

1. TraditionalTests.js - Contains five (5) 'traditional' tests, validated via Cypress assertions.
2. VisualAITests.js - Contains five (5) visual AI tests, validated via visual assertions in Applitools Eyes UI. 

### <a name="pre-req"></a>Pre-Requisites

* Experience with Cypress
* Experience with VS Code
* Applitools Eyes user account connected to team: Applitools Hackathon 2019.

### <a name="install"></a>Installing & Running Tests

1. Clone the repo to your local machine.
2. Open project using VS Code.
3. In terminal, navigate to project folder, enter command "npx cypress install --force".
4. In terminal, navigate to project folder, enter command "npx cypress open".
5. In terminal, navigate to project folder, "export APPLITOOLS_API_KEY='3NrJB25IVoPS1k85TXUb102qACnCac93iYpjAX8E3E8sw110'" (Mac) or "set APPLITOOLS_API_KEY='3NrJB25IVoPS1k85TXUb102qACnCac93iYpjAX8E3E8sw110'" (Windows)
6. From Cypress UI, click either TraditionalTests or VisualAITests. At this point the tests will execute via Cypress UI in Chrome browser. 
7. To view visual test results/screenshots, log in to [Applitools eyes](https://eyes.applitools.com/).

## <a name="built"></a>Built With

* [Cypress IO](https://www.cypress.io/) - Testing framework
* [Applitools Eyes](https://applitools.com/blog/applitools-eyes-introduction-to-automated-visual-ui-testing) - Visual testing tool 

## <a name="author"></a>Author

* **Daniel Sanchez** - *Applitools Hackathon* - [Daniel Sanchez NYC](https://github.com/dsanchezNYC)

# <a name="ack"></a>Acknowledgments

* Shout out my coworker Dmitry Rybalchenko.
* Shout out Applitools, Angie Jones and whole Applitools team for putting this together.
* The Test Automation University from Applitools + the Cypress course by Gil. 