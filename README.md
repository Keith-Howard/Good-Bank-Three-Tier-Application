# Good-Bank-Three-Tier-Application

This Application was written for a MIT Assignment. Intended to convert a front end banking application that used a single page application format and convert it to a three tier app. This project can be used as an example for someone who is looking for a pretty simple way of implementing a three tier app, with some authentication and authorization. 

# Installation Guidelines
1. In VS Code create a file directory for your project
2. Fork the Repo to your GitHub
3. Clone the Repo to your local machine
4. In your terminal run NPM Init -y to generate Node application for your app with default settings
5. Download the source files and move them to the directory you created
6. Run NPM install so that all of the packages in the Packages.json file are installed
7. Download Studio 3T for MongoDB and Docker and start them
8. Run node index.js in the terminal to start the server and then go to the port that the console log directs you to

![myimage](/homeScreenB4Login.jpg?raw=true)
![homeScreenB4Login](https://user-images.githubusercontent.com/54951171/191431464-fe479ec7-0025-4ebd-b299-af8baeb41b30.JPG)


# Technology Used
Front end:
-React
Server:
-Express.JS
-Node.js
-Firebase
Data Store:
-MongoDB
-Docker Container

# Features
When the bank home page loads the user only has the Home, Create Account and Login links available to them. Not until they successfully login do they have access to exclusively Home, Deposit, Withdraw, Balance, All Data and Logout. A User is able to deposit and withdraw from their balance, they can check their balance and go to page that displays all of their personal account data. The app uses authentication on the create account to set new users up with tokens. Upon logging in the use retrieves their access token to make future transactions.

I was unable to authenticate transactions. I tried to implement this and will work towards making that feature of the app available. I would also like to make hiding the links more visually appealing. Currently when links are hidden the other links do not take their place. The links are hidden in their respected spots on the navbar leaving vacancies on it.

Project License: ISC

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
