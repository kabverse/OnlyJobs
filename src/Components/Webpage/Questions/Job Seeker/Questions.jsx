import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Questions.css";

// Template components for different question types
const QuestionTemplates = {
    // Text input question template
    text: ({ question, value, onChange, error }) => (
        <div className="input-wrapper">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={question.placeholder}
                className={`question-input ${error ? "error-input" : ""}`}
            />
            <div className="input-decoration">
                <div className="sparkle sparkle-1"></div>
                <div className="sparkle sparkle-2"></div>
            </div>
        </div>
    ),

    // Email input question template
    email: ({ question, value, onChange, error }) => (
        <div className="input-wrapper">
            <input
                type="email"
                value={value}
                onChange={onChange}
                placeholder={question.placeholder}
                className={`question-input ${error ? "error-input" : ""}`}
            />
            <div className="input-decoration">
                <div className="sparkle sparkle-1"></div>
                <div className="sparkle sparkle-2"></div>
            </div>
        </div>
    ),

    // Phone input question template
    phone: ({ question, value, onChange, error }) => (
        <div className="input-wrapper">
            <input
                type="tel"
                value={value}
                onChange={onChange}
                placeholder={question.placeholder}
                className={`question-input ${error ? "error-input" : ""}`}
            />
            <div className="input-decoration">
                <div className="sparkle sparkle-1"></div>
                <div className="sparkle sparkle-2"></div>
            </div>
        </div>
    ),

    // Date input question template
    date: ({ question, value, onChange, error }) => (
        <div className="input-wrapper date-wrapper">
            <input
                type="date"
                value={value}
                onChange={onChange}
                className={`question-input date-input ${
                    error ? "error-input" : ""
                }`}
            />
            <div className="calendar-decoration">
                <div className="calendar-icon"></div>
            </div>
        </div>
    ),

    // Textarea question template
    textarea: ({ question, value, onChange, error }) => (
        <div className="input-wrapper">
            <textarea
                value={value}
                onChange={onChange}
                placeholder={question.placeholder}
                className={`question-textarea ${error ? "error-input" : ""}`}
            />
            <div className="textarea-decoration">
                <div className="wave wave-1"></div>
                <div className="wave wave-2"></div>
            </div>
        </div>
    ),

    // Select/dropdown question template
    select: ({ question, value, onChange, error }) => (
        <div className="input-wrapper">
            <select
                value={value}
                onChange={onChange}
                className={`question-select ${error ? "error-input" : ""}`}
            >
                <option value="">Please select...</option>
                {question.options &&
                    question.options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
            </select>
            <div className="select-decoration">
                <div className="select-arrow"></div>
            </div>
        </div>
    ),

    // Radio buttons question template
    radio: ({ question, value, onChange, error }) => (
        <div className={`radio-group ${error ? "error-input" : ""}`}>
            {question.options &&
                question.options.map((option) => (
                    <label key={option.value} className="radio-option">
                        <input
                            type="radio"
                            name={question.id}
                            value={option.value}
                            checked={value === option.value}
                            onChange={onChange}
                        />
                        <span className="radio-label">{option.label}</span>
                        <span className="radio-bubble"></span>
                    </label>
                ))}
        </div>
    ),

    // File upload template
    file: ({ question, value, onChange, error }) => (
        <div className="input-wrapper">
            <input
                type="file"
                onChange={onChange}
                className={`question-input ${error ? "error-input" : ""}`}
                accept={question.accept || ".pdf,.doc,.docx"}
            />
            <div className="input-decoration">
                <div className="sparkle sparkle-1"></div>
                <div className="sparkle sparkle-2"></div>
            </div>
        </div>
    ),
};

const JobApplicationForm = () => {
    const [roleSelected, setRoleSelected] = useState(false);
    const [userRole, setUserRole] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState("");
    const [animation, setAnimation] = useState("");

    // Role selection handler
    const handleRoleSelect = (role) => {
        setUserRole(role);
        setAnimation("slide-out");
        setTimeout(() => {
            setRoleSelected(true);
            setAnimation("slide-in");
        }, 300);
    };

    // Render role selection screen
    const renderRoleSelection = () => {
        return (
            <div className={`role-selection-container ${animation}`}>
                <h2 className="role-selection-title">Choose Your Path</h2>
                <p className="role-selection-subtitle">
                    Are you looking to hire or to be hired?
                </p>

                <div className="role-buttons">
                    <div
                        className="role-option"
                        onClick={() => handleRoleSelect("jobseeker")}
                    >
                        <div className="role-icon">👔</div>
                        <h3>Job Seeker</h3>
                        <p>
                            Find your dream job and connect with top employers
                        </p>
                    </div>

                    <div
                        className="role-option"
                        onClick={() => handleRoleSelect("employer")}
                    >
                        <div className="role-icon">💼</div>
                        <h3>Employer</h3>
                        <p>
                            Find the perfect candidates for your open positions
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    // Questions array with all the questions we'll ask
    const questions = [
        {
            id: "name",
            text: "What is your full name?",
            type: "text",
            placeholder: "Enter your full name",
            icon: "👋",
        },
        {
            id: "email",
            text: "What is your email address?",
            type: "email",
            placeholder: "Enter your email address",
            icon: "📧",
        },
        {
            id: "phone",
            text: "What is your phone number?",
            type: "phone",
            placeholder: "Enter your phone number",
            optional: true,
            icon: "📱",
        },
        {
            id: "location",
            text: "Where are you currently located?",
            type: "text",
            placeholder: "City, State, Country",
            icon: "📍",
        },
        {
            id: "position",
            text: "What job position are you seeking?",
            type: "text",
            placeholder: "Enter desired job title",
            icon: "💼",
        },
        {
            id: "experience",
            text: "How many years of relevant work experience do you have?",
            type: "select",
            options: [
                { value: "less-than-1", label: "Less than 1 year" },
                { value: "1-3", label: "1-3 years" },
                { value: "3-5", label: "3-5 years" },
                { value: "5-10", label: "5-10 years" },
                { value: "more-than-10", label: "More than 10 years" },
            ],
            icon: "⏱️",
        },
        {
            id: "education",
            text: "What is your highest level of education completed?",
            type: "select",
            options: [
                { value: "high-school", label: "High School" },
                { value: "associate", label: "Associate Degree" },
                { value: "bachelor", label: "Bachelor's Degree" },
                { value: "master", label: "Master's Degree" },
                { value: "doctorate", label: "Doctorate or PhD" },
                { value: "other", label: "Other" },
            ],
            icon: "🎓",
        },
        {
            id: "skills",
            text: "What are your key skills or areas of expertise?",
            type: "textarea",
            placeholder: "List your key professional skills...",
            icon: "🔧",
        },
        {
            id: "summary",
            text: "What is your professional summary or career objective?",
            type: "textarea",
            placeholder: "Write a brief professional summary...",
            icon: "📝",
        },
        {
            id: "resume",
            text: "Please upload your resume or CV",
            type: "file",
            accept: ".pdf,.doc,.docx",
            placeholder: "Upload your resume (PDF, DOC, DOCX)",
            icon: "📄",
        },
    ];

    // Add email validation function
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handle input changes
    const handleChange = (e) => {
        let value;
        const question = questions[currentQuestion];

        // Handle different input types
        if (question.type === "radio") {
            value = e.target.value;
        } else if (question.type === "file") {
            value = e.target.files[0];
        } else {
            value = e.target.value;
        }

        // Clear error when user starts typing
        if (error) setError("");

        // Validate email as user types
        if (question.type === "email" && value && !isValidEmail(value)) {
            setError("Please enter a valid email address");
        }

        setAnswers({
            ...answers,
            [question.id]: value,
        });
    };

    // Apply animation when question changes
    useEffect(() => {
        setAnimation("slide-in");
        const timer = setTimeout(() => {
            setAnimation("");
        }, 500);

        return () => clearTimeout(timer);
    }, [currentQuestion, completed]);

    // Handle continue button click
    const handleContinue = () => {
        const currentQuestionId = questions[currentQuestion].id;
        const currentAnswer = answers[currentQuestionId];
        const isOptional = questions[currentQuestion].optional;
        const question = questions[currentQuestion];

        // Check if the current field is empty (unless it's optional)
        if (
            !isOptional &&
            (!currentAnswer ||
                (typeof currentAnswer === "string" &&
                    currentAnswer.trim() === ""))
        ) {
            setError("Please fill out this field before continuing.");
            return;
        }

        // Validate email before proceeding
        if (question.type === "email" && !isValidEmail(currentAnswer)) {
            setError("Please enter a valid email address");
            return;
        }

        // If validation passes, proceed to next question or complete
        setAnimation("slide-out");

        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setError("");
            } else {
                setCompleted(true);
                setError("");
            }
        }, 300);
    };

    // Handle going back to a previous question
    const handleBack = () => {
        if (currentQuestion > 0) {
            setAnimation("slide-out-reverse");

            setTimeout(() => {
                setCurrentQuestion(currentQuestion - 1);
                setError("");
            }, 300);
        }
    };

    // Handle going back to role selection
    const handleBackToRoles = () => {
        setAnimation("slide-out-reverse");
        setTimeout(() => {
            setRoleSelected(false);
            setCurrentQuestion(0);
            setError("");
            // Reset animation for role selection screen
            setAnimation("slide-in");
        }, 300);
    };

    // Handle starting over
    const handleStartOver = () => {
        setAnimation("fade-out");

        setTimeout(() => {
            setCurrentQuestion(0);
            setAnswers({});
            setCompleted(false);
            setError("");
        }, 300);
    };

    // Render the current question
    const renderQuestion = () => {
        const question = questions[currentQuestion];
        const value = answers[question.id] || "";
        const isLastQuestion = currentQuestion === questions.length - 1;

        // Get the correct template for this question type
        const QuestionTemplate =
            QuestionTemplates[question.type] || QuestionTemplates.text;

        return (
            <div className={`question-container ${animation}`}>
                <div className="question-icon">{question.icon}</div>
                <h2 className="question-title">{question.text}</h2>
                {question.optional && (
                    <span className="optional-tag">(Optional)</span>
                )}

                <QuestionTemplate
                    question={question}
                    value={value}
                    onChange={handleChange}
                    error={error}
                />

                {error && <div className="error-message">{error}</div>}

                <div className="button-container">
                    {currentQuestion === 0 ? (
                        <button
                            onClick={handleBackToRoles}
                            className="back-button"
                        >
                            <span className="button-text">Change Role</span>
                        </button>
                    ) : (
                        currentQuestion > 0 && (
                            <button
                                onClick={handleBack}
                                className="back-button"
                            >
                                <span className="button-text">Back</span>
                            </button>
                        )
                    )}
                    <button
                        onClick={handleContinue}
                        className="continue-button"
                    >
                        <span className="button-text">
                            {isLastQuestion ? "Complete" : "Continue"}
                        </span>
                        <span className="button-arrow">➜</span>
                    </button>
                </div>

                <div className="progress-container">
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{
                                width: `${
                                    (currentQuestion / (questions.length - 1)) *
                                    100
                                }%`,
                            }}
                        ></div>
                    </div>
                    <div className="progress-text">
                        Question {currentQuestion + 1} of {questions.length}
                    </div>
                </div>
            </div>
        );
    };

    // Render the completion screen
    const renderCompletion = () => {
        return (
            <div className={`completion-container ${animation}`}>
                <div className="completion-icon">🎉</div>
                <h2 className="completion-title">Application Complete!</h2>
                <div className="confetti-container">
                    <div className="confetti confetti-1"></div>
                    <div className="confetti confetti-2"></div>
                    <div className="confetti confetti-3"></div>
                    <div className="confetti confetti-4"></div>
                    <div className="confetti confetti-5"></div>
                    <div className="confetti confetti-6"></div>
                </div>
                <div className="profile-summary">
                    <h3 className="summary-heading">Application Summary:</h3>
                    {questions.map((question) => {
                        // Skip file display in summary as it's just a File object
                        if (question.type === "file") {
                            return (
                                <div key={question.id} className="summary-item">
                                    <div className="summary-icon">
                                        {question.icon}
                                    </div>
                                    <div className="summary-content">
                                        <span className="summary-label">
                                            {question.text}
                                        </span>
                                        <p className="summary-value">
                                            {answers[question.id]
                                                ? answers[question.id].name
                                                : "No file uploaded"}
                                        </p>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div key={question.id} className="summary-item">
                                <div className="summary-icon">
                                    {question.icon}
                                </div>
                                <div className="summary-content">
                                    <span className="summary-label">
                                        {question.text}
                                    </span>
                                    <p className="summary-value">
                                        {answers[question.id] || "Not provided"}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button onClick={handleStartOver} className="start-over-button">
                    <span>Start Over</span>
                </button>
            </div>
        );
    };

    return (
        <div className="profile-container">
            <Link to="/" className="back-home-arrow">
                ← Back to Home
            </Link>
            <div className="profile-card">
                {!roleSelected
                    ? renderRoleSelection()
                    : !completed
                    ? renderQuestion()
                    : renderCompletion()}
            </div>
        </div>
    );
};

export default JobApplicationForm;
