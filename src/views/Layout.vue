<template>
<div>
        <nav @click.prevent="logout" id="logout"><a>logout</a></nav>
    <div class="layout">
            <div class="section">
                <h1>Todo</h1>
                <form @submit.prevent="AddTodo">
                    <input type="text" v-model="TodoText" placeholder="Todo Item">
                    <button type="submit">add</button>
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
                    <button type="submit">add</button>
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
                    <button type="submit">add</button>
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
                    <button type="submit">add</button>
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
     size: 12px;
 }

#logout :hover {
    color: blue;
    font-size: 105%;
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
    },
    async created(){
        console.log("created");
        this.user = this.$store.state.user;
        await this.$store.dispatch("getLists", 
        {
            user: this.$store.state.user._id
        });
        this.Todos = this.$store.state.Todos;
        this.Notes = this.$store.state.Notes;
        this.Goals = this.$store.state.Goals;
        this.Gratitudes = this.$store.state.Gratitudes;
    },
    computed: {
        getUser(){
            this.user = this.$store.state.user
        },

    },
    methods: {
        async logout(){
            try {
                this.user = await this.$store.dispatch("logout"); 
                this.$router.push('/'); /* CHANGE PAGE */
            } catch(error){
                console.log(error);
            }
        },
        async AddTodo(){
            try {
                this.Todos = await this.$store.dispatch("addItem", {
                    user: this.$store.state.user._id,
                    type: 'Todo',
                    text: this.TodoText,
                });
                this.TodoText = "";
                await this.$store.dispatch("getLists", 
                {
                    user: this.$store.state.user._id
                });
                this.Todos = this.$store.state.Todos;
            }catch(error){
                console.log(error);
            }
        },
        async AddNote(){
            try {
                this.Notes = await this.$store.dispatch("addItem", {
                    user: this.$store.state.user._id,
                    type: 'Note',
                    text: this.NoteText,
                });
                this.NoteText = "";
                await this.$store.dispatch("getLists", 
                {
                    user: this.$store.state.user._id
                });
                this.Notes = this.$store.state.Notes;
            }catch(error){
                console.log(error);
            }
        },
        async AddGoal(){
            try {
                this.Goals = await this.$store.dispatch("addItem", {
                    user: this.$store.state.user._id,
                    type: 'Goal',
                    text: this.GoalText,
                });
                this.GoalText = "";
                await this.$store.dispatch("getLists", 
                {
                    user: this.$store.state.user._id
                });                
                this.Goals = this.$store.state.Goals;
            }catch(error){
                console.log(error);
            }
        },
        async AddGratitude(){
            try {
                await this.$store.dispatch("addItem", {
                    user: this.$store.state.user._id,
                    type: 'Gratitude',
                    text: this.GratitudeText,
                });
                this.GratitudeText = "";
                await this.$store.dispatch("getLists", 
                {
                    user: this.$store.state.user._id
                });
                this.Gratitudes = this.$store.state.Gratitudes;
            }catch(error){
                console.log(error);
            }
        },
        async ClearTodo() {
            console.log("in clear todo");
            this.Todos = [];
            try {
                let response = await this.$store.dispatch("clear", "todo");
            } catch(error) {
                console.log(error);
            }
        },
        async ClearNote() {
            console.log("in clear note");
            this.Notes = [];
            try {
                let response = await this.$store.dispatch("clear", "note");
            } catch(error) {
                console.log(error);
            }    
        },
        async ClearGoal() {
            console.log("in clear goal");
            this.Goals = [];
            try {
                let response = await this.$store.dispatch("clear", "goal");
            } catch(error) {
                console.log(error);
            }    
        },
        async ClearGratitude() {
            console.log("in clear gratitude");
            this.Gratitudes = [];
            try {
                let response = await this.$store.dispatch("clear", "gratitude");
            } catch(error) {
                console.log(error);
            }    
        },
    }
}
</script>
