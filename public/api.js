const API = {
    async getLastWorkout() {
      let res;
      try {
        res = await fetch("http://localhost:9000/api/workouts");
      } catch (err) {
        console.log(err)
      }
      const json = await res.json();
  
      return json[json.length - 1];
    },
    async addExercise(data) {
      const id = location.search.split("=")[1];
  
      const res = await fetch("http://localhost:9000/api/workouts/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
  
      const json = await res.json();
  
      return json;
    },
    async createWorkout(data = {}) {
      const res = await fetch("http://localhost:9000/api/workouts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });
  
      const json = await res.json();
  
      return json;
    },
  
    async getWorkoutsInRange() {
      const res = await fetch(`http://localhost:9000/api/workouts/range`);
      const json = await res.json();
  
      return json;
    },
  };