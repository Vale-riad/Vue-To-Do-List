const { createApp } = Vue

  createApp({
    data() {
      return {
        newTodo: '',
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
      
    },
    methods:{
      addTodo(){
        this.toDoList.push(this.newTodo);
        this.newTodo='';
      },
      removeToDo(index){
this.toDoList.splice(index, 1);
      },
    }
  }).mount('#app')
 
