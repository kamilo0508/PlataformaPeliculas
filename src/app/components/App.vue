
<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a href="/" class="navbar-brand">Plataforma de Películas</a>
        </nav>
        <br>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <h4>Crear Titulo</h4>
                             <form @submit ="addTask">
                                 <br>
                                   <div class="form-group">
                                        <label for="exampleFormControlInput1">Link Imagen</label>
                                        <input type="text" v-model="task.imagen" class="form-control" id="exampleFormControlInput1">
                                    </div>
                                     <br>
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Título</label>
                                        <input type="text" v-model="task.titulo" class="form-control" id="exampleFormControlInput1">
                                    </div>
                                    
                                     <br>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Descripción</label>
                                        <textarea v-model="task.descripcion" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                     <br>
                                     <div class="form-group">
                                        <label for="exampleFormControlSelect1">Duración</label>
                                        <select class="form-control" v-model="task.duracion" id="exampleFormControlSelect1" placeholder="Selecciona el tiempo de duración">
                                        <option>1 Hora</option>
                                        <option>1 Hora 30 Min</option>
                                        <option>2 Horas</option>
                                        <option>2 Horas 30 Min</option>
                                        <option>3 Horas</option>
                                        <option>3 Horas 30 Min</option>
                                        <option>4 Horas</option>
                                        </select>
                                     </div>
                                     <br>
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Múltiples categorías</label>
                                        <select class="form-control" v-model="task.categorias" id="exampleFormControlSelect1" placeholder="Selecciona la categoría">
                                        <option>Acción</option>
                                        <option>Aventuras</option>
                                        <option>Ciencia Ficción</option>
                                        <option>Comedia</option>
                                        <option>Drama</option>
                                        <option>Documental</option>
                                        <option>Terror</option>
                                        </select>
                                     </div>
                                     <br>
                                     <div class="form-group">
                                        <label for="exampleFormControlInput1">Trailer de youtube</label>
                                        <input type="text" v-model="task.trailer" class="form-control" id="exampleFormControlInput1" placeholder="link">
                                    </div>
                                     <br>
                                     <div class="form-group">
                                        <label for="exampleFormControlInput1">Fecha de estreno</label>
                                        <input type="date" v-model="task.fechaestreno" class="form-control" id="exampleFormControlInput1">
                                    </div>
                                    
                                     <br>

                                     <button class="btn btn-primary btn-block">Guardar</button>
                                    
                                    <br> 
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-md-9"> 
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">Caratula</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Duración</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Trailer</th>
                            <th scope="col">Estreno</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="tabla" v-for="task of tasks">

                                <td> <img v-bind:src="task.imagen"></td>
                                <td>{{task.titulo}}</td>
                                <td>{{task.descripcion}}</td>
                                <td>{{task.duracion}}</td>
                                <td>{{task.categorias}}</td>
                                <td><a v-bind:href="task.trailer" target="_blank">Ver Trailer</a></td>
                                <td>{{task.fechaestreno}}</td>
                            </tr>
                        </tbody>
                        </table>
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
    class Task{
        constructor(imagen, titulo, descripcion, duracion, categorias, trailer, fechaestreno){
                this.imagen = imagen;
                this.titulo = titulo;
                this.descripcion = descripcion;
                this.duracion = duracion;
                this.categorias = categorias;
                this.trailer = trailer;
                this.fechaestreno = fechaestreno;
        }
    }
    export default {
        data(){
            return {

                    task: new Task(),
                    tasks: []
            }
        },
        created(){
            this.getTasks();
        },
        methods:{
            addTask() {
                fetch('/api/tasks', {
                    method: 'POST',
                    body: JSON.stringify(this.task),
                    headers: {
                        'Accept' : 'application/json',
                        'Content-type' : 'application/json'
                    }
             })  
                .then(res => res.json())
                .then(data => {
                     this.getTasks()
                })
                
            },

            getTasks(){
                fetch('/api/tasks')
                    .then(res => res.json())
                    .then(data => {
                        this.tasks = data
                        console.log(this.tasks)
                    })
            },
            deleteTask(){
                console.log('Datos Eliminados')
            }
        }
    }
 
</script>
