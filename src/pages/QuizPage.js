// src/pages/QuizPage.js
import React, { useState } from 'react';
import './QuizPage.css';

const questions = [
  {
    section: "Lifestyle & Daily Routine",
    questions: [
      {
        text: "What time do you usually wake up in the morning?",
        name: "wakeTime",
        options: [
          { label: "5:00 AM - 7:00 AM", value: 5 },
          { label: "7:00 AM - 9:00 AM", value: 3 },
          { label: "9:00 AM - 11:00 AM", value: 2 },
          { label: "After 11:00 AM", value: 1 },
        ],
      },
      {
        text: "How do you typically spend your mornings?",
        name: "morningActivity",
        options: [
          { label: "I’m productive and focused (exercise, work, etc.)", value: 5 },
          { label: "I take my time to wake up and relax (coffee, reading, etc.)", value: 3 },
          { label: "I need a lot of time to get going, sometimes hitting snooze multiple times", value: 2 },
          { label: "I usually just chill out or sleep until the last minute", value: 1 },
        ],
      },
      {
        text: "What time do you typically go to bed?",
        name: "bedTime",
        options: [
          { label: "Before 10:00 PM", value: 5 },
          { label: "10:00 PM - 12:00 AM", value: 3 },
          { label: "After 12:00 AM", value: 2 },
          { label: "I don’t have a set bedtime", value: 1 },
        ],
      },
    ],
  },
  {
    section: "Cleanliness & Organization",
    questions: [
      {
        text: "How would you describe your level of tidiness?",
        name: "tidiness",
        options: [
          { label: "I’m very tidy and like to keep everything organized at all times", value: 5 },
          { label: "I keep things neat but don’t mind a little clutter", value: 3 },
          { label: "I’m generally laid-back about cleanliness but like to have things relatively in order", value: 2 },
          { label: "I’m not very organized and sometimes things get messy, but I do clean up eventually", value: 1 },
        ],
      },
      {
        text: "How do you feel about chores?",
        name: "chores",
        options: [
          { label: "I like to take care of chores myself to ensure they’re done right", value: 5 },
          { label: "I’m happy to do my part but prefer to split chores evenly", value: 3 },
          { label: "I don’t mind doing chores, but I don’t like to do them regularly", value: 2 },
          { label: "I prefer if others handle the chores, but I’ll pitch in if needed", value: 1 },
        ],
      },
      {
        text: "How often would you ideally like the common areas cleaned?",
        name: "cleaningFrequency",
        options: [
          { label: "Every day", value: 5 },
          { label: "2-3 times a week", value: 3 },
          { label: "Once a week", value: 2 },
          { label: "Only when it gets messy", value: 1 },
        ],
      },
    ],
  },
  {
    section: "Social Preferences & Visitors",
    questions: [
      {
        text: "How often do you like to have friends over?",
        name: "friendsOver",
        options: [
          { label: "I love hosting social events and gatherings regularly", value: 5 },
          { label: "I have friends over often, but I keep it more casual", value: 3 },
          { label: "I don’t mind visitors, but I prefer not to have a lot of people over", value: 2 },
          { label: "I prefer to keep to myself and don’t like having guests over", value: 1 },
        ],
      },
      {
        text: "How do you feel about guests staying overnight?",
        name: "overnightGuests",
        options: [
          { label: "I’m fine with overnight guests as long as they’re respectful", value: 5 },
          { label: "I’m okay with overnight guests, but we should discuss in advance", value: 3 },
          { label: "I’d prefer guests not stay overnight unless there’s a special reason", value: 2 },
          { label: "I don’t like overnight guests at all", value: 1 },
        ],
      },
      {
        text: "Do you enjoy shared activities with your roommates?",
        name: "sharedActivities",
        options: [
          { label: "Yes, I love spending time with my roommates", value: 5 },
          { label: "I’m open to it, but it’s not something I do every day", value: 3 },
          { label: "I prefer to do my own thing and only occasionally interact", value: 2 },
          { label: "I prefer not to engage in shared activities with roommates", value: 1 },
        ],
      },
    ],
  },
  {
    section: "Noise & Quiet Time",
    questions: [
      {
        text: "How do you feel about noise in the shared living space?",
        name: "noiseTolerance",
        options: [
          { label: "I like a quiet environment most of the time", value: 5 },
          { label: "I don’t mind some noise, but I need quiet time for focus", value: 3 },
          { label: "I’m okay with noise and don’t mind a lively environment", value: 2 },
          { label: "I prefer a noisy, social environment", value: 1 },
        ],
      },
      {
        text: "Do you typically listen to music, watch TV, or use headphones?",
        name: "musicPreference",
        options: [
          { label: "I use headphones to avoid disturbing others", value: 5 },
          { label: "I listen to music/TV at a low volume", value: 3 },
          { label: "I play music/TV out loud for everyone", value: 2 },
          { label: "I enjoy loud music/TV and don’t mind if others hear it", value: 1 },
        ],
      },
      {
        text: "How do you feel about late-night noise (e.g., music, talking, parties)?",
        name: "lateNightNoise",
        options: [
          { label: "I prefer complete silence after 10 PM", value: 5 },
          { label: "Some noise is okay, but prefer it quiet after midnight", value: 3 },
          { label: "I don’t mind noise until around 2 AM", value: 2 },
          { label: "I enjoy late-night socializing", value: 1 },
        ],
      },
    ],
  },
  {
    section: "Shared Expenses & Household Responsibilities",
    questions: [
      {
        text: "How do you prefer to split bills and expenses?",
        name: "billSplit",
        options: [
          { label: "I prefer to split everything 50/50", value: 5 },
          { label: "I’m okay with a proportional split based on usage", value: 3 },
          { label: "I prefer if one person handles it and we settle at the end of the month", value: 2 },
          { label: "I don’t mind if others pay more; I can pay my share when I can", value: 1 },
        ],
      },
      {
        text: "How do you feel about shared grocery shopping?",
        name: "grocerySharing",
        options: [
          { label: "I prefer to buy and cook for myself", value: 5 },
          { label: "I’m okay with shared groceries, but we should have our own items", value: 3 },
          { label: "I’m open to shared grocery shopping, as long as we keep it organized", value: 2 },
          { label: "I enjoy sharing groceries and cooking together", value: 1 },
        ],
      },
      {
        text: "If something breaks or needs fixing, how do you prefer to handle it?",
        name: "repairPreference",
        options: [
          { label: "I’ll take care of it immediately or hire a professional", value: 5 },
          { label: "I’m happy to handle minor repairs myself", value: 3 },
          { label: "I’d prefer to wait until it becomes a bigger issue", value: 2 },
          { label: "I’d prefer if someone else takes care of it", value: 1 },
        ],
      },
    ],
  },
  {
    section: "Personal Habits & Preferences",
    questions: [
      {
        text: "Do you smoke or vape?",
        name: "smokeVape",
        options: [
          { label: "Yes, I smoke/vape regularly", value: 5 },
          { label: "I occasionally smoke/vape but am mindful of others", value: 3 },
          { label: "I don’t smoke/vape but don’t mind if others do", value: 2 },
          { label: "No, I do not smoke or vape, and I prefer a smoke-free environment", value: 1 },
        ],
      },
      {
        text: "How do you feel about pets?",
        name: "pets",
        options: [
          { label: "I love pets and would prefer roommates with them", value: 5 },
          { label: "I’m okay with pets but prefer smaller ones", value: 3 },
          { label: "I don’t mind pets, but I’d prefer no pets in the house", value: 2 },
          { label: "I’m allergic to pets and would prefer a pet-free home", value: 1 },
        ],
      },
      {
        text: "Do you drink alcohol?",
        name: "drinkAlcohol",
        options: [
          { label: "Yes, I drink alcohol regularly", value: 5 },
          { label: "I drink socially but not often", value: 3 },
          { label: "I occasionally drink but keep it moderate", value: 2 },
          { label: "I don’t drink alcohol", value: 1 },
        ],
      },
    ],
  },
  {
    section: "Communication Style & Conflict Resolution",
    questions: [
      {
        text: "How do you prefer to resolve conflicts?",
        name: "conflictResolution",
        options: [
          { label: "I prefer open and direct communication", value: 5 },
          { label: "I like to address issues calmly but not immediately", value: 3 },
          { label: "I prefer to avoid conflict and hope it resolves itself", value: 2 },
          { label: "I tend to bottle things up and avoid confrontation", value: 1 },
        ],
      },
      {
        text: "How do you feel about giving/receiving feedback?",
        name: "feedback",
        options: [
          { label: "I appreciate direct feedback and prefer to offer it honestly", value: 5 },
          { label: "I’m open to feedback but appreciate it politely", value: 3 },
          { label: "I prefer to avoid giving or receiving feedback", value: 2 },
          { label: "I find feedback difficult and prefer non-confrontation", value: 1 },
        ],
      },
    ],
  },
];

const QuizPage = () => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    setAnswers({
      ...answers,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const score = calculateScore(answers);
    setResult(`Your compatibility score is: ${score}`);
  };

  const calculateScore = (answers) => {
    return Object.values(answers).reduce((total, value) => total + value, 0);
  };

  return (
    <div className="quiz-page">
      <h2>Roommate Compatibility Quiz</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((section, idx) => (
          <div key={idx}>
            <h3>{section.section}</h3>
            {section.questions.map((question, qIdx) => (
              <div className="question" key={qIdx}>
                <p>{question.text}</p>
                {question.options.map((option, oIdx) => (
                  <label key={oIdx}>
                    <input
                      type="radio"
                      name={question.name}
                      value={option.value}
                      onChange={handleChange}
                      required
                    />{" "}
                    {option.label}
                  </label>
                ))}
              </div>
            ))}
          </div>
        ))}
        <button type="submit" className="submit-button">See Compatibility Score</button>
      </form>
      
      {result && <p className="result">{result}</p>}
    </div>
  );
};

export default QuizPage;
