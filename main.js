const { createApp } = Vue

  createApp({
    data() {
      return {
        toDoList: [
          {
              task: "Fare la spesa",
              done: false
          },
         
          {
            task: "Fare l'esercizio",
            done: false
        },
        {
          task: "Cucinare",
          done: true
      },
      {
        task: "Fare sport",
        done: true
    },
  
        ]
      }
      
    }
  }).mount('#app')
  console.log(toDoList);
