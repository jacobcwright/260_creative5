<template>
<div>
        <nav @click.prevent="logout" id="logout">logout</nav>
    <div class="layout">
            <div class="section">
                <h1>Todo</h1>
                <form @submit.prevent="AddTodo">
                    <input type="text" v-model="TodoText" placeholder="Todo Item">
                </form>
                <ul>
                    <li v-for="todo in Todos"> {{ todo.text }} </li>
                </ul>
                <button type="reset" @click.prevent="ClearTodo">Clear</button>
            </div>
            <div class="section">
                <h1>Notes</h1>
                <form @submit.prevent="AddNote">
                    <input type="text" v-model="NoteText" placeholder="Notes">
                </form>
                <ul>
                    <li v-for="note in Notes"> {{ note.text }} </li>
                </ul>
                <button type="reset" @click.prevent="ClearNote">Clear</button>
            </div>
            <div class="section">
                <h1>Goals</h1>
                <form @submit.prevent="AddGoal">
                    <input type="text" v-model="GoalText" placeholder="Goal">
                </form>
                <ul>
                    <li v-for="goal in Goals"> {{ goal.text }} </li>
                </ul>
                <button type="reset" @click.prevent="ClearGoal">Clear</button>
            </div>
            <div class="section">
                <h1>Gratitude</h1>
                <form @submit.prevent="AddGratitude">
                    <input type="text" v-model="GratitudeText" placeholder="I'm thankful for...">
                </form>
                <ul>
                    <li v-for="gratitude in Gratitudes"> {{ gratitude.text }} </li>
                </ul>
                <button type="reset" @click.prevent="ClearGratitude">Clear</button>
            </div>
    </div>
        </div>
</template>

<style scoped>
    .layout{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(50%, auto);
    /* border: 1px solid; */
    padding: 10px;
}

.section {
    border: 1px dashed;
    /* padding-right: 75px; */
    padding-bottom: 25%;
    padding-left: 10px;
    padding-top: 10px;
    /* background-image: url(../img/tree.png); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;   
}

 #logout {
     text-align: right;
     text-decoration: underline;
     margin-right: 15px;
 }

</style>

<script>
export default {
    name: 'layout',
    data(){
        return {
            user: null,
            Todos: [],
            TodoText: null,
            Notes: [],
            NoteText: null,
            Goals: [],
            GoalText: null,
            Gratitudes: [],
            GratitudeText: null,
            error: null,
        }
    }
}
</script>
