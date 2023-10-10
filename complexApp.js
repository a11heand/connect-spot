/* 
   Filename: complexApp.js
   Content: A complex application that simulates a social media platform with various features and functionalities
*/

// User Class representing a user on the social media platform
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.posts = [];
        this.friends = [];
        this.notifications = [];
    }

    createPost(content) {
        const post = new Post(this, content);
        this.posts.push(post);
        return post;
    }

    addFriend(user) {
        this.friends.push(user);
        user.notifications.push(`${this.name} has added you as a friend.`);
    }

    getFriendSuggestions() {
        // Logic to suggest friends based on common interests, location, etc.
        // Returns an array of recommended friends
    }

    likePost(post) {
        post.incrementLikes();
        // Logic to add a notification to post creator
    }
}

// Post Class representing a post on the social media platform
class Post {
    constructor(author, content) {
        this.author = author;
        this.content = content;
        this.likes = 0;
    }

    incrementLikes() {
        this.likes++;
    }
}

// Instantiate users
const user1 = new User("John Doe", "john@example.com", "password123");
const user2 = new User("Jane Smith", "jane@example.com", "pswd789");

// Create and like posts
const post1 = user1.createPost("Hello Friends!");
const post2 = user2.createPost("Check out this amazing photo!");
user1.likePost(post2);
user2.likePost(post1);

// Add friends and get friend suggestions
user1.addFriend(user2);
const suggestions = user1.getFriendSuggestions();

console.log(user1);
console.log(user2);
console.log(post1);
console.log(post2);
console.log(suggestions);

// More complex and elaborate code can be added to enhance the social media platform simulation.