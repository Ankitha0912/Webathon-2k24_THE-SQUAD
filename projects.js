document.addEventListener("DOMContentLoaded", function() {
    var projectList = document.getElementById("projectList");
    var addProjectForm = document.getElementById("addProjectForm");
    var showAddProjectFormButton = document.getElementById("showAddProjectForm");

    showAddProjectFormButton.addEventListener("click", function() {
        addProjectForm.classList.toggle("hidden");
    });

    document.getElementById("projectForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        var projectName = document.getElementById("projectName").value;
        var projectDescription = document.getElementById("projectDescription").value;
        var projectLink = document.getElementById("projectLink").value;

        // Create a new project object
        var newProject = {
            name: projectName,
            description: projectDescription,
            link: projectLink
        };

        // Call a function to add the new project to the page
        addProjectToList(newProject);

        // Clear the form fields after submission
        document.getElementById("projectForm").reset();
    });

    // Function to add a new project to the project list
    function addProjectToList(project) {
        var projectItem = document.createElement("div");
        projectItem.classList.add("project-item");

        var projectName = document.createElement("h2");
        projectName.textContent = project.name;

        var projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;

        var projectLink = document.createElement("a");
        projectLink.textContent = "Visit Project";
        projectLink.href = project.link;
        projectLink.target = "_blank";

        projectItem.appendChild(projectName);
        projectItem.appendChild(projectDescription);
        projectItem.appendChild(projectLink);

        projectList.appendChild(projectItem);
    }
});
