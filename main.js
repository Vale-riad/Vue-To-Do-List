const { createApp } = Vue

  createApp({
    data() {
      return {
        taskNewToDo: '',
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
     const objNewToDO={
      task: this.taskNewToDo,
      done: false,
     };
     this.toDoList.push(objNewToDO);
     this.taskNewToDo='';
   
      },
      removeToDo(index){
this.toDoList.splice(index, 1);
      },
      onClickTodo(todo) {
        todo.done = !todo.done;
      },
    }
    
  }).mount('#app')
 
