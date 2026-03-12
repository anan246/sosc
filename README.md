# ⚡ Typing Speed Challenge

A modern, interactive typing speed game built with vanilla JavaScript, HTML, and CSS. Test and improve your typing skills with multiple difficulty levels, real-time statistics, and streak tracking!

## 🎮 Features

- **Three Difficulty Levels**: Easy, Medium, and Hard
- **Real-time Statistics**: Track WPM, accuracy, time, and streak
- **Progress Tracking**: Visual progress bar and completion counter
- **High Score System**: Persistent storage of your best performance
- **Streak Counter**: Build and maintain typing streaks
- **Session Summary**: Detailed results modal after each session
- **Responsive Design**: Beautiful glassmorphism UI with smooth animations

## 🚀 Live Demo

[View Live Demo](https://your-deployment-url.vercel.app)

## 📸 Screenshots

![Typing Speed Challenge](screenshot.png)

## 🛠️ Technologies Used

- HTML5
- CSS3 (Glassmorphism, Animations)
- Vanilla JavaScript
- Local Storage API
- Google Fonts (Poppins)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/type-gaming.git
```

2. Navigate to the project directory:
```bash
cd type-gaming
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## 🎯 How to Play

1. Click **"Start Test"** to begin
2. Select your preferred difficulty level (Easy/Medium/Hard)
3. Type the displayed text as quickly and accurately as possible
4. Complete multiple sentences to build your streak
5. Click **"Stop & View Results"** to see your session summary
6. Try to beat your high score!

## 📊 Statistics Tracked

- **WPM (Words Per Minute)**: Your typing speed
- **Accuracy**: Percentage of correctly typed characters
- **Time**: Duration for each sentence
- **Streak**: Consecutive correct completions
- **Completed**: Total sentences completed in session
- **High Score**: Your best WPM ever
- **Total Completed**: Lifetime sentence count

## 🎨 Features Breakdown

### Difficulty Levels
- **Easy**: Short, simple sentences
- **Medium**: Moderate length with programming concepts
- **Hard**: Complex sentences with technical terminology

### Visual Feedback
- Green highlighting for correct characters
- Red highlighting for incorrect characters
- Animated completion effects
- Pulsing streak counter at high streaks

## 🔧 Customization

You can easily customize the quotes by editing the `quotes` object in `script.js`:

```javascript
const quotes = {
  easy: ["Your easy quotes here"],
  medium: ["Your medium quotes here"],
  hard: ["Your hard quotes here"]
};
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)

## 🌟 Show your support

Give a ⭐️ if you like this project!

## 📈 Future Enhancements

- [ ] Multiplayer mode
- [ ] Custom quote upload
- [ ] Leaderboard system
- [ ] More themes
- [ ] Sound effects
- [ ] Mobile optimization
- [ ] Keyboard heatmap
- [ ] Detailed analytics dashboard

---

Made with ❤️ and ☕
