// Sample user achievements data (replace with actual data or fetch from server)
var userAchievements = {
    "user1": {
        "projectsCompleted": 5,
        "challengesCompleted": 10,
        "totalPoints": 150
    },
    "user2": {
        "projectsCompleted": 3,
        "challengesCompleted": 8,
        "totalPoints": 100
    }
};

document.addEventListener("DOMContentLoaded", function() {
    var userAchievementsElement = document.getElementById("userAchievements");

    // Loop through user achievements data and display them on the page
    for (var user in userAchievements) {
        if (userAchievements.hasOwnProperty(user)) {
            var userAchievementsData = userAchievements[user];

            var userAchievementsHTML = "<div class='user-achievements'>";
            userAchievementsHTML += "<h3>" + user + "'s Achievements</h3>";
            userAchievementsHTML += "<p>Projects Completed: " + userAchievementsData.projectsCompleted + "</p>";
            userAchievementsHTML += "<p>Challenges Completed: " + userAchievementsData.challengesCompleted + "</p>";
            userAchievementsHTML += "<p>Total Points: " + userAchievementsData.totalPoints + "</p>";
            userAchievementsHTML += "</div>";

            userAchievementsElement.innerHTML += userAchievementsHTML;
        }
    }
});
