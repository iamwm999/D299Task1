// ===========================
// INCLUSIVE ASSESSMENT MODULE
// JavaScript for Navigation & Assessments
// ===========================

let currentSlide = 1;
const totalSlides = 13;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showSlide(1);
    setupKeyboardNavigation();
});

// ===========================
// SLIDE NAVIGATION
// ===========================

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    
    // Validate slide number
    if (n > totalSlides) {
        currentSlide = totalSlides;
    } else if (n < 1) {
        currentSlide = 1;
    } else {
        currentSlide = n;
    }
    
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show current slide
    const activeSlide = document.getElementById(`slide-${currentSlide}`);
    if (activeSlide) {
        activeSlide.classList.add('active');
    }
    
    // Update slide counter
    document.getElementById('current-slide').textContent = currentSlide;
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

function goHome() {
    showSlide(1);
}

// ===========================
// KEYBOARD NAVIGATION
// ===========================

function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            nextSlide();
        } else if (event.key === 'ArrowLeft') {
            previousSlide();
        } else if (event.key === 'Home') {
            goHome();
        }
    });
}

// ===========================
// FORMATIVE ASSESSMENT 1
// Spot the Barrier
// ===========================

function checkFormativeAssessment1() {
    const checkboxes = document.querySelectorAll('.barrier-checkbox');
    const feedback = document.getElementById('feedback-1');
    
    let correctCount = 0;
    const correctAnswers = ['time', 'format', 'language', 'access'];
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked && correctAnswers.includes(checkbox.value)) {
            correctCount++;
        }
    });
    
    // Show feedback
    if (correctCount === 4) {
        feedback.innerHTML = '<strong>✓ Excellent!</strong> You identified all four barriers in this assessment. These are exactly the types of barriers that UDL principles help us remove.';
        feedback.className = 'feedback show success';
    } else if (correctCount >= 2) {
        feedback.innerHTML = '<strong>Good start!</strong> You identified ' + correctCount + ' out of 4 barriers. Consider: How might time pressure, format limitations, complex language, and lack of assistive technology support affect different learners?';
        feedback.className = 'feedback show partial';
    } else {
        feedback.innerHTML = '<strong>Try again.</strong> Look for barriers related to time, format, language, and accessibility. Think about how each could exclude students with different needs.';
        feedback.className = 'feedback show incorrect';
    }
}

// ===========================
// FORMATIVE ASSESSMENT 2
// Knowledge Check (Multiple Choice)
// ===========================

function checkFormativeAssessment2() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const feedback = document.getElementById('feedback-2');
    
    if (!q1 || !q2 || !q3) {
        feedback.innerHTML = '<strong>Please answer all questions before submitting.</strong>';
        feedback.className = 'feedback show incorrect';
        return;
    }
    
    let correctCount = 0;
    let explanations = [];
    
    // Check Q1
    if (q1.value === 'correct') {
        correctCount++;
        explanations.push('✓ Q1: Correct! Action & Expression allows students to demonstrate learning in multiple ways.');
    } else {
        explanations.push('✗ Q1: Incorrect. Action & Expression is the UDL principle about how students show what they know.');
    }
    
    // Check Q2
    if (q2.value === 'correct') {
        correctCount++;
        explanations.push('✓ Q2: Correct! Limited format is a major barrier that excludes diverse learners.');
    } else {
        explanations.push('✗ Q2: Incorrect. Traditional assessments often use only one format (like written tests).');
    }
    
    // Check Q3
    if (q3.value === 'correct') {
        correctCount++;
        explanations.push('✓ Q3: Correct! Clear typography is essential for accessibility.');
    } else {
        explanations.push('✗ Q3: Incorrect. Sans-serif fonts at 12pt+ are recommended for readability.');
    }
    
    // Show feedback
    let feedbackText = '<strong>Score: ' + correctCount + '/3</strong><br><br>';
    feedbackText += explanations.join('<br>');
    
    if (correctCount === 3) {
        feedback.className = 'feedback show success';
        feedbackText = '<strong>✓ Perfect Score!</strong><br><br>' + feedbackText + '<br><br>You have a strong understanding of UDL principles and accessibility best practices!';
    } else if (correctCount === 2) {
        feedback.className = 'feedback show partial';
        feedbackText = '<strong>Good work!</strong><br><br>' + feedbackText + '<br><br>Review the explanations above and consider how these principles apply to your own assessments.';
    } else {
        feedback.className = 'feedback show incorrect';
        feedbackText = '<strong>Keep learning!</strong><br><br>' + feedbackText + '<br><br>Take time to review the UDL principles and accessibility practices covered in this module.';
    }
    
    feedback.innerHTML = feedbackText;
}

// ===========================
// FORMATIVE ASSESSMENT 3
// Inclusive Assessment Checklist
// (No submission needed - self-reflection)
// ===========================

// The checklist is interactive but doesn't require submission
// Students can check/uncheck items for self-reflection

// ===========================
// SUMMATIVE ASSESSMENT
// Redesign an Assessment
// (Responses stored in browser)
// ===========================

function saveSummativeAssessment() {
    const responses = document.querySelectorAll('.response-textarea');
    const assessmentData = {
        barriers: responses[2]?.value || '',
        udlPrinciples: responses[3]?.value || '',
        flexibleSupports: responses[4]?.value || '',
        maintainRigor: responses[5]?.value || ''
    };
    
    // Save to localStorage
    localStorage.setItem('summativeAssessment', JSON.stringify(assessmentData));
    
    // Show confirmation
    alert('Your assessment redesign has been saved!');
}

// Load saved responses on page load
function loadSummativeAssessment() {
    const saved = localStorage.getItem('summativeAssessment');
    if (saved) {
        const data = JSON.parse(saved);
        const responses = document.querySelectorAll('.response-textarea');
        if (responses[2]) responses[2].value = data.barriers;
        if (responses[3]) responses[3].value = data.udlPrinciples;
        if (responses[4]) responses[4].value = data.flexibleSupports;
        if (responses[5]) responses[5].value = data.maintainRigor;
    }
}

// Auto-save responses every 30 seconds
setInterval(function() {
    const responses = document.querySelectorAll('.response-textarea');
    if (responses.length > 0) {
        const assessmentData = {
            barriers: responses[2]?.value || '',
            udlPrinciples: responses[3]?.value || '',
            flexibleSupports: responses[4]?.value || '',
            maintainRigor: responses[5]?.value || ''
        };
        localStorage.setItem('summativeAssessment', JSON.stringify(assessmentData));
    }
}, 30000);

// Load on page load
document.addEventListener('DOMContentLoaded', function() {
    loadSummativeAssessment();
});

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Smooth scroll to element
function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Print current slide
function printSlide() {
    window.print();
}

// Export assessment responses
function exportResponses() {
    const caseStudyResponse = document.getElementById('case-study-response')?.value || '';
    const summativeData = localStorage.getItem('summativeAssessment');
    
    let exportText = 'INCLUSIVE ASSESSMENT MODULE - RESPONSES\n';
    exportText += '=====================================\n\n';
    exportText += 'Case Study Response (Slide 10):\n';
    exportText += caseStudyResponse + '\n\n';
    
    if (summativeData) {
        const data = JSON.parse(summativeData);
        exportText += 'Summative Assessment Responses (Slide 12):\n';
        exportText += 'Barriers: ' + data.barriers + '\n';
        exportText += 'UDL Principles: ' + data.udlPrinciples + '\n';
        exportText += 'Flexible Supports: ' + data.flexibleSupports + '\n';
        exportText += 'Maintain Rigor: ' + data.maintainRigor + '\n';
    }
    
    // Create download
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(exportText));
    element.setAttribute('download', 'assessment-responses.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Clear all saved data
function clearAllData() {
    if (confirm('Are you sure you want to clear all saved responses? This cannot be undone.')) {
        localStorage.removeItem('summativeAssessment');
        location.reload();
    }
}