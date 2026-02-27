function generatePlan() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const goal = document.getElementById('goal').value;
    const gym = document.getElementById('gym').value;
    const experience = document.getElementById('experience').value;
    const time = parseInt(document.getElementById('time').value);

    // Example logic
    let calories = 2000; // placeholder, you can calculate with formulas
    let workouts = 3;
    if (goal === "fat_loss") {
        calories -= 500;
        workouts = 4;
    } else if (goal === "muscle_gain") {
        calories += 300;
        workouts = 5;
    }

    if (experience === "beginner") workouts -= 1;
    if (gym === "no") workouts -= 1;

    const planText = `
        Your recommended calories: ${calories} cal/day<br>
        Workouts per week: ${workouts}<br>
        Gym access: ${gym}<br>
        Experience level: ${experience}<br>
        Suggested focus: ${goal.replace('_',' ')}
    `;

    document.getElementById('planOutput').innerHTML = planText;
}
