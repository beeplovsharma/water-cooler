// JavaScript code to open the default email client with a new email
document.querySelector('#Director').addEventListener('click', function() {
    // Replace 'yourEmailAddress' with the actual Gmail address
    var emailAddress = 'director@nitjsr.ac.in';
    var subject = "Immediate Attention Required: Water Cooler Issue in Hostel";
    var body = `
Respected sir,

I hope this message finds you well.

I am writing to address a critical issue concerning the functionality of the water cooler in our hostel. Over the past few days, numerous students have reported difficulties with the water cooler. Specifically, it has been noted that the dispenser is malfunctioning, and there are concerns about the cooling system's effectiveness.

Given the essential nature of access to clean and cool drinking water, I urge you to prioritize the investigation and resolution of this matter. The current situation is causing significant inconvenience and discomfort for the students, particularly during these warm months.

Please take immediate action to rectify the issue and ensure that the water cooler is operating optimally. Your swift response and attention to this matter would be greatly appreciated by all students.

Thank you for your prompt attention to this urgent concern.

Best regards
`;
    
    
    
    // Create the mailto link
    var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress) +
                     '?subject=' + encodeURIComponent(subject) +
                     '&body=' + encodeURIComponent(body);
    // Open the default email client
    window.location.href = mailtoLink;
});

// JavaScript code to open the default email client with a new email
document.querySelector("#Dean").addEventListener("click", function () {
  // Replace 'yourEmailAddress' with the actual Gmail address
  var emailAddress = "dean.sw@nitjsr.ac.in";
  var subject = "Immediate Attention Required: Water Cooler Issue in Hostel";
  var body = `
Respected sir,

I hope this message finds you well.

I am writing to address a critical issue concerning the functionality of the water cooler in our hostel. Over the past few days, numerous students have reported difficulties with the water cooler. Specifically, it has been noted that the dispenser is malfunctioning, and there are concerns about the cooling system's effectiveness.

Given the essential nature of access to clean and cool drinking water, I urge you to prioritize the investigation and resolution of this matter. The current situation is causing significant inconvenience and discomfort for the students, particularly during these warm months.

Please take immediate action to rectify the issue and ensure that the water cooler is operating optimally. Your swift response and attention to this matter would be greatly appreciated by all students.

Thank you for your prompt attention to this urgent concern.

Best regards
`;

  // Create the mailto link
  var mailtoLink =
    "mailto:" +
    encodeURIComponent(emailAddress) +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
  // Open the default email client
  window.location.href = mailtoLink;
});

