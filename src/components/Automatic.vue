<template>
  <div>
    <Tabs></Tabs>
    
    <h3 class="card-title my-3 ml-2 pt-2">Order food</h3>
    <div v-for="article in articles" :key="article.id" class="card" data-unit="switch-light-6">
      <img v-bind:src="article.image" class="embed-responsive embed-responsive-item embed-responsive-1by1">
      <div style="position: relative;" class="card-body d-flex flex-row justify-content-start">
        <div class="title-status"><h5>{{article.title}}<span style="float: right;"> <button v-bind:id="article.id" @click="checkOrder" class="btn btn-sm btn-primary">Order</button></span></h5>
        <p style="margin-right: 80px;" class="status"><span class="arm">{{article.description}}</span></p></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Tabs from '../components/Tabs'

export default {
    name: "service",
    components:{
      Tabs
    },
    data(){
      return {
        articles: [{name: 'article1', id:1},{name: 'article2', id:2},{name: 'article3', id:3},{name: 'article4', id:4}]
      }
    },
    created(){
      axios.get(`http://51310c97.ngrok.io/api/menu`
      ).then(response => {
        console.log(response.data);
        this.articles = response.data
      })
    },
    methods:{
      checkOrder(e) {
        this.$swal({title: 'Additional comment?', input: 'text',  showCancelButton: true, confirmButtonText: 'Save'})
          .then((result) => {
            if (result.dismiss == "cancel")  return;
            if(result.value!="" && result.value!=undefined){
              axios.post(`http://51310c97.ngrok.io/api/orders/create`,{
                  quantity: 1,
                  foodID: e.target.id,
                  comment: result.value
                }
              ).then(response => {
                console.log(response);
              })
            }
          });
      }
        /*
        console.log( if(!e.target.classList.contains('checked')){
          console.log("unchecked");
          e.target.classList.add("checked");
          axios.post(`http://51310c97.ngrok.io/api/device/${e.target.id}`,{
              state: 'on'
            }
          ).then(response => {
            console.log(response);
          })

        } else {
          console.log("checked");

          e.target.classList.remove('checked')
          axios.post(`http://51310c97.ngrok.io/api/device/${e.target.id}`,{
              state: 'off'
            }
          ).then(response => {
            console.log(response);
          })
        }e.target.id);

      }
*/
  }
}
</script>

<style scoped>

</style>
