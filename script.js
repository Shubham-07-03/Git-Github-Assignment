// Task 1: Initialize a Git repository for JavaScript project
// cd my-js-project
// Initialize the Git repository:
//     git init

// Task 2: Create a file named script.js with a simple JavaScript function
    // Create the script.js 
function sayHello() {
    console.log("Hello, World!");
}
sayHello();


// // Task 3: Add and commit the changes
// Commit the changes with a message:
// git commit -m "Add script.js with simple hello world function"





// assignment 2. 
// Task 1: Create a new branch named feature-greeting
// Create the new branch:
    git branch feature-greeting

// Task 2: Switch to the new branch
    Switch to feature-greeting:
    git checkout feature-greeting

// Task 3: Add a new function in script.js that displays a personalized greeting
// Edit the script.js file by adding the new function:

function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Drony");


// Task 4: Commit the changes in the feature branch
    git add script.js
    Commit the changes with a message:
    git commit -m "Add greet function to display personalized greeting"

// Task 5: Merge feature-greeting into the main branch
    Switch back to the main branch:
    git checkout main
    Merge the feature-greeting branch into main:
    git merge feature-greeting

// Task 6: Switch back to the main branch
    Ensure you're on the main branch:
    git checkout main




// Assignment 3
// Task 1: Create a GitHub repository for your JavaScript project
    Go to GitHub and sign in to your account.
    Click on the + button in the top-right corner and select New repository
    Enter a name for your repository, for example, my-js-project.
    Choose the repository's visibility (public or private), and do not initialize the repository with a README file or other files since you already have a local repository.
    Click Create repository.

// Task 2: Push your local repository to the GitHub repository
    In your local project folder, link your local repository to the remote GitHub repository:
    git remote add origin https://github.com/your-username/my-js-project.git
    (Replace your-username and my-js-project with your actual GitHub username and repository name.)
    
    Push your local repository to GitHub:
    git push -u origin main
    This will upload your project to GitHub.

// Task 3: Invite a team member to collaborate on the GitHub repository
    Go to your GitHub repository page.
    Click on the Settings tab.
    In the left-hand menu, click Collaborators.
    Under "Manage access", click the Invite a collaborator button.
    Enter your team member’s GitHub username or email address, then click Add collaborator.
    Your team member will receive an invitation to accept, granting them access to the repository.

// Task 4: Your team member should clone the repository and make a change
        Once the team member accepts the invitation, they can clone the repository:
        
        bash
        Copy code
        git clone https://github.com/your-username/my-js-project.git
        The team member can navigate to the repository and make a change, for example, modify script.js to:
        
        function farewell(name) {
        console.log(`Goodbye, ${name}!`);
        }
        
        farewell("Alice");
        The team member should add, commit, and push their changes:
        git add script.js
        git commit -m "Add farewell function"
        git push origin main

// Task 5: Fetch and merge the changes made by your team member
        On your local machine, fetch the changes from the remote repository:
        git fetch origin
        Merge the changes into your local branch:
        
        git merge origin/main
        Resolve any potential conflicts (if any) and complete the merge.








// Assignment 4
// Task 1: Create a new branch named feature-update
    Create a new branch:
    git branch feature-update

// Task 2: Switch to the new branch and make changes to script.js
    Switch to the feature-update branch:
    git checkout feature-update
    Open script.js and make changes. For example, modify the greet function:

    function greet(name) {
        console.log(`Greetings, ${name}! Welcome to our site.`);
    }
    
    greet("Charlie");

// Task 3: Commit the changes in the feature-update branch
    Stage and commit the changes:
    git add script.js
    git commit -m "Update greet function with a welcome message"

// Task 4: Switch back to the main branch and make different changes to script.js
    Switch back to the main branch:
    git checkout main
    Open script.js and make different changes to the same function:
    
    function greet(name) {
        console.log(`Hi, ${name}! How are you today?`);
    }
    greet("Alice");


// Task 5: Commit the changes in the main branch
    git add script.js
    git commit -m "Update greet function with a friendly message"
    Task 6: Attempt to merge feature-update into the main branch
    Try to merge the feature-update branch into main:
    
    git merge feature-update
    This will likely result in a merge conflict due to different changes in the same lines of script.js.

// Task 7: Resolve any merge conflicts that occur
    Open the script.js file, and you'll see the conflict markers like this:
    
    <<<<<<< HEAD
    function greet(name) {
        console.log(`Hi, ${name}! How are you today?`);
    }
    
    greet("Alice");
    =======
    function greet(name) {
        console.log(`Greetings, ${name}! Welcome to our site.`);
    }
    
    greet("Charlie");
    >>>>>>> feature-update
    Manually resolve the conflict by combining or selecting parts of the changes. For example:

    function greet(name) {
        console.log(`Hi, ${name}! Welcome to our site and hope you're doing well today.`);
    }
    
    greet("Alice");
    After resolving the conflict, stage the file:
    
    git add script.js
    Complete the merge by committing the resolved changes:
    
    git commit -m "Resolve merge conflict in greet function"
    The merge conflict has been resolved, and the feature-update branch is successfully merged into the main branch.






Assignment 5
// Task 1: Create a new file named obsolete.js
    Create the file:
    touch obsolete.js

// Task 2: Add and commit the file to the repository
    Open obsolete.js in your text editor and add some content, for example:        
    
    // This file is obsolete and should not be used.
    Save the file.
    
    Stage and commit the file:
    git add obsolete.js
    git commit -m "Add obsolete.js file"
// Task 3: Realize that obsolete.js is unnecessary and should be removed
    You decide that the file should be removed.
        
// Task 4: Remove obsolete.js from the repository
    Remove the file:
    
    git rm obsolete.js
    Commit the removal:
    
    git commit -m "Remove obsolete.js file"

// Task 5: Undo the last commit where obsolete.js was added
    To undo the last commit (the one where obsolete.js was added), use:
    
    git reset HEAD~1
    This command will remove the last commit but keep the changes in the working directory.
    
    If you want to remove the changes from the working directory as well (if you want to delete the content of obsolete.js):
    
    git rm --cached obsolete.js
