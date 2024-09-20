// Get references to the form and display area
var form = document.getElementById('resumeForm'); // Corrected id
var resumeDisplayElement = document.getElementById('resumeDisplay'); // Corrected id
// Handle form submission
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;
    var education = document.getElementById('education').value;
    var degree = document.getElementById('degree').value;
    var companyName = document.getElementById('companyName').value;
    var position = document.getElementById('position').value;
    var description = document.getElementById('description').value;
    var skills = document.getElementById('skills').value;
    var aboutYourself = document.getElementById('aboutyourself').value;
    // Collect the uploaded image file
    var profileImageFile = (_a = document.getElementById('profilePicture').files) === null || _a === void 0 ? void 0 : _a[0];
    // Check if an image is uploaded
    if (profileImageFile) {
        // Create a FileReader to read the image
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            var imageUrl = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            // Generate the resume content dynamically, making the fields editable
            var resumeHTML = "\n                <div style=\"display: flex; align-items: center;\">\n                    <div style=\"flex-shrink: 0;\">\n                        <img src=\"".concat(imageUrl, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; object-fit: cover; border-radius: 50%;\">\n                    </div>\n                    <div style=\"margin-left: 20px;\">\n                        <h2><b>Editable Resume Builder</b></h2>\n                        <h3>Personal Information</h3>\n                        <p><b>Name:</b> <span contenteditable=\"true\">").concat(firstName, " ").concat(lastName, "</span></p>\n                        <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n                        <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n                        <p><b>Address:</b> <span contenteditable=\"true\">").concat(address, ", ").concat(city, ", ").concat(country, "</span></p>\n                    </div>\n                </div>\n\n                <h3>Education</h3>\n                <p><b>Degree:</b> <span contenteditable=\"true\">").concat(degree, "</span></p>\n                <p><b>Education:</b> <span contenteditable=\"true\">").concat(education, "</span></p>\n\n                <h3>Work Experience</h3>\n                <p><b>Company Name:</b> <span contenteditable=\"true\">").concat(companyName, "</span></p>\n                <p><b>Position:</b> <span contenteditable=\"true\">").concat(position, "</span></p>\n                <p><b>Description:</b> <span contenteditable=\"true\">").concat(description, "</span></p>\n\n                <h3>Skills</h3>\n                <p><b>Skills:</b> <span contenteditable=\"true\">").concat(skills, "</span></p>\n                <h3>About Yourself</h3>\n                <p><b>About Yourself:</b> <span contenteditable=\"true\">").concat(aboutYourself, "</span></p>\n            ");
            // Display the generated resume
            if (resumeDisplayElement) {
                resumeDisplayElement.innerHTML = resumeHTML;
            }
            else {
                console.error("Cannot display resume.");
            }
        };
        // Read the image file as a data URL
        reader.readAsDataURL(profileImageFile);
    }
    else {
        console.error("No image uploaded.");
    }
});
