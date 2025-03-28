
    // Form validation and logic
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault();
  
        // Initialize form validity
        let form = document.getElementById('registrationForm');
        let isValid = true;
  
        // Name validation
        const fullname = document.getElementById('fullname').value.trim();
        const nameParts = fullname.split(' ');
        if (nameParts.length < 3) {
          alert('Please enter Firstname, Middlename, and Lastname');
          isValid = false;
        }
  
        // Aadhar validation (12 digits only)
        const aadhar = document.getElementById('aadhar').value.trim();
        if (!/^\d{12}$/.test(aadhar)) {
          alert('Aadhar number should be 12 digits');
          isValid = false;
        }
  
        // PAN card validation (10 characters, alphanumeric)
        const panCard = document.getElementById('panCard').value.trim();
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panCard)) {
          alert('PAN card number should be valid (e.g. ABCDE1234F)');
          isValid = false;
        }
  
        // Mobile number validation (10 digits only)
        const mobile = document.getElementById('mobile').value.trim();
        if (!/^\d{10}$/.test(mobile)) {
          alert('Mobile number should be 10 digits');
          isValid = false;
        }
  
        // Date of birth validation (should be a valid date)
        const dob = document.getElementById('dob').value.trim();
        if (!dob) {
          alert('Please select your date of birth');
          isValid = false;
        }
  
        // Marks validation (marks should be numbers between 0 and 100)
        let marks = [
          document.getElementById('subject1').value,
          document.getElementById('subject2').value,
          document.getElementById('subject3').value,
          document.getElementById('subject4').value,
          document.getElementById('subject5').value,
          document.getElementById('subject6').value
        ];
  
        marks = marks.map(mark => parseInt(mark));
  
        if (marks.some(mark => isNaN(mark) || mark < 0 || mark > 100)) {
          alert('Marks should be numbers between 0 and 100');
          isValid = false;
        }
  
        if (isValid) {
          // Calculate percentage for best of five subjects
          marks.sort((a, b) => b - a);
          const bestFiveMarks = marks.slice(0, 5);
          const totalMarks = bestFiveMarks.reduce((acc, mark) => acc + mark, 0);
          const percentage = (totalMarks / 500) * 100;
  
          // Display results
          document.getElementById('output').innerHTML = `
            <p><strong>Full Name:</strong> ${fullname}</p>
            <p><strong>Best 5 Subjects Marks:</strong> ${bestFiveMarks.join(', ')}</p>
            <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
          `;
        }
      });
  
      // Bootstrap custom validation
      (function () {
        'use strict'
        var forms = document.querySelectorAll('.needs-validation')
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
              form.classList.add('was-validated')
            }, false)
          })
      })()
    