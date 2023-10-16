import OktaSignIn from '@okta/okta-signin-widget';

const signIn = new OktaSignIn({
  baseUrl: 'https://dev-95647570.okta.com',
  clientId: ' 0oacreu5okxufqDIV5d7',
  redirectUri: 'http://localhost:8080/login/callback',
  authParams: {
    pkce: true, // Enable PKCE
  },
  features: {
    registration: true, // Enable registration if needed
  },
});

signIn.renderEl(
  { el: '#widget-container' }, // Specify the container element
  (res) => {
    if (res.status === 'SUCCESS') {
      // The user is logged in, you can redirect to the homepage.
    }
  }
);
// Handle login
signIn.showSignInToGetTokens({
  el: '#widget-container',
});

// Handle logout
const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', () => {
  signIn.signOut(() => {
    // Redirect or update the UI as needed
  });
});
// JavaScript for adding tasks
function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = ''; // Clear the input field
    }
}

