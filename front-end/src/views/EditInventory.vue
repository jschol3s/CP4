<template>
<div class="Inventory">
  <div class="heading">
    <h3><u>Add Inventory</u></h3>
  </div>
  <div class="add">
    <div class="form">
      <div class="addTitle">
        <input v-model="title" placeholder="Name of Object">
        <p></p>
      </div>
      <div class="description">
        <textarea v-model="description" placeholder="Description of Object"></textarea>
        <p></p>
      </div>
      <div class="color">
        <p><u>Color</u></p>
        <select v-model="selectedColor">
          <option v-for="s in colors" v-bind:key="s.color" placeholder="Color">
            {{s.color}}
          </option>
        </select>
      </div>
      <input type="file" name="photo" @change="fileChanged">
      <button @click="upload">Upload</button>
    </div>
    <div class="upload" v-if="addItem">
      <h2>{{addItem.title}}</h2>
      <img :src="addItem.path" />
      <p>{{addItem.description}}</p>
      <p>Color: {{addItem.selectedColor}}</p>
    </div>
  </div>
  <div class="heading">
    <h3><u>Edit or Delete Inventory</u></h3>
  </div>
  <div class="edit">
    <input v-model="findTitle" placeholder="Search">
    <div class="break">
      <div class="suggestions" v-if="suggestions.length > 0">
        <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.title}}
        </div>
      </div>
    </div>
    <div class="upload" v-if="findItem">
      <input v-model="findItem.title">
      <p></p>
      <img :src="findItem.path" />
      <div>
        <textarea v-model="findItem.description"></textarea>
      </div>
      <p></p>
      <div class="editColor">
        <select v-model="findItem.selectedColor">
          <option v-for="s in colors" v-bind:key="s.color" placeholder="Color">
            {{s.color}}
          </option>
        </select>
      </div>
      <div class="actions" v-if="findItem">
        <button @click="deleteItem(findItem)">Delete</button>
        <button @click="editItem(findItem)">Edit</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AddFurniture',
  data() {
    return {
      title: "",
      file: null,
      description: "",
      selectedColor: "",
      colors: [{
          color: "Red"
        },
        {
          color: "Green"
        },
        {
          color: "Blue"
        },
        {
          color: "Orange"
        },
        {
          color: "Purple"
        },
        {
          color: "Yellow"
        },
        {
          color: "Black"
        },
        {
          color: "White"
        },
        {
          color: "Gold"
        },
        {
          color: "Silver"
        },
        {
          color: "Wood"
        },
      ],
      addItem: null,
      items: [],
      findTitle: "",
      findItem: null,
    }
  },
  computed: {
    suggestions() {
      let items = this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
      return items.sort((a, b) => a.title > b.title);
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      //try {
      const formData = new FormData();
      formData.append('photo', this.file, this.file.name)
      let r1 = await axios.post('/api/photos', formData);
      let r2 = await axios.post('/api/items', {
        title: this.title,
        path: r1.data.path,
        description: this.description,
        selectedColor: this.selectedColor,
      });
      this.addItem = r2.data;
      //} catch (error) {
      //console.log(error);
      //}
    },
    async getItems() {
      //try {
      let response = await axios.get("/api/items");
      this.items = response.data;
      return true;
      //} catch (error) {
      //console.log(error);
      //}
    },
    selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
    },
    async deleteItem(item) {
      //try {
      await axios.delete("/api/items/" + item._id);
      this.findItem = null;
      this.getItems();
      return true;
      //} catch (error) {
      //console.log(error);
      //}
    },
    async editItem(item) {
      //try {
      await axios.put("/api/items/" + item._id, {
        title: this.findItem.title,
        description: this.findItem.description,
        selectedColor: this.findItem.selectedColor,
      });
      this.findItem = null;
      this.getItems();
      return true;
      //} catch (error) {
      //console.log(error);
      //}
    },
  }
}
</script>

<style scoped>
.Inventory {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 10%;
}

.break {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.upload {
  margin-top: 3%;
}

.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  flex-basis: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h3 {
  margin-top: 5%;
  margin-bottom: 2%;
}

input,
textarea,
select,
button {
  font-size: 1em;
}

.form {
  flex-basis: 100%;
  justify-content: center;
}

.description {
  margin: 3%;
}

.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

.suggestions {
  width: 170px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #e7cfcd;
  color: #fff;
}

.color {
  margin-bottom: 2%;
}

.editColor {
  margin-bottom: 2%;
}
</style>
