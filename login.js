

const { createClient } = supabase
const _supabase = createClient('https://iihofahvnffqnugbeauq.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpaG9mYWh2bmZmcW51Z2JlYXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1MTczNDAsImV4cCI6MjAyNzA5MzM0MH0.VDaCbd6Ix-7l6CmxJzqpLEB-MkQq_-MRKmlSryluXcE');
console.log('Supabase Instance: ', Object.keys(_supabase))
console.log(JSON.stringify(_supabase))
//console.log(JSON.parse(JSON.stringify(_supabase)))
localStorage.setItem('_supabase', JSON.stringify(_supabase));



const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener('DOMContentLoaded', async function() {



    let { error } = await _supabase.auth.signOut()
    if (error) {
        console.error('Error signing out:', error.message);
    } else {
        console.log('Sign out successful.');
    }

    document.getElementById('SignInBtn').addEventListener('click', async function(event) {
        event.preventDefault(); // Prevent default form submission

        var email = document.getElementById('emailph').value.trim();
        var password = document.getElementById('pwph').value.trim();
        

        if (email !== '' && password !== '') {
            try {
              
                const { user, error } = await _supabase.auth.signInWithPassword({
                    email: email,
                    password: password
                });

                if (error) {
                    alert('Login failed. Please check your credentials.');
                } else {
                    alert('Login successful!');
                    // Redirect or perform any other action upon successful login
                    window.location.href = 'index1.html';
                }
            } catch (error) {
                console.error('Error signing in:', error.message);
            }
        }
    });

    document.getElementById('RegisterBtn').addEventListener('click', async function(event) {
        event.preventDefault(); // Prevent default form submission

        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();

        if (email !== '' && password !== '') {
            try {
                // Sign up with email and password using Supabase
                const { user, error } = await _supabase.auth.signUp({
                    email: email,
                    password: password
                });

                if (error) {
                    console.log(error.message);
                    alert('Registration failed. Please try again.',error);
                } else {
                    alert('Registration successful!');
                    // Redirect or perform any other action upon successful registration
                    window.location.href = 'index1.html';
                }
            } catch (error) {
                console.error('Error signing up:', error.message);
            }
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    const showPasswordCheckbox = document.getElementById("showPassword");
  
    if (passwordInput && showPasswordCheckbox) {
        showPasswordCheckbox.addEventListener("change", function() {
            if (showPasswordCheckbox.checked) {
                // Change input type to "text" to show password
                passwordInput.type = "text";
            } else {
                // Change input type back to "password" to hide password
                passwordInput.type = "password";
            }
        });
    }
  });