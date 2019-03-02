<template>
  <div id="chat">
    <input id="access_token" type="hidden" value="39894c0ff0c548d490ae87f672a81ce9">
    <div id="chat-window">
      <div id="output">
        <p style="width: 90%;" v-for="message in messages" :key="message.id" v-bind:class="{'pull-right': message.sender=='Guest', 'pull-left': message.sender=='Hotel'}"><strong> {{ message.sender }}: </strong>{{ message.body }}</p>
      </div>
    </div>


  </div>
</template>

<script>
import { ApiAiClient } from 'api-ai-javascript'

const client = new ApiAiClient({accessToken: '39894c0ff0c548d490ae87f672a81ce9'}) // <- replace it with yours


export default {
    name: "chatbot",
    data(){
      return {
        typedMessage: "",
        messages: []
      }
    },
    created(){
      /*
      for(var i = 0; i<4; i++)
        this.messages.push({
          body : 'Message ' + i,
          sender: ((i%2)?'Guest':'Hotel')
        })
      */
    },
    mounted() {

      var accessTokenInput = document.getElementById("access_token");
      console.log(accessTokenInput)
      this.$refs.message.focus();
    },
    methods: {
      push(){
        if(this.typedMessage == '')
            return;
        let insertMessage  = {
          body : this.typedMessage,
          sender: 'Guest'
        };
        this.messages.push(insertMessage);

        client.textRequest(this.typedMessage).then((response) => {
          console.log(response)
          let insertMessage  = {
            body : response.result.fulfillment.speech,
            sender: 'Hotel'
          };
          this.messages.push(insertMessage)
        });

        this.typedMessage = '';
      }
    },
    updated(){
      var elem = document.getElementById("chat-window")
      elem.scrollTop = elem.clientHeight;
    },
}
</script>

<style scoped>

  #chat{
    max-width: 600px;
    margin: 30px auto;
    border: 1px solid #ddd;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.05);
    border-radius: 2px;
  }

  #chat-window{
    height: 450px;
    overflow: auto;
    background: #f9f9f9;
  }

  #output p{
    padding: 14px 0px;
    margin: 0 20px;
    border-bottom: 1px solid #e9e9e9;
    color: #555;
  }

  #feedback p{
    color: #aaa;
    padding: 14px 0px;
    margin: 0 20px;
  }

  #output strong{
    color: #488bd8;
  }

  label{
    box-sizing: border-box;
    display: block;
    padding: 10px 20px;
  }

  #handle{
    padding: 10px 20px;
    box-sizing: border-box;
    border: 0;
    display: block;
    width: 100%;
    height: 20px;
    background: #eee;
    border-bottom: 1px solid #eee;
    font-size: 16px;
  }

  input{
    padding: 10px 20px;
    box-sizing: border-box;
    background: #eee;
    border: 0;
    display: block;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #eee;
    font-family: Nunito;
    font-size: 16px;
  }

  button{
    background: linear-gradient(135deg, #64c7fc 0%,#0598e1 100%);
    color: #fff;
    font-size: 18px;
    border: 0;
    padding: 12px 0;
    width: 100%;
    border-radius: 0 0 2px 2px;
  }

</style>
